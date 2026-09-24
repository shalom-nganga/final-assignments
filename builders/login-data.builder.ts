export type LoginCredentials = {
  email: string;
  password: string;
};

export function buildLoginCredentials(
  overrides: Partial<LoginCredentials> = {},
): LoginCredentials {
  const uniqueId = `${Date.now()}${Math.floor(Math.random() * 100000)}`;

  return {
    email: process.env.SIGNUP_EMAIL ?? `cleanco889+${uniqueId}@gmail.com`,
    password: process.env.SIGNUP_PASSWORD ?? `Cleanco@${uniqueId}`,
    ...overrides,
  };
}
