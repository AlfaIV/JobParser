import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { vacancies } from "./vacancies.ts";

export const companies = sqliteTable('companies', {
  companyName: text('company_name')
    .references(() => vacancies.id)
    .primaryKey(),
  parsedAt: text('parsed_at'),
});