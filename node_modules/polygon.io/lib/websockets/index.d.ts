export * from "./forex";
export * from "./stocks";
export * from "./crypto";
export declare const websocketClient: (
  apiKey: string
) => {
  crypto: (...args: any[]) => any;
  forex: (...args: any[]) => any;
  stocks: (...args: any[]) => any;
};
export default websocketClient;
