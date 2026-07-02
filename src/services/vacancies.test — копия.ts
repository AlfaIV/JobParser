import { afterEach, describe, expect, it, jest } from "@jest/globals";
import * as vacanciesRepository from '../repository/vacancies.ts';
import { Vacancy } from "../entity.ts";
import { vacanciesService } from "./vacancies.ts";

let mockGetVacancyById: jest.SpiedFunction<typeof vacanciesRepository.getVacancyById>;
let mockSetVacancy: jest.SpiedFunction<typeof vacanciesRepository.setVacancy>;
let mockUpdateVacancyUpdateDateById: jest.SpiedFunction<typeof vacanciesRepository.updateVacancyUpdateDateById>;
let mockGetOutdatedVacancy: jest.SpiedFunction<typeof vacanciesRepository.getOutdatedVacancy>;
let mockRemoveVacancyById: jest.SpiedFunction<typeof vacanciesRepository.removeVacancyById>;

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

    beforeEach(() => {
        mockGetVacancyById = jest.spyOn(vacanciesRepository, 'getVacancyById');
        mockSetVacancy = jest.spyOn(vacanciesRepository, 'setVacancy');
        mockUpdateVacancyUpdateDateById = jest.spyOn(vacanciesRepository, 'updateVacancyUpdateDateById');
        mockGetOutdatedVacancy = jest.spyOn(vacanciesRepository, 'getOutdatedVacancy');
        mockRemoveVacancyById = jest.spyOn(vacanciesRepository, 'removeVacancyById');
    });

    afterEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();
    });


    it('добавление вакансий', async () => {
        mockGetVacancyById.mockResolvedValue(null);
        mockGetOutdatedVacancy.mockResolvedValue(null);

        await vacanciesService(vacanciesList, currentDate);

        expect(mockGetVacancyById).toHaveBeenCalledTimes(vacanciesList.length);
        expect(mockSetVacancy).toHaveBeenCalledTimes(vacanciesList.length);
        expect(mockGetOutdatedVacancy).toHaveBeenCalledWith(currentDate);
    })
})