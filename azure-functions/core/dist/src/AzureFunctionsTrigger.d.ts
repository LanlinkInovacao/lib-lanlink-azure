import { Context } from "./ContextBase";
export interface AzureFunctionsTrigger {
    run<T>(tyeFunction: new () => T, context: Context, ...args: any[]): Promise<any | void> | void;
}
