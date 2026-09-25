import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly loginForm: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly loginError: Locator;

  constructor(private readonly page: Page) {
    this.loginForm = page.locator('form').filter({ hasText: 'Login' }).first();
    this.emailInput = this.loginForm.getByPlaceholder('Email Address');
    this.passwordInput = this.loginForm.getByRole('textbox', { name: 'Password' });
    this.loginButton = this.loginForm.getByRole('button', { name: 'Login' });
    this.loginError = page.getByText('Your email or password is incorrect!');
  }

  async login(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await Promise.all([
      this.page.waitForURL((url) => url.pathname === '/', { waitUntil: 'domcontentloaded' }),
      this.loginButton.click(),
    ]);
  }

  async expectLoginPageVisible(): Promise<void> {
    await expect(this.loginForm).toBeVisible();
  }
}
