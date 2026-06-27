import { resolve } from 'path';
import { OzonParser } from './parsers/ozon/ozonParser.ts';
import { testData as OzonVac } from './parsers/ozon/ozon-vacancies-snapshot.ts';
import { setVacancy } from './repository/vacancies.ts';
import { db } from './db.ts';

// const main = async (): Promise<void> => {
//   // const absolutePath = resolve(process.cwd(), 'src/parsers/ozon/ozon.html');
//   // const url = `file://${absolutePath}`;
//   const url = `https://ozon.tech/vacancies/?directions=Разработка&techs=TypeScript`;

//   const parser = new OzonParser(url);

//   try {
//     await parser.init();            // запускаем браузер и переходим на страницу
//     const vacancies = await parser.parse(); // парсим
//     console.log(vacancies);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await parser.close(); // закрываем браузер
//   }
// };

const main = async (): Promise<void> => {
  for(const vac of OzonVac){
    const fullVac = {...vac, sourceLinks: 'http://my-vac.com'};
    // console.log(fullVac);
    setVacancy(fullVac);
  }
}

main().catch(console.error);
