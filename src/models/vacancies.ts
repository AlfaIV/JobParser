import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { companies } from './companies.ts';

export const vacancies = sqliteTable('vacancies', {
  id: text('id').primaryKey(),
  // companyName: text('company_name').notNull().references(() => companies.companyName),
  companyName: text('company_name').notNull(),
  positionName: text('position_name').notNull(),
  description: text('description'),
  sourceLinks: text('source_links').notNull(),
  vacancyLinks: text('vacancy_links').notNull(),
  updateAt: text('update_at').notNull(),
  tags: text('tags'),
});
