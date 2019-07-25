import { AzureFunctionsTriggerManager } from "../../AzureFunctionsTrigger";
import { Context } from "../../Context";
import { MetadataScanner } from "../../utils/MetadataScanner";

export class TimerTriggerManager implements AzureFunctionsTriggerManager {
  private metadataScanner: MetadataScanner = new MetadataScanner();

  run<T>(
    typeFunction: new () => T,
    context: Context,
    ...args: any[]
  ): void | Promise<any> {
    const instance = new typeFunction();
    this.applyCallbackToDecoratorRun(instance, context, ...args);
  }

  applyCallbackToDecoratorRun<T extends {}>(
    instance: T,
    context: Context,
    ...args: any[]
  ) {
    this.scanForDecoratorRun(instance, method => {
      instance[method].apply(instance, [context, ...args]);
    });
  }

  scanForDecoratorRun(instance: {}, callback: (name: string) => void) {
    const instancePrototype = Object.getPrototypeOf(instance);

    this.metadataScanner.scanFromPrototype<void>(instancePrototype, callback);
  }
}
