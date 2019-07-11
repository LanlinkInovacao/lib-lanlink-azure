export declare class MetadataScanner {
    scanFromPrototype<R>(prototype: any, callback: (name: string) => R): R[];
    getAllFilteredMethodNames(prototype: any): IterableIterator<string>;
}
