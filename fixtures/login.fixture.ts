import { test as base } from '@playwright/test';
import { buildLoginCredentials, LoginCredentials } from '../builders/login-data.builder';
import { buildSignupData, SignupData } from '../builders/signup-data.builder';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';
import { SignupPage } from '../pages/signup.page';

export type LoginFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  signupPage: SignupPage;
  signupData: SignupData;
  validCredentials: LoginCredentials;
};

export const test = base.extend<LoginFixtures>({
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
  validCredentials: async ({ homePage, signupPage, signupData }, use) => {
    await homePage.goto();
    await homePage.openLogin();
    await signupPage.startSignup(signupData.name, signupData.email);
    await signupPage.completeSignup(signupData);
    await signupPage.continueToApplication();
    await homePage.expectUserLoggedIn();
    await homePage.logout();

    await use(
      buildLoginCredentials({
        email: signupData.email,
        password: signupData.password,
      }),
    );
  },
});

export { expect } from '@playwright/test';
