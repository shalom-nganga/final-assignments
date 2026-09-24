import { expect, test } from '../../fixtures/signup.fixture';

test.describe('Signup', () => {
  test('creates a new account', async ({ homePage, loginPage, signupPage, signupData }) => {
    await homePage.goto();
    await homePage.openLogin();
    await signupPage.startSignup(signupData.name, signupData.email);
    await signupPage.completeSignup(signupData);

    await expect(signupPage.accountCreatedMessage).toBeVisible();
    await signupPage.continueToApplication();
    await homePage.expectUserLoggedIn();

    await homePage.logout();
    await homePage.openLogin();
    await loginPage.login(signupData.email, signupData.password);
    await homePage.expectUserLoggedIn();

    await homePage.deleteAccount();
    await homePage.continueAfterAccountDeletion();
  });
});