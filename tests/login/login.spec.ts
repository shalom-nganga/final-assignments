import { expect, test } from '../../fixtures/login.fixture';

test.describe('Login', () => {
  test('logs in with valid credentials', async ({
    homePage,
    loginPage,
    validCredentials,
  }) => {
    await homePage.goto();
    await homePage.expectHomePageVisible();
    await homePage.openLogin();
    await loginPage.expectLoginPageVisible();
    await loginPage.login(validCredentials.email, validCredentials.password);

    await homePage.expectUserLoggedIn();
    await expect(loginPage.loginError).toBeHidden();

    await homePage.logout();
    await loginPage.expectLoginPageVisible();

    await loginPage.login(validCredentials.email, validCredentials.password);
    await homePage.expectUserLoggedIn();
    await homePage.deleteAccount();
    await homePage.continueAfterAccountDeletion();
  });
});
