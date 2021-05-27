export interface CryptocurrencyBlock {
  name: string;
  currency: string;
  amount: number;
}

export const cryptocurrencies: CryptocurrencyBlock[] = [
  { name: 'BTC', currency: 'USD', amount: 38933.81 },
  { name: 'ETH', currency: 'USD', amount: 2767.4 },
  { name: 'BCH', currency: 'USD', amount: 769.36 },
  { name: 'LTC', currency: 'USD', amount: 197.56 },
  { name: 'XLM', currency: 'USD', amount: 0.43 },
  { name: 'ETC', currency: 'USD', amount: 74.67 },
  { name: 'EOS', currency: 'USD', amount: 7.11 },
  { name: 'XTZ', currency: 'USD', amount: 3.94 },
];
