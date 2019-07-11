import { AzureFunction, Context } from "../Context";
import { TriggerManager } from "../triggers/TriggerManager";

export function connect<T>(typeFunction: new () => T): AzureFunction {
  return async (context: Context, ...args: any[]): Promise<void> => {
    const manager = new TriggerManager();

    return manager.run(typeFunction, context, args);
  };
}
