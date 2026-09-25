# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout/checkout.spec.ts >> Checkout >> selects a product, adds it to the cart, and completes checkout
- Location: tests/checkout/checkout.spec.ts:4:7

# Error details

```
Error: expect(received).not.toBe(expected) // Object.is equality

Expected: not ""
```

# Test source

```ts
  1  | import { expect, test } from '../../fixtures/checkout.fixture';
  2  | 
  3  | test.describe('Checkout', () => {
  4  |   test('selects a product, adds it to the cart, and completes checkout', async ({
  5  |     cartPage,
  6  |     checkoutCredentials,
  7  |     checkoutPage,
  8  |     homePage,
  9  |     loginPage,
  10 |     paymentData,
  11 |     productDetailsPage,
  12 |     productsPage,
  13 |   }) => {
  14 |     // Extend timeout for full multi-page UI flow
  15 |     test.setTimeout(60000);
  16 | 
> 17 |     expect(checkoutCredentials.email).not.toBe('');
     |                                           ^ Error: expect(received).not.toBe(expected) // Object.is equality
  18 |     expect(checkoutCredentials.password).not.toBe('');
  19 | 
  20 |     await homePage.goto();
  21 |     await homePage.expectHomePageVisible();
  22 |     await homePage.openProducts();
  23 |     await productsPage.expectVisible();
  24 |     await productsPage.openFirstProduct();
  25 |     await productDetailsPage.expectVisible();
  26 |     await productDetailsPage.addProductToCart();
  27 |     await productDetailsPage.openCart();
  28 | 
  29 |     await cartPage.expectVisible();
  30 |     await cartPage.proceedToCheckout();
  31 |     await cartPage.openLogin();
  32 | 
  33 |     await loginPage.expectLoginPageVisible();
  34 |     await loginPage.login(checkoutCredentials.email, checkoutCredentials.password);
  35 |     await homePage.expectUserLoggedIn();
  36 |     await homePage.openCart();
  37 |     await cartPage.expectVisible();
  38 |     await cartPage.proceedToCheckout();
  39 | 
  40 |     await checkoutPage.placeOrder();
  41 |     await checkoutPage.payAndConfirmOrder(paymentData);
  42 |     await checkoutPage.expectOrderPlaced();
  43 | 
  44 |     const download = await checkoutPage.downloadInvoice();
  45 |     expect(download.suggestedFilename()).toMatch(/invoice/i);
  46 | 
  47 |     // Wait for continue button and navigate home
  48 |     await checkoutPage.continue();
  49 |     await homePage.expectHomePageVisible();
  50 |   });
  51 | });
```