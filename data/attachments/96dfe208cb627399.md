# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout/checkout.spec.ts >> Checkout >> selects a product, adds it to the cart, and completes checkout
- Location: tests/checkout/checkout.spec.ts:4:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[data-qa="order-placed"]').or(getByText('Order Placed!', { exact: true }))
Expected: visible
Error: strict mode violation: locator('[data-qa="order-placed"]').or(getByText('Order Placed!', { exact: true })) resolved to 2 elements:
    1) <h2 data-qa="order-placed" class="title text-center">…</h2> aka getByRole('heading', { name: 'Order Placed!' })
    2) <b>Order Placed!</b> aka getByText('Order Placed!')

Call log:
  - Expect "toBeVisible" locator('[data-qa="order-placed"]').or(getByText('Order Placed!', { exact: true })) with timeout 10000ms
  - waiting for locator('[data-qa="order-placed"]').or(getByText('Order Placed!', { exact: true }))

```

# Page snapshot

```yaml
- generic [active] [ref=f54e1]:
  - banner [ref=f54e2]:
    - generic [ref=f54e5]:
      - link [ref=f54e8] [cursor=pointer]:
        - /url: /
        - img "Automation Exercise website" [ref=f54e9]
      - list [ref=f54e12]:
        - listitem [ref=f54e13]:
          - link " Home" [ref=f54e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f54e15]: 
            - text: Home
        - listitem [ref=f54e16]:
          - link " Products" [ref=f54e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f54e18]: 
            - text: Products
        - listitem [ref=f54e19]:
          - link " Cart" [ref=f54e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f54e21]: 
            - text: Cart
        - listitem [ref=f54e22]:
          - link " Logout" [ref=f54e23] [cursor=pointer]:
            - /url: /logout
            - generic [ref=f54e24]: 
            - text: Logout
        - listitem [ref=f54e25]:
          - link " Delete Account" [ref=f54e26] [cursor=pointer]:
            - /url: /delete_account
            - generic [ref=f54e27]: 
            - text: Delete Account
        - listitem [ref=f54e28]:
          - link " Test Cases" [ref=f54e29] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f54e30]: 
            - text: Test Cases
        - listitem [ref=f54e31]:
          - link " API Testing" [ref=f54e32] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f54e33]: 
            - text: API Testing
        - listitem [ref=f54e34]:
          - link " Video Tutorials" [ref=f54e35] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f54e36]: 
            - text: Video Tutorials
        - listitem [ref=f54e37]:
          - link " Contact us" [ref=f54e38] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f54e39]: 
            - text: Contact us
        - listitem [ref=f54e40]:
          - generic [ref=f54e41]:
            - generic [ref=f54e42]: 
            - text: Logged in as Shalom macharia
  - generic [ref=f54e46]:
    - heading "Order Placed!" [level=2] [ref=f54e47]
    - paragraph [ref=f54e48]: Congratulations! Your order has been confirmed!
    - link "Download Invoice" [ref=f54e49] [cursor=pointer]:
      - /url: /download_invoice/500
    - link "Continue" [ref=f54e51] [cursor=pointer]:
      - /url: /
  - contentinfo [ref=f54e52]:
    - generic [ref=f54e57]:
      - heading "Subscription" [level=2] [ref=f54e58]
      - generic [ref=f54e59]:
        - textbox "Your email address" [ref=f54e60]
        - button "" [ref=f54e61] [cursor=pointer]
        - paragraph [ref=f54e63]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f54e67]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | import { expect, Locator, Page } from '@playwright/test';
  2  | import { PaymentData } from '../builders/payment-data.builder';
  3  | 
  4  | export class CheckoutPage {
  5  |   readonly placeOrderLink: Locator;
  6  |   readonly nameOnCardInput: Locator;
  7  |   readonly cardNumberInput: Locator;
  8  |   readonly cvcInput: Locator;
  9  |   readonly expiryMonthInput: Locator;
  10 |   readonly expiryYearInput: Locator;
  11 |   readonly payAndConfirmButton: Locator;
  12 |   readonly orderPlacedMessage: Locator;
  13 |   readonly downloadInvoiceLink: Locator;
  14 |   readonly continueBtn: Locator;
  15 | 
  16 |   constructor(private readonly page: Page) {
  17 |     this.placeOrderLink = page.getByRole('link', { name: 'Place Order', exact: true });
  18 |     this.nameOnCardInput = page.locator('input[name="name_on_card"]');
  19 |     this.cardNumberInput = page.locator('input[name="card_number"]');
  20 |     this.cvcInput = page.locator('input[name="cvc"]');
  21 |     this.expiryMonthInput = page.locator('input[name="expiry_month"]');
  22 |     this.expiryYearInput = page.locator('input[name="expiry_year"]');
  23 |     this.payAndConfirmButton = page.getByRole('button', { name: 'Pay and Confirm Order' });
  24 |     this.orderPlacedMessage = page.locator('[data-qa="order-placed"]').or(page.getByText('Order Placed!', { exact: true }));
  25 |     this.downloadInvoiceLink = page.getByRole('link', { name: 'Download Invoice', exact: true });
  26 |     
  27 |     // Updated selector: data-qa attribute used by Automation Exercise
  28 |     this.continueBtn = page.locator('[data-qa="continue-button"]').or(
  29 |       page.getByRole('link', { name: 'Continue', exact: true })
  30 |     );
  31 |   }
  32 | 
  33 |   async placeOrder(): Promise<void> {
  34 |     await this.placeOrderLink.click();
  35 |   }
  36 | 
  37 |   async payAndConfirmOrder(paymentData: PaymentData): Promise<void> {
  38 |     await this.nameOnCardInput.fill(paymentData.nameOnCard);
  39 |     await this.cardNumberInput.fill(paymentData.cardNumber);
  40 |     await this.cvcInput.fill(paymentData.cvc);
  41 |     await this.expiryMonthInput.fill(paymentData.expiryMonth);
  42 |     await this.expiryYearInput.fill(paymentData.expiryYear);
  43 |     await this.payAndConfirmButton.click();
  44 |   }
  45 | 
  46 |   async expectOrderPlaced(): Promise<void> {
> 47 |     await expect(this.orderPlacedMessage).toBeVisible({ timeout: 10000 });
     |                                           ^ Error: expect(locator).toBeVisible() failed
  48 |   }
  49 | 
  50 |   async downloadInvoice(): Promise<import('@playwright/test').Download> {
  51 |     const downloadPromise = this.page.waitForEvent('download');
  52 |     await this.downloadInvoiceLink.click();
  53 |     return downloadPromise;
  54 |   }
  55 | 
  56 |   async continue(): Promise<void> {
  57 |     await this.continueBtn.waitFor({ state: 'visible', timeout: 10000 });
  58 |     await this.continueBtn.click();
  59 |   }
  60 | }
```