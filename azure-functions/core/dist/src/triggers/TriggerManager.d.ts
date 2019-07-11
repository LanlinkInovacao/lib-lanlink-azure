import { AzureFunctionsTrigger } from "../AzureFunctionsTrigger";
import { Context } from "../ContextBase";
export declare class TriggerManager {
    private _triggers;
    readonly triggers: {
        [id: string]: AzureFunctionsTrigger;
    };
    constructor();
    run<T>(typeFunction: new () => T, context: Context, ...args: any[]): Promise<any | void> | void;
    private registerTriggers;
}
