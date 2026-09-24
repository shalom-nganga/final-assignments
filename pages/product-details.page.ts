import { expect, Locator, Page } from '@playwright/test';

export class ProductDetailsPage {
  readonly productInformation: Locator;
  readonly addToCartButton: Locator;
  readonly viewCartLink: Locator;

  constructor(private readonly page: Page) {
    this.productInformation = page.locator('.product-information');
    this.addToCartButton = page.getByRole('button', { name: /Add to cart/ });
    this.viewCartLink = page.getByRole('link', { name: 'View Cart', exact: true });
  }

  async expectVisible(): Promise<void> {
    await expect(this.productInformation).toBeVisible();
  }

  async addProductToCart(): Promise<void> {
    await this.addToCartButton.click();
  }

  async openCart(): Promise<void> {
    await this.viewCartLink.click();
  }
}