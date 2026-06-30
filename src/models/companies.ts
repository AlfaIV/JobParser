import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { vacancies } from "./vacancies.ts";

export const companies = sqliteTable('companies', {
  companyName: text('company_name').primaryKey(),
  updateAt: text('update_at').notNull(),
  parsedAt: text('parsed_at'),
});