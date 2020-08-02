export interface StockQuote {
  symbol: string;
  companyName: string;
  latestPrice: number;
  change: number;
  primaryExchange: string;
}
