import { eq } from 'drizzle-orm';
import { db } from "../db.ts";
import { vacancies } from "../models/vacancies.ts";
import type { Vacancy } from "../entity.ts";

export const getVacancyById = async (id: string): Promise<Vacancy | null> => {
  const row = await db.select().from(vacancies).where(eq(vacancies.id, id)).get();
  if (!row) return null;
  return {
    id: row.id,
    companyName: row.companyName,
    positionName: row.positionName,
    description: row.description ?? undefined,
    sourceLinks: row.sourceLinks,
    vacancyLinks: row.vacancyLinks,
    tags: row.tags ? JSON.parse(row.tags) : undefined,
  };
};

type vacancyModel = typeof vacancies.$inferInsert;

export const setVacancy = async (vacancy: Vacancy): Promise<void> => {
  try {
    const row: vacancyModel = {
      id: vacancy.id,
      companyName: vacancy.companyName,
      positionName: vacancy.positionName,
      sourceLinks: vacancy.sourceLinks,
      vacancyLinks: vacancy.vacancyLinks,
      description: vacancy.description ?? '',
      tags: vacancy.tags ? JSON.stringify(vacancy.tags) : '',
    };


    await db.insert(vacancies).values(row).run();
  }
  catch (e) {
    console.log('ERROR - setVacancy');
    console.log(e);
  }
};

