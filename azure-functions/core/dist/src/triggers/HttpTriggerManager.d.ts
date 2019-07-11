import { AzureFunctionsTrigger } from "../AzureFunctionsTrigger";
import { Context } from "../ContextBase";
import { HttpMethodInternal } from "../HttpRequest";
export interface RoutePathProperties {
    path: string[];
    requestMethod: HttpMethodInternal;
    context: Context;
    methodName: string;
}
export declare class HttpTriggerManager implements AzureFunctionsTrigger {
    run<T>(instance: new () => T, context: Context, args: any[]): void;
    private resolve;
}
