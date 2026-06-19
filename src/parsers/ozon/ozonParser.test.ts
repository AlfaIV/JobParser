import { resolve } from 'path';
import { test, expect } from '@playwright/test';
import { OzonParser } from './ozonParser.ts';
import { testData } from './ozon-vacancies-snapshot.ts';

const absolutePath = resolve(process.cwd(), 'src/parsers/ozon/ozon.html');
const url = `file://${absolutePath}`;
let parser: OzonParser;

test.beforeAll('Инициализация парсера', async () => {
    parser = new OzonParser(url);
    await parser.init();
});

test.afterAll('Сброс парсера', async () => {
    await parser.close();
});

test.describe('Тестирование парсера Ozon', async () => {
    test('Сверка работы парсера со снапшотом', async () => {
        const vacancies = await parser.parse();
        console.log(vacancies);
        await expect(vacancies).toEqual(testData);
    })
});
