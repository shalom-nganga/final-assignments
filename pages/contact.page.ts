import { expect, Locator, Page } from '@playwright/test';

import { ContactData } from '../builders/contact-data.builder';

export class ContactPage {
  readonly getInTouchHeading: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly subjectInput: Locator;
  readonly messageInput: Locator;
  readonly fileInput: Locator;
  readonly submitButton: Locator;
  readonly contactForm: Locator;
  readonly successMessage: Locator;
  readonly homeButton: Locator;

  constructor(private readonly page: Page) {
    this.getInTouchHeading = page.getByRole('heading', { name: 'Get In Touch' });
    this.nameInput = page.locator('[data-qa="name"]');
    this.emailInput = page.locator('[data-qa="email"]');
    this.subjectInput = page.getByPlaceholder('Subject');
    this.messageInput = page.locator('[data-qa="message"]');
    this.fileInput = page.locator('input[type="file"]');
    this.submitButton = page.locator('[data-qa="submit-button"]');
    this.contactForm = page.locator('#contact-us-form');
    this.successMessage = page.getByText('Success! Your details have been submitted successfully.');
    this.homeButton = page.locator('a[href="/"]').filter({ hasText: 'Home' });
  }

  async expectFormVisible(): Promise<void> {
    await expect(this.getInTouchHeading).toBeVisible();
  }

  async completeForm(data: ContactData): Promise<void> {
    await this.nameInput.fill(data.name);
    await this.emailInput.fill(data.email);
    await this.subjectInput.fill(data.subject);
    await this.messageInput.fill(data.message);
    await this.fileInput.setInputFiles(data.uploadPath);
  }

  async submit(): Promise<void> {
    this.page.once('dialog', async (dialog) => {
      await dialog.accept();
    });
    await this.contactForm.dispatchEvent('submit');
    await expect(this.successMessage).toBeVisible();
  }

  async returnHome(): Promise<void> {
    await this.homeButton.click({ force: true });
  }
}