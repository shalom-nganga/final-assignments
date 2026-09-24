import { expect, Locator, Page } from '@playwright/test';

export class CartPage {
  readonly cartTable: Locator;
  readonly proceedToCheckoutButton: Locator;
  readonly registerLoginLink: Locator;

  constructor(private readonly page: Page) {
    this.cartTable = page.locator('#cart_info_table');
    this.proceedToCheckoutButton = page.getByText('Proceed To Checkout', { exact: true });
    this.registerLoginLink = page.getByRole('link', { name: 'Register / Login', exact: true });
  }

  async expectVisible(): Promise<void> {
    await expect(this.cartTable).toBeVisible();
  }

  async proceedToCheckout(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }

  async openLogin(): Promise<void> {
    await this.registerLoginLink.click();
  }
}