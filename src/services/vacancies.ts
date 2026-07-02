    import type { Vacancy } from "../entity.ts";
    import { getOutdatedVacancy, 
        getVacancyById, 
        removeVacancyById, 
        setVacancy, 
        updateVacancyUpdateDateById
    } from "../repository/vacancies.ts";
    // import { Datatime } from "../utils/datatime.ts";

    export const vacanciesService = async (VacansiesList: Vacancy[], date: string) => {
        // const date = (new Datatime).getNow();

        // перебираем вакансии которые спарсились
        // если есть обновляем дату
        // если нет добовляем
        for (const vacanse of VacansiesList) {
            console.log('Vacation name: ', vacanse.positionName);
            const searchResult = await getVacancyById(vacanse.id);
            // console.log(searchResult);
            if (!searchResult) {
                const fullVac: Vacancy = { ...vacanse, sourceLinks: 'http://my-vac.com', updateAt: date }; // потенциально баг
                console.log('Vacation insert');
                setVacancy(fullVac);
            } else {
                console.log('Vacation in DB');
                updateVacancyUpdateDateById(vacanse.id, date);
            }
        }

        // находим и удаляем вакансии у которых даты не обновились
        // значит их нет в новом списке
        // значит они закрылиь
        const outdatedVacancy = await getOutdatedVacancy(date);
        console.log("outdatedVacancy: ",outdatedVacancy);
        if (Array.isArray(outdatedVacancy) && outdatedVacancy.length > 0) {
            for (let vacancy of outdatedVacancy) {
                console.log('Removae vac from DB', vacancy.positionName);
                removeVacancyById(vacancy.id);
            }
        }
    };