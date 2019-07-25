import { AzureFunctionsTriggerManager } from "../AzureFunctionsTrigger";
import {
  BindingDefinition,
  BindingDefinitionType
} from "../bindings/BindingDefinition";
import { Context } from "../Context";

import { HttpTriggerManager } from "./HttpTriggerManager";
import { TimerTriggerManager } from "./timer/TimerTriggerManager";

export class TriggerManager {
  private _triggers: { [id: string]: AzureFunctionsTriggerManager } = {};

  get triggers(): { [id: string]: AzureFunctionsTriggerManager } {
    return this._triggers;
  }

  constructor() {
    this.registerTriggers();
  }

  run<T>(
    typeFunction: new () => T,
    context: Context,
    ...args: any[]
  ): Promise<any | void> | void {
    const bindingTrigger = context.bindingDefinitions.find(
      (item: BindingDefinition) => {
        return item.type.toLowerCase().indexOf("trigger") >= 0;
      }
    );

    if (bindingTrigger !== undefined) {
      const trigger = this.triggers[bindingTrigger.type];
      if (trigger !== undefined) {
        return trigger.run(typeFunction, context, ...args);
      }
    }
  }

  private registerTriggers() {
    this.triggers[BindingDefinitionType.HttpTrigger] = new HttpTriggerManager();
    this.triggers[
      BindingDefinitionType.TimerTrigger
    ] = new TimerTriggerManager();
  }
}
