import { BaseParser } from '../baseParser.ts';
import type { Vacancy } from '../../entity.ts';
import { generateId } from '../../services.ts';

export class OzonParser extends BaseParser {
  constructor(url: string) {
    super(url);
  }

  public async parse(): Promise<Vacancy[]> {
    const vacancies: Vacancy[] = [];
    const vacanciesListXpath = "//div[@class='_vacanciesWrapper_3456m_52']/a";
    const vacanciesLayout = await this.page?.locator(`xpath=${vacanciesListXpath}`).all();

    if (vacanciesLayout) {
      for (const anchor of vacanciesLayout) {
        const href = await anchor.evaluate((el) => el.getAttribute('href'));
        if (href){
          const id = generateId(href);
          const positionName = await anchor.locator(`xpath=/div[1]`).innerText();
          const tags = (await anchor.locator(`xpath=/div[2]`).innerText()).split('\n');
  
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

    return vacancies;
  }

  /**
   * Parses the Ozon tech careers page and returns a list of Vacancy objects.
   */
  // public async parse(): Promise<Vacancy[]> {
  //   // Get all anchor elements that point to a vacancy detail page
  //   const anchors = await this.page?.$$('a[href^="https://ozon.tech/vacancies/"]');

  //   const vacancies: Vacancy[] = [];
  //   if (anchors) {
  //     for (let i = 0; i < anchors.length; i++) {
  //       const anchor = anchors[i];

  //       // Extract the vacancy URL
  //       const href = await anchor.evaluate(el => el.getAttribute('href')!);
  //       // Extract a short identifier from the URL (first part before '-go-...')
  //       const uuidMatch = href.match(/\/vacancies\/([0-9a-f-]+)-/);
  //       const id = uuidMatch ? Number(uuidMatch[1].split('-')[0]) : i + 1;

  //       // Find the heading element that contains the position name
  //       const titleHandle = await anchor.$('h2');
  //       const positionName = titleHandle
  //         ? await titleHandle.evaluate(el => el.innerText.trim())
  //         : '';

  //       vacancies.push({
  //         id,
  //         companyName: 'Ozon',
  //         positionName,
  //         description: '',
  //         sourceLinks: href,
  //         vacancyLinks: '',
  //       });
  //     }
  //   }

  //   return vacancies;
  // }
}
