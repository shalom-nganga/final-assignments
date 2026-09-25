import { expect, Locator, Page } from '@playwright/test';
import { PaymentData } from '../builders/payment-data.builder';

export class CheckoutPage {
  readonly placeOrderLink: Locator;
  readonly nameOnCardInput: Locator;
  readonly cardNumberInput: Locator;
  readonly cvcInput: Locator;
  readonly expiryMonthInput: Locator;
  readonly expiryYearInput: Locator;
  readonly payAndConfirmButton: Locator;
  readonly orderPlacedMessage: Locator;
  readonly downloadInvoiceLink: Locator;
  readonly continueBtn: Locator;

 // pages/checkout.page.ts
constructor(private readonly page: Page) {
  this.placeOrderLink = page.getByRole('link', { name: 'Place Order', exact: true });
  this.nameOnCardInput = page.locator('input[name="name_on_card"]');
  this.cardNumberInput = page.locator('input[name="card_number"]');
  this.cvcInput = page.locator('input[name="cvc"]');
  this.expiryMonthInput = page.locator('input[name="expiry_month"]');
  this.expiryYearInput = page.locator('input[name="expiry_year"]');
  this.payAndConfirmButton = page.getByRole('button', { name: 'Pay and Confirm Order' });
  
  // Fix: Target the unique data-qa element directly to avoid strict mode violations
  this.orderPlacedMessage = page.locator('[data-qa="order-placed"]');
  
  this.downloadInvoiceLink = page.getByRole('link', { name: 'Download Invoice', exact: true });
  this.continueBtn = page.locator('[data-qa="continue-button"]');
}

  async placeOrder(): Promise<void> {
    await this.placeOrderLink.click();
  }

  async payAndConfirmOrder(paymentData: PaymentData): Promise<void> {
    await this.nameOnCardInput.fill(paymentData.nameOnCard);
    await this.cardNumberInput.fill(paymentData.cardNumber);
    await this.cvcInput.fill(paymentData.cvc);
    await this.expiryMonthInput.fill(paymentData.expiryMonth);
    await this.expiryYearInput.fill(paymentData.expiryYear);
    await this.payAndConfirmButton.click();
  }

  async expectOrderPlaced(): Promise<void> {
    await expect(this.orderPlacedMessage).toBeVisible({ timeout: 10000 });
  }

  async downloadInvoice(): Promise<import('@playwright/test').Download> {
    const downloadPromise = this.page.waitForEvent('download');
    await this.downloadInvoiceLink.click();
    return downloadPromise;
  }

  async continue(): Promise<void> {
    await this.continueBtn.waitFor({ state: 'visible', timeout: 10000 });
    await this.continueBtn.click();
  }
}