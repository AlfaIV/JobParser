import { BaseParser } from '../baseParser.ts';
import type { Vacancy } from '../../entity.ts';
import { generateId } from '../../services.ts';

export class OzonParser extends BaseParser {
  constructor(url: string) {
    super(url);
  }

  /**
   * Parses the Ozon tech careers page and returns a list of Vacancy objects.
   */
  public async parse(): Promise<Vacancy[]> {
    const vacancies: Vacancy[] = [];
    try {
      const vacanciesListXpath = "//div[@class='_vacanciesWrapper_3456m_52']/a";
      await this.page?.waitForSelector(vacanciesListXpath, { timeout: 10000 });
      const vacanciesLayout = await this.page?.locator(`xpath=${vacanciesListXpath}`).all();
      if(!vacanciesLayout) console.log("Локатор со списком вакансий не найден")

      if (vacanciesLayout) {
        for (const anchor of vacanciesLayout) {
          const href = await anchor.evaluate((el) => el.getAttribute('href'));
          if(!href) console.log("Локатор со ссылкой на вакансию не найден")

          if (href) {
            const id = generateId(href);
            const positionName = await anchor.locator(`xpath=/div[1]`).innerText();
            if(!positionName) console.log("Локатор со ссылкой на название вакансии не найден")
            const tags = (await anchor.locator(`xpath=/div[2]`).innerText()).split('\n');
            if(!tags) console.log("Локатор со ссылкой на теги вакансии не найден")

            vacancies.push({
              id,
              companyName: 'Ozon',
              positionName,
              sourceLinks: String(this.url),
              vacancyLinks: String(href),
              tags
            });
          }
        }
      }
    } catch (error) {
      console.log("Ozon parse error");
      console.log(error);
    }
    finally {
      return vacancies
    }
  }
}
