import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
  readonly homeLink: Locator;
  readonly signupLoginLink: Locator;
  readonly loggedInUser: Locator;
  readonly deleteAccountLink: Locator;
  readonly accountDeletedMessage: Locator;
  readonly continueButton: Locator;
  readonly logoutLink: Locator;

  constructor(private readonly page: Page) {
    this.homeLink = page.getByRole('link', { name: /Home/ });
    this.signupLoginLink = page.getByRole('link', { name: /Signup \/ Login/ });
    this.loggedInUser = page.getByText(/Logged in as/);
    this.deleteAccountLink = page.getByRole('link', { name: /Delete Account/ });
    this.accountDeletedMessage = page.getByText('Account Deleted!');
    this.continueButton = page.locator('[data-qa="continue-button"]');
    this.logoutLink = page.getByRole('link', { name: /Logout/ });
  }

 async goto(): Promise<void> {
  await this.page.goto('/', { waitUntil: 'domcontentloaded' });
}

  async expectHomePageVisible(): Promise<void> {
    await expect(this.homeLink).toBeVisible();
  }

  async openLogin(): Promise<void> {
    await this.signupLoginLink.click();
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
