export declare const forexClient: (
  apiKey: string
) => {
  lastQuoteForCurrencyPair: (...args: any[]) => any;
  historicTicks: (...args: any[]) => any;
  realTimeCurrencyConversion: (...args: any[]) => any;
  previousClose: (...args: any[]) => any;
  aggregates: (...args: any[]) => any;
  groupedDaily: (...args: any[]) => any;
  snapshotAllTickers: (...args: any[]) => any;
  snapshotGainersLosers: (...args: any[]) => any;
};
export default forexClient;
