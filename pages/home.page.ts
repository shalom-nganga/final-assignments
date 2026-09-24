import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
  readonly homeLink: Locator;
  readonly signupLoginLink: Locator;
  readonly loggedInUser: Locator;
  readonly deleteAccountLink: Locator;
  readonly accountDeletedMessage: Locator;
  readonly continueButton: Locator;
  readonly logoutLink: Locator;
  readonly testCasesLink: Locator;
  readonly productsLink: Locator;
  readonly cartLink: Locator;

  constructor(private readonly page: Page) {
    this.homeLink = page.getByRole('link', { name: /Home/ });
    this.signupLoginLink = page.locator('a[href="/login"]');
    this.loggedInUser = page.getByText(/Logged in as/);
    this.deleteAccountLink = page.getByRole('link', { name: /Delete Account/ });
    this.accountDeletedMessage = page.getByText('Account Deleted!');
    this.continueButton = page.locator('[data-qa="continue-button"]');
    this.logoutLink = page.locator('a[href="/logout"]');
    this.testCasesLink = page.locator('a[href="/test_cases"]').first();
    this.productsLink = page.locator('a[href="/products"]').first();
    this.cartLink = page.locator('a[href="/view_cart"]').first();
  }

 async goto(): Promise<void> {
  await this.page.goto('/', { waitUntil: 'domcontentloaded' });
}

  async expectHomePageVisible(): Promise<void> {
    await expect(this.homeLink).toBeVisible();
  }

  async openLogin(): Promise<void> {
    await this.signupLoginLink.click({ force: true });
  }

  async openContact(): Promise<void> {
    await this.page.locator('a[href="/contact_us"]').click({ force: true });
  }

  async openTestCases(): Promise<void> {
    await this.testCasesLink.click({ force: true });
  }

  async openProducts(): Promise<void> {
    await this.productsLink.click({ force: true });
  }

  async openCart(): Promise<void> {
    await this.cartLink.click({ force: true });
  }

  async expectUserLoggedIn(): Promise<void> {
    await expect(this.loggedInUser).toBeVisible();
  }

  async logout(): Promise<void> {
    await this.logoutLink.click({ force: true });
  }

  async deleteAccount(): Promise<void> {
    await this.deleteAccountLink.click();
    await expect(this.accountDeletedMessage).toBeVisible();
  }

  async continueAfterAccountDeletion(): Promise<void> {
    await this.continueButton.click();
    await expect(this.signupLoginLink).toBeVisible();
  }
}
