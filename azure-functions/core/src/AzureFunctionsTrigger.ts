import { Context } from "./Context";

export interface AzureFunctionsTriggerManager {
  run<T>(
    typeFunction: new () => T,
    context: Context,
    ...args: any[]
  ): Promise<any | void> | void;
}
