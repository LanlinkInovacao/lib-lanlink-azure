import { AzureFunctionsExecutable } from '../AzureFunctionsExecutable';
import { AzureFunction, AzureFunctionDone } from '../ContextBase';
import { HttpMethod } from '../HttpRequest';
export interface AfterExecution<TBody = any> {
    done: (executable: AzureFunctionDone<TBody>) => void;
}
export declare class HttpTriggerMock implements AzureFunctionsExecutable, AfterExecution {
    private context;
    private pattern;
    private doDone;
    private characterFormattingSeparator;
    constructor();
    /**
     * Defines the Http Method for mock
     */
    hasMethod(method: HttpMethod): HttpTriggerMock;
    /**
     * Defines the URL Method for mock
     * @param url Url to mock
     */
    hasUrl(url: string): HttpTriggerMock;
    /**
     * Set the pattern for creating the request parameters via the URL path
     * @param pattern pattern for mock
     */
    hasPattern(pattern: string): HttpTriggerMock;
    /**
     * Defines the request body for mock
     * @param body Request body
     */
    hasBody<TBody>(body: TBody): HttpTriggerMock;
    /**
     * Defines the request header for mock
     * @param header Header used in requisition
     * @param value Value of the header used in the request
     */
    addHeader(header: string, value: string): HttpTriggerMock;
    /**
     * Executes the mock trigger
     * @param executable Function performed after triggering
     */
    run<TBody>(executable: AzureFunction<TBody>): AfterExecution<TBody>;
    done<TBody>(executable: AzureFunctionDone<TBody>): void;
    private isVoid;
    private newInvocationId;
    private createContextDefault;
    private parameterFormatting;
    private buildQuery;
    private parseQuery;
    private buildParams;
    private parseParams;
}
export interface Delimiter {
    prefixDelimit: string;
    sufixDelimit: string;
}
export interface FormattingPath {
    nameParam: string;
    valueParam: number | string | Date;
}
