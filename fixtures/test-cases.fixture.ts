import { test as base } from '@playwright/test';

import { HomePage } from '../pages/home.page';
import { TestCasesPage } from '../pages/test-cases.page';

export type TestCasesFixtures = {
  homePage: HomePage;
  testCasesPage: TestCasesPage;
};

export const test = base.extend<TestCasesFixtures>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  testCasesPage: async ({ page }, use) => {
    await use(new TestCasesPage(page));
  },
});

export { expect } from '@playwright/test';