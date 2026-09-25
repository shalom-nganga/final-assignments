import { test as base } from '@playwright/test';
import { buildLoginCredentials, LoginCredentials } from '../builders/login-data.builder';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';

export type LoginFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  validCredentials: LoginCredentials;
};

export const test = base.extend<LoginFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  validCredentials: async ({}, use) => {
    await use(
      buildLoginCredentials({
        email: process.env.LOGIN_EMAIL ?? process.env.CHECKOUT_EMAIL ?? '',
        password: process.env.LOGIN_PASSWORD ?? process.env.CHECKOUT_PASSWORD ?? '',
      }),
    );
  },
});

export { expect } from '@playwright/test';
