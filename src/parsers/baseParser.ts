import { chromium, type Browser, type Page } from '@playwright/test';
import type { SiteParser, Vacancy } from '../entity.ts';
import { chromiumOpitins, ozonBrowserOpitins, ozonCookies } from './configs.ts';

/**
 * BaseParser provides common functionality for concrete site parsers.
 * It manages the playwright browser instance and offers helper methods.
 */
export abstract class BaseParser implements SiteParser {
  protected browser: Browser | null = null;
  protected page: Page | null = null;
  public url: string | null = null;

  constructor(url: string) {
    this.url = url;
  }

  async init(): Promise<void> {
    await this.launch();
    await this.goto(String(this.url));
  }

  /**
   * Parses the given URL and returns an array of Vacancy objects.
   * Concrete implementations must provide the page parsing logic.
   */
  abstract parse(): Promise<Vacancy[]>;

  /**
   * Launches a headless Playwright browser and opens a new page.
   */
  protected async launch(): Promise<void> {
    this.browser = await chromium.launch(chromiumOpitins);

    if (!this.browser) throw new Error('Browser not initialized');
    const context = await this.browser.newContext(ozonBrowserOpitins);

    this.page = await context.newPage();
    if (!this.page) throw new Error('Page not initialized');

    // не очень понятно нужно или нет
    // // Убираем признак автоматизации
    // await this.page.addInitScript(() => {
    //   Object.defineProperty(navigator, 'webdriver', {
    //     get: () => undefined
    //   });
    //   Object.defineProperty(navigator, 'plugins', {
    //     get: () => [1, 2, 3, 4, 5]
    //   });
    //   Object.defineProperty(navigator, 'languages', {
    //     get: () => ['ru', 'en']
    //   });
    //   // @ts-ignore
    //   window.chrome = { runtime: {} };

    //   // Добавляем недостающие свойства
    //   Object.defineProperty(navigator, 'deviceMemory', {
    //     get: () => 8
    //   });
    //   Object.defineProperty(navigator, 'hardwareConcurrency', {
    //     get: () => 8
    //   });
    // });

    await context.addCookies(ozonCookies);
    console.log('✅ Браузер, страница и куки успешно инициализированы');
  }

  /**
   * Navigates to the specified URL.
   */
  protected async goto(url: string, retries: number = 3): Promise<void> {
    if (!this.page) throw new Error('Page not initialized');

    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        console.log(`[${attempt}/${retries}] Загрузка ${url}...`);

        if (attempt > 1) {
          const delay = 2000 + Math.random() * 3000;
          console.log(`⏳ Ожидание ${Math.round(delay)}ms...`);
          await this.delay(delay);
        }

        const response = await this.page.goto(url, {
          waitUntil: 'domcontentloaded',
          timeout: 60000,
        });

        if (response) {
          console.log(`HTTP статус: ${response.status()}`);

          if (response.status() === 200) {
            console.log('✅ Страница успешно загружена');
            return;
          }
        }

        // Ждем загрузки body
        await this.page.waitForSelector('body', { timeout: 10000 });
        console.log('✅ Страница загружена (body найден)');
      } catch (error) {
        console.log(`❌ Попытка ${attempt} не удалась:`, error instanceof Error ? error.message : String(error));

        if (attempt === retries) {
          console.error('🚫 Все попытки загрузки не удались');
          throw error;
        }

        const waitTime = attempt * 2000;
        console.log(`⏳ Ожидание ${waitTime}ms...`);
        await this.delay(waitTime);
      }
    }
  }

  /**
   * Closes the browser instance.
   */
  public async close(): Promise<void> {
    if (this.browser) await this.browser.close();
    this.browser = null;
    this.page = null;
  }

  /**
   * Utility to pause execution for a given number of milliseconds.
   * Helps with rate limiting between requests.
   */
  protected async delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
