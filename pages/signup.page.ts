import { expect, Locator, Page } from '@playwright/test';

import { SignupData } from '../builders/signup-data.builder';

export class SignupPage {
  readonly signupNameInput: Locator;
  readonly signupEmailInput: Locator;
  readonly signupButton: Locator;
  readonly accountInformationHeading: Locator;
  readonly createAccountButton: Locator;
  readonly accountCreatedMessage: Locator;

  constructor(private readonly page: Page) {
    this.signupNameInput = page.locator('[data-qa="signup-name"]');
    this.signupEmailInput = page.locator('[data-qa="signup-email"]');
    this.signupButton = page.locator('[data-qa="signup-button"]');
    this.accountInformationHeading = page.getByText('Enter Account Information');
    this.createAccountButton = page.locator('[data-qa="create-account"]');
    this.accountCreatedMessage = page.getByText('Account Created!');
  }

  async startSignup(name: string, email: string): Promise<void> {
    await this.signupNameInput.fill(name);
    await this.signupEmailInput.fill(email);
    await this.signupButton.click();
    await expect(this.accountInformationHeading).toBeVisible();
  }

  async completeSignup(data: SignupData): Promise<void> {
    await this.page.locator('#id_gender1').check();
    await this.page.locator('[data-qa="password"]').fill(data.password);
    await this.page.locator('[data-qa="days"]').selectOption(data.birthDay, { force: true });
    await this.page.locator('[data-qa="months"]').selectOption(data.birthMonth, { force: true });
    await this.page.locator('[data-qa="years"]').selectOption(data.birthYear, { force: true });
    await this.page.locator('#newsletter').check();
    await this.page.locator('#optin').check();
    await this.page.locator('[data-qa="first_name"]').fill(data.firstName);
    await this.page.locator('[data-qa="last_name"]').fill(data.lastName);
    await this.page.locator('[data-qa="company"]').fill(data.company);
    await this.page.locator('[data-qa="address"]').fill(data.address);
    await this.page.locator('[data-qa="address2"]').fill(data.address2);
    await this.page.locator('[data-qa="country"]').selectOption({ label: data.country });
    await this.page.locator('[data-qa="state"]').fill(data.state);
    await this.page.locator('[data-qa="city"]').fill(data.city);
    await this.page.locator('[data-qa="zipcode"]').fill(data.zipcode);
    await this.page.locator('[data-qa="mobile_number"]').fill(data.mobileNumber);
    await this.createAccountButton.click();
    await expect(this.accountCreatedMessage).toBeVisible();
  }

  async continueToApplication(): Promise<void> {
    await this.page.locator('[data-qa="continue-button"]').click();
  }
}