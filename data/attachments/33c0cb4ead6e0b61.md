# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login/login.spec.ts >> Login >> logs in with valid credentials
- Location: tests/login/login.spec.ts:6:7

# Error details

```
Error: expect(received).not.toBe(expected) // Object.is equality

Expected: not ""
```

# Test source

```ts
  1  | import { expect, test } from '../../fixtures/login.fixture';
  2  | 
  3  | test.describe('Login', () => {
  4  |   test.describe.configure({ retries: 2 });
  5  | 
  6  |   test('logs in with valid credentials', async ({
  7  |     homePage,
  8  |     loginPage,
  9  |     validCredentials,
  10 |   }) => {
> 11 |     expect(validCredentials.email).not.toBe('');
     |                                        ^ Error: expect(received).not.toBe(expected) // Object.is equality
  12 |     expect(validCredentials.password).not.toBe('');
  13 | 
  14 |     await homePage.goto();
  15 |     await homePage.expectHomePageVisible();
  16 |     await homePage.openLogin();
  17 |     await loginPage.expectLoginPageVisible();
  18 |     await loginPage.login(validCredentials.email, validCredentials.password);
  19 | 
  20 |     await homePage.expectUserLoggedIn();
  21 |     await expect(loginPage.loginError).toBeHidden();
  22 | 
  23 |     await homePage.logout();
  24 |     await loginPage.expectLoginPageVisible();
  25 | 
  26 |     await loginPage.login(validCredentials.email, validCredentials.password);
  27 |     await homePage.expectUserLoggedIn();
  28 |     await homePage.logout();
  29 |     await loginPage.expectLoginPageVisible();
  30 |   });
  31 | });
  32 | 
```