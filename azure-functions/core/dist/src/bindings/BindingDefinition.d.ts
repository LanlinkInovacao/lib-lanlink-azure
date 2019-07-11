export declare enum BindingDefinitionType {
    HttpTrigger = "httpTrigger",
    BlobTrigger = "blobTrigger",
    ApiHubFileTrigger = "apiHubFileTrigger",
    EventHubTrigger = "eventHubTrigger",
    ManualTrigger = "manualTrigger",
    QueueTrigger = "queueTrigger",
    ServiceBusTrigger = "serviceBusTrigger",
    TimerTrigger = "timerTrigger"
}
export interface BindingDefinition {
    /**
     * The
     * name
     * of
     * your
     * binding,
     * as
     * defined
     * in
     * function.json.
     */
    name: BindingDefinitionType | string;
    /**
     * The
     * type
     * of
     * your
     * binding,
     * as
     * defined
     * in
     * function.json.
     */
    type: string;
    /**
     * The
     * direction
     * of
     * your
     * binding,
     * as
     * defined
     * in
     * function.json.
     */
    direction: 'in' | 'out' | 'inout' | undefined;
}
