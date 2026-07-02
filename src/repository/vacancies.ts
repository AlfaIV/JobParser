import { eq, ne } from 'drizzle-orm';
import { db } from "../db.ts";
import { vacancies } from "../models/vacancies.ts";
import type { Vacancy } from "../entity.ts";
import { fromModelToVacancy, fromVacancyToModel } from '../mappers/vacanciesMapper.ts';

export const getVacancyById = async (id: string): Promise<Vacancy | null> => {
  try {
    const row = await db.select().from(vacancies).where(eq(vacancies.id, id)).get();
    if (!row) return null;
    return fromModelToVacancy(row);
  } catch (e) {
    console.log('ERROR - getVacancyById');
    console.log(e);
    return null;
  }
};

type vacancyModel = typeof vacancies.$inferInsert;

export const setVacancy = async (vacancy: Vacancy): Promise<void> => {
  try {
    const row: vacancyModel = fromVacancyToModel(vacancy);
    await db.insert(vacancies).values(row).run();
  }
  catch (e) {
    console.log('ERROR - setVacancy');
    console.log(e);
  }
};

export const updateVacancyUpdateDateById = async (id: string, updateDate: string): Promise<void> => {
  try {
    const updatedId = await db.update(vacancies).set({updateAt:updateDate}).where(eq(vacancies.id, id)).returning({ updatedId: vacancies.id});
  }
  catch (e) {
    console.log('ERROR - updateVacancyUpdateDateById');
    console.log(e);
  }
};

export const removeVacancyById = async (id: string): Promise<void> => {
  try {
    await db.delete(vacancies).where(eq(vacancies.id, id)).run();
  } catch (e) {
    console.log('ERROR - removeVacancyById');
    console.log(e);
  }
};

export const getOutdatedVacancy = async (updateDate: string): Promise<Vacancy[] | null> => {
  try {
    const rows = await db.select().from(vacancies).where(ne(vacancies.updateAt, updateDate));
    if (!rows) return null;
    return rows.map((row) => fromModelToVacancy(row));
  } catch (e) {
    console.log('ERROR - getVacancyById');
    console.log(e);
    return null;
  }
};
