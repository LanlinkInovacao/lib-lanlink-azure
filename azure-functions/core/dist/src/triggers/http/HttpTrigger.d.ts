import "reflect-metadata";
import { HttpMethod } from "../../HttpRequest";
export interface RequestMappingMetadata {
    path?: string;
    method?: HttpMethod | "All";
}
export declare const RequestMapping: (metadata?: RequestMappingMetadata) => MethodDecorator;
/**
 * Routes HTTP Get requests to the specified path.
 */
export declare const Get: (path?: string | undefined) => MethodDecorator;
/**
 * Routes HTTP Post requests to the specified path.
 */
export declare const Post: (path?: string | undefined) => MethodDecorator;
/**
 * Routes HTTP Put requests to the specified path.
 */
export declare const Put: (path?: string | undefined) => MethodDecorator;
/**
 * Routes HTTP Delete requests to the specified path.
 */
export declare const Delete: (path?: string | undefined) => MethodDecorator;
/**
 * Routes HTTP Patch requests to the specified path.
 */
export declare const Patch: (path?: string | undefined) => MethodDecorator;
/**
 * Routes HTTP Options requests to the specified path.
 */
export declare const Options: (path?: string | undefined) => MethodDecorator;
/**
 * Routes HTTP Head requests to the specified path.
 */
export declare const Head: (path?: string | undefined) => MethodDecorator;
/**
 * Routes HTTP All requests to the specified path.
 */
export declare const All: (path?: string | undefined) => MethodDecorator;
export declare enum RouteParamTypes {
    Request = "Request",
    Response = "Response",
    Body = "Body",
    Query = "Query",
    Param = "Param",
    Headers = "Headers",
    File = "File",
    Files = "Files",
    Context = "Context"
}
export declare type ParamData = object | string | number;
export interface RouteParamsMetadata {
    [prop: number]: {
        index: number;
        data?: ParamData;
    };
}
export declare const Request: () => ParameterDecorator;
export declare const Response: () => ParameterDecorator;
export declare const File: () => ParameterDecorator;
export declare const Files: () => ParameterDecorator;
export declare const Ctx: () => ParameterDecorator;
export declare function Query(): ParameterDecorator;
export declare function Query(name: string): ParameterDecorator;
export declare function Body(): ParameterDecorator;
export declare function Body(name: string): ParameterDecorator;
export declare function Param(): ParameterDecorator;
export declare function Param(name: string): ParameterDecorator;
export declare function HttpTrigger(pathOrPrefix?: string): ClassDecorator;
export interface ControllerOptions {
    path?: string;
}
