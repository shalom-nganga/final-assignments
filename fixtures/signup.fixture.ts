import { test as base } from '@playwright/test';

import { buildSignupData, SignupData } from '../builders/signup-data.builder';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';
import { SignupPage } from '../pages/signup.page';

export type SignupFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  signupPage: SignupPage;
  signupData: SignupData;
};

export const test = base.extend<SignupFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
  },
  signupData: async ({}, use) => {
    await use(buildSignupData());
  },
});

export { expect } from '@playwright/test';