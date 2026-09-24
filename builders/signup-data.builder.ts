export type SignupData = {
  name: string;
  email: string;
  password: string;
  title: 'Mr.' | 'Mrs.';
  firstName: string;
  lastName: string;
  company: string;
  address: string;
  address2: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
  birthDay: string;
  birthMonth: string;
  birthYear: string;
}

export function buildSignupData(overrides: Partial<SignupData> = {}): SignupData {
  const uniqueId = `${Date.now()}${Math.floor(Math.random() * 100000)}`;

  return {
    name: 'mash',
    email: process.env.SIGNUP_EMAIL ?? `cleanco889+${uniqueId}@gmail.com`,
    password: process.env.SIGNUP_PASSWORD ?? `Cleanco@${uniqueId}`,
    title: 'Mr.',
    firstName: 'ngong',
    lastName: 'road',
    company: 'cliffale',
    address: '63rd street',
    address2: '57th street',
    country: 'United States',
    state: 'California',
    city: 'Maryland',
    zipcode: '12949',
    mobileNumber: '0789666555',
    birthDay: '13',
    birthMonth: '7',
    birthYear: '2006',
    ...overrides,
  };
}