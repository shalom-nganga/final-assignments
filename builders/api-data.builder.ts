export interface ApiUserPayload {
  name: string;
  email: string;
  password: string;
  title?: string;
  birth_date?: string;
  birth_month?: string;
  birth_year?: string;
  firstname?: string;
  lastname?: string;
  company?: string;
  address1?: string;
  address2?: string;
  country?: string;
  zipcode?: string;
  state?: string;
  city?: string;
  mobile_number?: string;
}

export class ApiDataBuilder {
  static buildUserPayload(overrides?: Partial<ApiUserPayload>): ApiUserPayload {
    const timestamp = Date.now();
    return {
      name: `Test User ${timestamp}`,
      email: `api_user_${timestamp}@example.com`,
      password: 'Password123!',
      title: 'Mr',
      birth_date: '10',
      birth_month: '05',
      birth_year: '1995',
      firstname: 'Test',
      lastname: 'User',
      company: 'QA Corp',
      address1: '123 Test Street',
      address2: 'Suite 100',
      country: 'United States',
      zipcode: '90210',
      state: 'California',
      city: 'Los Angeles',
      mobile_number: '1234567890',
      ...overrides,
    };
  }
}