import { AzureFunctionsTriggerManager } from "../../AzureFunctionsTrigger";
import { Context } from "../../Context";
import { MetadataScanner } from "../../utils/MetadataScanner";

export class TimerTriggerManager extends AzureFunctionsTriggerManager {
  private metadataScanner: MetadataScanner = new MetadataScanner();

  resolver(instance: any) {
    this.scanForDecoratorRun(instance, method => {
      instance[method].apply(instance, [this.context, ...this.args]);
    });
  }

  scanForDecoratorRun(instance: {}, callback: (name: string) => void) {
    const instancePrototype = Object.getPrototypeOf(instance);
    this.metadataScanner.scanFromPrototype<void>(instancePrototype, callback);
  }
}
