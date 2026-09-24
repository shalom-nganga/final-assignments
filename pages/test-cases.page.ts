import { expect, Locator, Page } from '@playwright/test';

export class TestCasesPage {
  readonly testCasesHeading: Locator;

  constructor(private readonly page: Page) {
    this.testCasesHeading = page.getByRole('heading', { name: 'Test Cases', exact: true });
  }

  async expectVisible(): Promise<void> {
    await expect(this.testCasesHeading).toBeVisible();
  }
}