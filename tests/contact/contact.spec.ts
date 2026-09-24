import { expect, test } from '../../fixtures/contact.fixture';

test.describe('Contact Us', () => {
  test('submits the contact form with an attachment', async ({
    contactData,
    contactPage,
    homePage,
  }) => {
    await homePage.goto();
    await homePage.expectHomePageVisible();
    await homePage.openContact();
    await contactPage.expectFormVisible();
    await contactPage.completeForm(contactData);
    await contactPage.submit();
    await expect(contactPage.successMessage).toBeVisible();
    await contactPage.returnHome();
    await homePage.expectHomePageVisible();
  });
});