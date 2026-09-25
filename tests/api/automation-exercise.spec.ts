import { test, expect } from '@playwright/test';
import { ApiHelper } from '../../utils/api-helper';
import { ApiDataBuilder } from '../../builders/api-data.builder';

test.describe('Automation Exercise API Tests', () => {

    test.describe.configure({ mode: 'serial' });

  let apiHelper: ApiHelper;
  const userPayload = ApiDataBuilder.buildUserPayload();

  test.beforeEach(({ request }) => {
    apiHelper = new ApiHelper(request);
  });

  test('1. Get all products list (API 1)', async () => {
    const response = await apiHelper.getAllProducts();
    expect(response.status()).toBe(200);

    const body = JSON.parse(await response.text());
    expect(body.responseCode).toBe(200);
    expect(Array.isArray(body.products)).toBe(true);
  });

  test('2. Create user account (API 11)', async () => {
    const response = await apiHelper.createAccount(userPayload as unknown as Record<string, string>);
    expect(response.status()).toBe(200);

    const body = JSON.parse(await response.text());
    expect(body.responseCode).toBe(201);
    expect(body.message).toBe('User created!');
  });

  test('3. Verify login with valid credentials (API 7)', async () => {
    const response = await apiHelper.verifyLogin(userPayload.email, userPayload.password);
    expect(response.status()).toBe(200);

    const body = JSON.parse(await response.text());
    expect(body.responseCode).toBe(200);
    expect(body.message).toBe('User exists!');
  });

  test('4. Update user account (API 13)', async () => {
    const updatedPayload = {
      ...userPayload,
      name: `${userPayload.name} Updated`,
      firstname: 'UpdatedFirstName',
    };

    const response = await apiHelper.updateAccount(updatedPayload as unknown as Record<string, string>);
    expect(response.status()).toBe(200);

    const body = JSON.parse(await response.text());
    expect(body.responseCode).toBe(200);
    expect(body.message).toBe('User updated!');
  });

  test('5. Delete user account (API 12)', async () => {
    const response = await apiHelper.deleteAccount(userPayload.email, userPayload.password);
    expect(response.status()).toBe(200);

    const body = JSON.parse(await response.text());
    expect(body.responseCode).toBe(200);
    expect(body.message).toBe('Account deleted!');
  });
});