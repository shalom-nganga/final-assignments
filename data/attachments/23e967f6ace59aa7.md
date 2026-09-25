# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login/login.spec.ts >> Login >> logs in with valid credentials
- Location: tests/login/login.spec.ts:6:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('form').filter({ hasText: 'Login' }).first().getByPlaceholder('Email Address')
    - locator resolved to <input value="" required="" type="email" name="email" data-qa="login-email" placeholder="Email Address"/>
    - fill("shalomnganga119@gmail.com")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

```

# Page snapshot

```yaml
- generic [active] [ref=f15e1]:
  - banner [ref=f15e2]:
    - generic [ref=f15e5]:
      - link [ref=f15e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f15e9]
      - list [ref=f15e12]:
        - listitem [ref=f15e13]:
          - link " Home" [ref=f15e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f15e15]: 
            - text: Home
        - listitem [ref=f15e16]:
          - link " Products" [ref=f15e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f15e18]: 
            - text: Products
        - listitem [ref=f15e19]:
          - link " Cart" [ref=f15e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f15e21]: 
            - text: Cart
        - listitem [ref=f15e22]:
          - link " Signup / Login" [ref=f15e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=f15e24]: 
            - text: Signup / Login
        - listitem [ref=f15e25]:
          - link " Test Cases" [ref=f15e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f15e27]: 
            - text: Test Cases
        - listitem [ref=f15e28]:
          - link " API Testing" [ref=f15e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f15e30]: 
            - text: API Testing
        - listitem [ref=f15e31]:
          - link " Video Tutorials" [ref=f15e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f15e33]: 
            - text: Video Tutorials
        - listitem [ref=f15e34]:
          - link " Contact us" [ref=f15e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f15e36]: 
            - text: Contact us
  - generic [ref=f15e39]:
    - generic [ref=f15e41]:
      - heading "Login to your account" [level=2] [ref=f15e42]
      - generic [ref=f15e43]:
        - textbox "Email Address" [ref=f15e44]
        - textbox "Password" [ref=f15e45]
        - button "Login" [ref=f15e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=f15e48]
    - generic [ref=f15e50]:
      - heading "New User Signup!" [level=2] [ref=f15e51]
      - generic [ref=f15e52]:
        - textbox "Name" [ref=f15e53]
        - textbox "Email Address" [ref=f15e54]
        - button "Signup" [ref=f15e55] [cursor=pointer]
  - contentinfo [ref=f15e56]:
    - generic [ref=f15e61]:
      - heading "Subscription" [level=2] [ref=f15e62]
      - generic [ref=f15e63]:
        - textbox "Your email address" [ref=f15e64]
        - button "" [ref=f15e65] [cursor=pointer]
        - paragraph [ref=f15e67]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f15e71]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | import { expect, Locator, Page } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   readonly loginForm: Locator;
  5  |   readonly emailInput: Locator;
  6  |   readonly passwordInput: Locator;
  7  |   readonly loginButton: Locator;
  8  |   readonly loginError: Locator;
  9  | 
  10 |   constructor(private readonly page: Page) {
  11 |     this.loginForm = page.locator('form').filter({ hasText: 'Login' }).first();
  12 |     this.emailInput = this.loginForm.getByPlaceholder('Email Address');
  13 |     this.passwordInput = this.loginForm.getByRole('textbox', { name: 'Password' });
  14 |     this.loginButton = this.loginForm.getByRole('button', { name: 'Login' });
  15 |     this.loginError = page.getByText('Your email or password is incorrect!');
  16 |   }
  17 | 
  18 |   async login(email: string, password: string): Promise<void> {
> 19 |     await this.emailInput.fill(email);
     |                           ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  20 |     await this.passwordInput.fill(password);
  21 |     await Promise.all([
  22 |       this.page.waitForURL((url) => url.pathname === '/', { waitUntil: 'domcontentloaded' }),
  23 |       this.loginButton.click(),
  24 |     ]);
  25 |   }
  26 | 
  27 |   async expectLoginPageVisible(): Promise<void> {
  28 |     await expect(this.loginForm).toBeVisible();
  29 |   }
  30 | }
  31 | 
```