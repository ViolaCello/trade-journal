export declare const cryptoClient: (
  apiKey: any
) => {
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
export default cryptoClient;
