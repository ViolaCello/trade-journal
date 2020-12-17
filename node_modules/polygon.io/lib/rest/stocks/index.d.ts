export declare const stocksClient: (
  apiKey: string
) => {
  conditionMappings: (...args: any[]) => any;
  dailyOpenClose: (...args: any[]) => any;
  exchanges: (...args: any[]) => any;
  lastQuoteForSymbol: (...args: any[]) => any;
  lastTradeForSymbol: (...args: any[]) => any;
  v1HistoricQuotes: (...args: any[]) => any;
  v1HistoricTrades: (...args: any[]) => any;
  v2HistoricQuotes: (...args: any[]) => any;
  v2HistoricTrades: (...args: any[]) => any;
  snapshotAllTickers: (...args: any[]) => any;
  snapshotSingleTicker: (...args: any[]) => any;
  snapshotGainersLosers: (...args: any[]) => any;
  previousClose: (...args: any[]) => any;
  aggregates: (...args: any[]) => any;
  groupedDaily: (...args: any[]) => any;
};
export default stocksClient;
