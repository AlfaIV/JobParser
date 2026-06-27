import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const vacancies = sqliteTable('vacancies', {
  id: text('id').primaryKey(),
  companyName: text('company_name').notNull(),
  positionName: text('position_name').notNull(),
  description: text('description'),
  sourceLinks: text('source_links').notNull(),
  vacancyLinks: text('vacancy_links').notNull(),
  tags: text('tags'),
});
