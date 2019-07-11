import { AzureFunction } from "./ContextBase";
export interface AzureFunctionsExecutable<TBody = any> {
    run(executable: AzureFunction<TBody>): void;
}
