import { resolve } from 'path';
import { OzonParser } from './parsers/ozon/ozonParser.ts';

const main = async (): Promise<void> => {
  const absolutePath = resolve(process.cwd(), 'src/parsers/ozon/ozon.html');
  const url = `file://${absolutePath}`;

  const parser = new OzonParser(url);

  try {
    await parser.init();            // запускаем браузер и переходим на страницу
    const vacancies = await parser.parse(); // парсим
    console.log(vacancies);
  } catch (err) {
    console.error(err);
  } finally {
    await parser.close(); // закрываем браузер
  }
};

main().catch(console.error);