import { test } from '../../fixtures/test-cases.fixture';

test.describe('Test Cases', () => {
  test('allows access to the Test Cases page', async ({ homePage, testCasesPage }) => {
    await homePage.goto();
    await homePage.expectHomePageVisible();
    await homePage.openTestCases();
    await testCasesPage.expectVisible();
  });
});