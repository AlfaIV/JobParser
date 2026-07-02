import { afterEach, describe, expect, it, jest } from "@jest/globals";


import { Vacancy } from "../entity.ts";
// import type { getVacancyById } from "../repository/vacancies.ts";

const mockGetVacancyById = jest.fn<(id: string) => Promise<Vacancy | null>>();
const mockSetVacancy = jest.fn<(vacancy: Vacancy) => Promise<void>>();
const mockUpdateVacancyUpdateDateById = jest.fn<(id: string, date: string) => Promise<void>>();
const mockGetOutdatedVacancy = jest.fn<(date: string) => Promise<Vacancy[] | null>>();
const mockRemoveVacancyById = jest.fn<(id: string) => Promise<void>>();

jest.mock('../repository/vacancies.ts', () => ({
    getVacancyById: mockGetVacancyById,
    setVacancy: mockSetVacancy,
    updateVacancyUpdateDateById: mockUpdateVacancyUpdateDateById,
    getOutdatedVacancy: mockGetOutdatedVacancy,
    removeVacancyById: mockRemoveVacancyById,
}));

import { vacanciesService } from './vacancies.ts'

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

    afterEach(() => {
        jest.clearAllMocks();
    });


    it('добавление вакансий', async () => {
        mockGetVacancyById.mockResolvedValue(null);
        mockGetOutdatedVacancy.mockResolvedValue(null);

        await vacanciesService(vacanciesList, '2001-03-15 15:25');

        expect(mockGetVacancyById).toHaveBeenCalledTimes(vacanciesList.length);
        expect(mockSetVacancy).toHaveBeenCalledTimes(vacanciesList.length);
        expect(mockGetOutdatedVacancy).toHaveBeenCalledWith('2001-03-15 15:25');
    })
})