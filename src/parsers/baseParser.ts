import { chromium, type Browser, type Page } from '@playwright/test';
import type { SiteParser, Vacancy } from '../entity.ts';

/**
 * BaseParser provides common functionality for concrete site parsers.
 * It manages the playwright browser instance and offers helper methods.
 */
export abstract class BaseParser implements SiteParser {
  protected browser: Browser | null = null;
  protected page: Page | null = null;
  public url: string | null = null;

  constructor(url: string){
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
    this.browser = await chromium.launch({ headless: true });
    if (!this.browser) throw new Error('Browser not initialized');
    this.page = await this.browser.newPage();
  }

  /**
   * Navigates to the specified URL.
   */
  protected async goto(url: string): Promise<void> {
    if (!this.page) throw new Error('Page not initialized');
    try{
      await this.page.goto(url, { waitUntil: 'load' });
    }
    catch(e){
      console.log('Not valid URL');
      console.log('error: ', e);
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
