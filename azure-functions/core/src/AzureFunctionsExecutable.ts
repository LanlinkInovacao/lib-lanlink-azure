import { AzureFunction } from "./Context";

export interface AzureFunctionsExecutable<TBody = any> {
  run(executable: AzureFunction<TBody>): void;
}
