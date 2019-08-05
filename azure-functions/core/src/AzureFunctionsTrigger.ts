import { Context } from "./Context";

export abstract class AzureFunctionsTriggerManager {
  context: Context;
  args: any[];

  run<T>(
    typeFunction: new () => T,
    context: Context,
    ...args: any[]
  ): void | Promise<any> {
    this.context = context;
    this.args = args;
    const instance = new typeFunction();
    this.resolver(instance);
  }

  abstract resolver(instance: any);
}
