import type { Vacancy } from '../entity.ts';
import { vacancies } from '../models/vacancies.ts';

/**
 * Тип, полученный из таблицы `vacancies` после её инференса.
 * Позволяет работать с объектом, который возвращает Drizzle.
 */
type vacancyModel = typeof vacancies.$inferInsert;

/**
 * Преобразует запись из БД (`VacanciesRow`) в бизнес‑модель `Vacancy`.
 *
 * @param row — объект, полученный из таблицы `vacancies`.
 * @returns Vacancy — объект, используемый в приложении.
 */
export function fromModelToVacancy(vacancy: vacancyModel): Vacancy {
  return {
    id: vacancy.id,
    companyName: vacancy.companyName,
    positionName: vacancy.positionName,
    sourceLinks: vacancy.sourceLinks,
    vacancyLinks: vacancy.vacancyLinks,
    description: vacancy.description ?? '',
    tags: vacancy.tags ? JSON.stringify(vacancy.tags).split(' ') : [''],
    updateAt: vacancy.updateAt,
  };
}

/**
 * Преобразует бизнес‑модель `Vacancy` в запись, подходящую для записи в БД.
 *
 * @param vacancy — объект бизнес‑логики.
 * @returns VacanciesRow — объект, совместимый со схемой Drizzle.
 *
 * NB: поле `tags` хранится в базе как JSON‑строка, поэтому массив
 * преобразуется через `JSON.stringify`. Если тегов нет — сохраняем `null`.
 */
export function fromVacancyToModel(vacancy: Vacancy): vacancyModel {
  return {
    id: vacancy.id,
    companyName: vacancy.companyName,
    positionName: vacancy.positionName,
    description: vacancy.description ?? undefined,
    sourceLinks: vacancy.sourceLinks,
    vacancyLinks: vacancy.vacancyLinks,
    tags: vacancy.tags ? JSON.parse(vacancy.tags.join(' ')) : undefined,
    updateAt: vacancy.updateAt,
  };
}