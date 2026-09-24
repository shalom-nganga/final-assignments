export type PaymentData = {
  nameOnCard: string;
  cardNumber: string;
  cvc: string;
  expiryMonth: string;
  expiryYear: string;
};

export function buildPaymentData(overrides: Partial<PaymentData> = {}): PaymentData {
  return {
    nameOnCard: 'grab',
    cardNumber: '1234567809',
    cvc: '608',
    expiryMonth: '03',
    expiryYear: '2027',
    ...overrides,
  };
}