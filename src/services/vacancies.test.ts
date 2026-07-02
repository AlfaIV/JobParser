import { afterEach, beforeEach, describe, expect, it, jest } from "@jest/globals";
import { Vacancy } from "../entity.ts";

// Создаем моки ДО импорта сервиса
const mockGetVacancyById = jest.fn<(id: string) => Promise<Vacancy | null>>();
const mockSetVacancy = jest.fn<(vacancy: Vacancy) => Promise<void>>();
const mockUpdateVacancyUpdateDateById = jest.fn<(id: string, date: string) => Promise<void>>();
const mockGetOutdatedVacancy = jest.fn<(date: string) => Promise<Vacancy[] | null>>();
const mockRemoveVacancyById = jest.fn<(id: string) => Promise<void>>();

// Мокаем модуль с помощью jest.mock
jest.unstable_mockModule('../repository/vacancies.ts', () => ({
    getVacancyById: mockGetVacancyById,
    setVacancy: mockSetVacancy,
    updateVacancyUpdateDateById: mockUpdateVacancyUpdateDateById,
    getOutdatedVacancy: mockGetOutdatedVacancy,
    removeVacancyById: mockRemoveVacancyById,
}));

// Импортируем сервис ПОСЛЕ мока
import { vacanciesService } from "./vacancies.ts";

