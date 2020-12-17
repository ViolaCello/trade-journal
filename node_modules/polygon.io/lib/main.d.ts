export * from "./rest";
export * from "./websockets";
export declare const polygonClient: (
  apiKey: string
) => {
  rest: {
    crypto: {
      dailyOpenClose: (...args: any[]) => any;
      exchanges: (...args: any[]) => any;
      lastTradeForPair: (...args: any[]) => any;
      historicTrades: (...args: any[]) => any;
      snapshotSingleTicker: (...args: any[]) => any;
      snapshotAllTickers: (...args: any[]) => any;
      snapshotGainersLosers: (...args: any[]) => any;
      snapshotSingleTickerFullBook: (...args: any[]) => any;
      previousClose: (...args: any[]) => any;
      aggregates: (...args: any[]) => any;
      groupedDaily: (...args: any[]) => any;
    };
    forex: {
      lastQuoteForCurrencyPair: (...args: any[]) => any;
      historicTicks: (...args: any[]) => any;
      realTimeCurrencyConversion: (...args: any[]) => any;
      previousClose: (...args: any[]) => any;
      aggregates: (...args: any[]) => any;
      groupedDaily: (...args: any[]) => any;
      snapshotAllTickers: (...args: any[]) => any;
      snapshotGainersLosers: (...args: any[]) => any;
    };
    stocks: {
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
    reference: {
      locales: (...args: any[]) => any;
      markets: (...args: any[]) => any;
      marketHolydays: (...args: any[]) => any;
      marketStatus: (...args: any[]) => any;
      stockDividends: (...args: any[]) => any;
      stockFinancials: (...args: any[]) => any;
      stockSplits: (...args: any[]) => any;
      tickerDetails: (...args: any[]) => any;
      tickerNews: (...args: any[]) => any;
      tickers: (...args: any[]) => any;
      tickerTypes: (...args: any[]) => any;
    };
  };
  websockers: {
    crypto: (...args: any[]) => any;
    forex: (...args: any[]) => any;
    stocks: (...args: any[]) => any;
  };
};
export default polygonClient;
