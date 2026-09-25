import { expect, Locator, Page } from '@playwright/test';

export class ProductsPage {
  readonly productsHeading: Locator;
  readonly firstViewProductLink: Locator;

  constructor(private readonly page: Page) {
    this.productsHeading = page.getByRole('heading', { name: 'All Products', exact: true });
    this.firstViewProductLink = page.locator('a[href^="/product_details/"]').first();
  }

  async expectVisible(): Promise<void> {
    await expect(this.productsHeading).toBeVisible();
  }

  async openFirstProduct(): Promise<void> {
    await this.firstViewProductLink.click();
    await this.page.waitForURL(/\/product_details\//);
  }
}