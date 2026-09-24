import { test as base } from '@playwright/test';

import { buildLoginCredentials, LoginCredentials } from '../builders/login-data.builder';
import { buildPaymentData, PaymentData } from '../builders/payment-data.builder';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';
import { ProductDetailsPage } from '../pages/product-details.page';
import { ProductsPage } from '../pages/products.page';

export type CheckoutFixtures = {
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  homePage: HomePage;
  loginPage: LoginPage;
  paymentData: PaymentData;
  productDetailsPage: ProductDetailsPage;
  productsPage: ProductsPage;
  checkoutCredentials: LoginCredentials;
};

export const test = base.extend<CheckoutFixtures>({
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  paymentData: async ({}, use) => {
    await use(buildPaymentData());
  },
  productDetailsPage: async ({ page }, use) => {
    await use(new ProductDetailsPage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  checkoutCredentials: async ({}, use) => {
    await use(
      buildLoginCredentials({
        email: process.env.CHECKOUT_EMAIL ?? process.env.SIGNUP_EMAIL ?? '',
        password: process.env.CHECKOUT_PASSWORD ?? process.env.SIGNUP_PASSWORD ?? '',
      }),
    );
  },
});

export { expect } from '@playwright/test';