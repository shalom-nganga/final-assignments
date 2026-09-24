import { test as base } from '@playwright/test';

import { buildContactData, ContactData } from '../builders/contact-data.builder';
import { ContactPage } from '../pages/contact.page';
import { HomePage } from '../pages/home.page';

export type ContactFixtures = {
  contactData: ContactData;
  contactPage: ContactPage;
  homePage: HomePage;
};

export const test = base.extend<ContactFixtures>({
  contactData: async ({}, use) => {
    await use(buildContactData());
  },
  contactPage: async ({ page }, use) => {
    await use(new ContactPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});

export { expect } from '@playwright/test';