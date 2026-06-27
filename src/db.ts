import { drizzle } from 'drizzle-orm/better-sqlite3';
import { vacancies } from './models/vacancies.ts';
import { resolve } from 'path';

const dbAbsolutePath = resolve(process.cwd(), './database/vacancies.sqlite');

export const db = drizzle(dbAbsolutePath, {schema:{...vacancies}});
