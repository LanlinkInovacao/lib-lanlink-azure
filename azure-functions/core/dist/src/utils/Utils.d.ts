export declare const isUndefined: (obj: any) => obj is undefined;
export declare const isObject: (fn: any) => fn is object;
export declare const validatePath: (path?: string | undefined) => string;
export declare const isFunction: (fn: any) => boolean;
export declare const isString: (fn: any) => fn is string;
export declare const isConstructor: (fn: any) => boolean;
export declare const isNil: (obj: any) => boolean;
export declare const isEmpty: (array: any) => boolean;
export declare const isSymbol: (fn: any) => fn is symbol;
export interface Type<T> extends Function {
    new (...args: any[]): T;
}