describe('vacanciesService', () => {
    const vacanciesList: Vacancy[] = [
        {
            id: 'CLKs8vBChrXygVikO7fvIZ',
            companyName: 'Ozon',
            positionName: 'C#-разработчик, Поставки Global',
            vacancyLinks: 'https://ozon.tech/vacancies/de06a134-2afe-445d-8e23-fdc80bcb8cd7-c-razrabotchik-postavki-global/',
            tags: ['Middle', 'Удалённая работа'],
            updateAt: '2001-03-15 11:25',
            sourceLinks: 'htpps://test.com',
        },
        {
            id: 'xWdsiwqp48vscvlRRgRmxF',
            companyName: 'Ozon',
            positionName: 'C#-разработчик, система WMS',
            vacancyLinks: 'https://ozon.tech/vacancies/bee7120e-189b-4e5b-b4c3-a6345c91c6c6-c-razrabotchik-sistema-wms/',
            tags: ['Middle', 'Удалённая работа'],
            updateAt: '2001-03-15 11:25',
            sourceLinks: 'htpps://test.com',
        },
        {
            id: 'zQyzF5rP4TNXXBOLikhDi6',
            companyName: 'Ozon',
            positionName: 'C#-разработчик, Товародвижение и коммерция',
            vacancyLinks: 'https://ozon.tech/vacancies/2afc6e1b-329c-4b71-b0a2-ab5fed0a761a-c-razrabotchik-tovarodvizhenie-i-kommertsiia/',
            tags: ['Товарные операции', 'Middle', 'Удалённая работа'],
            updateAt: '2001-03-15 11:25',
            sourceLinks: 'htpps://test.com',
        },
    ];

    const currentDate = '2001-03-15 15:25';

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('добавление новых вакансий', async () => {
        // Все вакансии новые
        mockGetVacancyById.mockResolvedValue(null);
        mockGetOutdatedVacancy.mockResolvedValue([]);

        await vacanciesService(vacanciesList, currentDate);

        // Проверяем, что каждая вакансия была проверена
        expect(mockGetVacancyById).toHaveBeenCalledTimes(vacanciesList.length);
        
        // Проверяем, что все вакансии добавлены
        expect(mockSetVacancy).toHaveBeenCalledTimes(vacanciesList.length);
        
        // Проверяем поиск устаревших
        expect(mockGetOutdatedVacancy).toHaveBeenCalledWith(currentDate);
        
        // Проверяем, что удаление не вызывалось
        expect(mockRemoveVacancyById).not.toHaveBeenCalled();
    });

    it.skip('обновление существующих вакансий', async () => {
        // Все вакансии уже существуют
        mockGetVacancyById.mockImplementation((id) => {
            const vacancy = vacanciesList.find(v => v.id === id);
            return Promise.resolve(vacancy || null);
        });
        mockGetOutdatedVacancy.mockResolvedValue([]);

        await vacanciesService(vacanciesList, currentDate);

        // Проверяем обновление всех вакансий
        expect(mockUpdateVacancyUpdateDateById).toHaveBeenCalledTimes(vacanciesList.length);
        vacanciesList.forEach((vacancy) => {
            expect(mockUpdateVacancyUpdateDateById).toHaveBeenCalledWith(vacancy.id, currentDate);
        });
        
        // Проверяем, что добавление не вызывалось
        expect(mockSetVacancy).not.toHaveBeenCalled();
    });

    it.skip('удаление устаревших вакансий', async () => {
        const outdatedVacancies = [vacanciesList[0], vacanciesList[1]];
        mockGetVacancyById.mockResolvedValue(null);
        mockGetOutdatedVacancy.mockResolvedValue(outdatedVacancies);

        await vacanciesService(vacanciesList, currentDate);

        // Проверяем добавление новых
        expect(mockSetVacancy).toHaveBeenCalledTimes(vacanciesList.length);
        
        // Проверяем удаление устаревших
        expect(mockRemoveVacancyById).toHaveBeenCalledTimes(outdatedVacancies.length);
        outdatedVacancies.forEach((vacancy, index) => {
            expect(mockRemoveVacancyById).toHaveBeenNthCalledWith(index + 1, vacancy.id);
        });
    });

    it.skip('смешанный сценарий: добавление, обновление и удаление', async () => {
        // Первая вакансия существует
        mockGetVacancyById.mockImplementation((id) => {
            if (id === vacanciesList[0].id) {
                return Promise.resolve(vacanciesList[0]);
            }
            return Promise.resolve(null);
        });
        
        // Вторая вакансия устарела
        const outdatedVacancies = [vacanciesList[1]];
        mockGetOutdatedVacancy.mockResolvedValue(outdatedVacancies);

        await vacanciesService(vacanciesList, currentDate);

        // Проверяем обновление существующей
        expect(mockUpdateVacancyUpdateDateById).toHaveBeenCalledTimes(1);
        expect(mockUpdateVacancyUpdateDateById).toHaveBeenCalledWith(vacanciesList[0].id, currentDate);
        
        // Проверяем добавление новых (только третья, т.к. вторая устарела)
        expect(mockSetVacancy).toHaveBeenCalledTimes(vacanciesList.length - 1);
        
        // Проверяем удаление устаревшей
        expect(mockRemoveVacancyById).toHaveBeenCalledTimes(1);
        expect(mockRemoveVacancyById).toHaveBeenCalledWith(vacanciesList[1].id);
    });

    it.skip('обработка null вместо массива устаревших вакансий', async () => {
        mockGetVacancyById.mockResolvedValue(null);
        mockGetOutdatedVacancy.mockResolvedValue(null);

        await vacanciesService(vacanciesList, currentDate);

        // Все вакансии добавлены
        expect(mockSetVacancy).toHaveBeenCalledTimes(vacanciesList.length);
        
        // Удаление не вызывалось
        expect(mockRemoveVacancyById).not.toHaveBeenCalled();
    });

    it.skip('добавление вакансии с sourceLinks по умолчанию', async () => {
        const vacancyWithoutSource = {
            ...vacanciesList[0],
            sourceLinks: undefined as any
        };
        mockGetVacancyById.mockResolvedValue(null);
        mockGetOutdatedVacancy.mockResolvedValue([]);

        await vacanciesService([vacancyWithoutSource], currentDate);

        // Проверяем, что вакансия добавлена с sourceLinks по умолчанию
        expect(mockSetVacancy).toHaveBeenCalledWith({
            ...vacancyWithoutSource,
            sourceLinks: 'http://my-vac.com',
            updateAt: currentDate
        });
    });

    it.skip('обработка ошибки в getVacancyById', async () => {
        // Первая вакансия вызывает ошибку, остальные успешно обрабатываются
        mockGetVacancyById
            .mockRejectedValueOnce(new Error('DB Error'))
            .mockResolvedValue(null)
            .mockResolvedValue(null);
        mockGetOutdatedVacancy.mockResolvedValue([]);

        await vacanciesService(vacanciesList, currentDate);

        // Должны обработать оставшиеся вакансии
        expect(mockSetVacancy).toHaveBeenCalledTimes(vacanciesList.length - 1);
        expect(mockGetVacancyById).toHaveBeenCalledTimes(vacanciesList.length);
    });

    it.skip('использование переданной даты для всех операций', async () => {
        const customDate = '2024-01-15 20:00:00';
        mockGetVacancyById.mockResolvedValue(null);
        mockGetOutdatedVacancy.mockResolvedValue([]);

        await vacanciesService(vacanciesList, customDate);

        // Проверяем, что все вакансии добавлены с правильной датой
        expect(mockSetVacancy).toHaveBeenCalledTimes(vacanciesList.length);
        expect(mockSetVacancy).toHaveBeenCalledWith(
            expect.objectContaining({
                updateAt: customDate
            })
        );
        
        // Проверяем поиск устаревших с правильной датой
        expect(mockGetOutdatedVacancy).toHaveBeenCalledWith(customDate);
    });
});