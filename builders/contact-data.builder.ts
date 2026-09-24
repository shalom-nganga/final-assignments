import path from 'node:path';

export type ContactData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  uploadPath: string;
};

export function buildContactData(overrides: Partial<ContactData> = {}): ContactData {
  return {
    name: 'shalom',
    email: 'minnomacharia@gmail.com',
    subject: 'Broken item',
    message: 'The shoe rack was broken upon arrival',
    uploadPath: path.resolve(__dirname, '../fixtures/contact-upload.txt'),
    ...overrides,
  };
}