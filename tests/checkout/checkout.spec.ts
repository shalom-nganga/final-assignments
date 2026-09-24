import { expect, test } from '../../fixtures/checkout.fixture';

test.describe('Checkout', () => {
  test('selects a product, adds it to the cart, and completes checkout', async ({
    cartPage,
    checkoutCredentials,
    checkoutPage,
    homePage,
    loginPage,
    paymentData,
    productDetailsPage,
    productsPage,
  }) => {
    expect(checkoutCredentials.email).not.toBe('');
    expect(checkoutCredentials.password).not.toBe('');

    await homePage.goto();
    await homePage.expectHomePageVisible();
    await homePage.openProducts();
    await productsPage.expectVisible();
    await productsPage.openFirstProduct();
    await productDetailsPage.expectVisible();
    await productDetailsPage.addProductToCart();
    await productDetailsPage.openCart();

    await cartPage.expectVisible();
    await cartPage.proceedToCheckout();
    await cartPage.openLogin();

    await loginPage.expectLoginPageVisible();
    await loginPage.login(checkoutCredentials.email, checkoutCredentials.password);
    await homePage.expectUserLoggedIn();
    await homePage.openCart();
    await cartPage.expectVisible();
    await cartPage.proceedToCheckout();

    await checkoutPage.placeOrder();
    await checkoutPage.payAndConfirmOrder(paymentData);
    await checkoutPage.expectOrderPlaced();

    const download = await checkoutPage.downloadInvoice();
    expect(download.suggestedFilename()).toMatch(/invoice/i);
    await checkoutPage.continue();
  });
});