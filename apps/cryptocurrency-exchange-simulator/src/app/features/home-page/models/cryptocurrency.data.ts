export interface CryptocurrencyBlock {
  name: string;
  currency: string;
  amount: number;
}

export const cryptocurrencies: CryptocurrencyBlock[] = [
  { name: 'BTC', currency: '$', amount: 38933.81 },
  { name: 'ETH', currency: '$', amount: 2767.4 },
  { name: 'BCH', currency: '$', amount: 769.36 },
  { name: 'LTC', currency: '$', amount: 197.56 },
  { name: 'XLM', currency: '$', amount: 0.43 },
  { name: 'ETC', currency: '$', amount: 74.67 },
  { name: 'EOS', currency: '$', amount: 7.11 },
  { name: 'XTZ', currency: '$', amount: 3.94 },
];
