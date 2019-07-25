import "reflect-metadata";

import {
  ERROR_DUPLICATE_TRIGGER,
  METADATAKEY_HTTPTRIGGER_METHOD,
  METADATAKEY_HTTPTRIGGER_PATH,
  METADATAKEY_TRIGGER,
  METADATAKEY_HTTPTRIGGER_ARGS
} from "../Constants";
import { setTriggerMetadata } from "../Utils";
import { HttpMethod } from "../../HttpRequest";

const defaultMetadata: RequestMappingMetadata = {
  path: "/",
  method: HttpMethod.Get
};

export interface RequestMappingMetadata {
  path?: string;
  method?: HttpMethod | "All";
}

export const RequestMapping = (
  metadata: RequestMappingMetadata = defaultMetadata
): MethodDecorator => {
  const path = metadata.path || "/";
  const requestMethod = metadata.method || HttpMethod.Get;

  return (_target, _key, descriptor: PropertyDescriptor) => {
    Reflect.defineMetadata(
      METADATAKEY_HTTPTRIGGER_PATH,
      path,
      descriptor.value
    );
    Reflect.defineMetadata(
      METADATAKEY_HTTPTRIGGER_METHOD,
      requestMethod,
      descriptor.value
    );
    return descriptor;
  };
};

const createMappingDecorator = (method: HttpMethod | "All") => (
  path?: string
): MethodDecorator => {
  return RequestMapping({
    path,
    method
  });
};

/**
 * Routes HTTP Get requests to the specified path.
 */
export const Get = createMappingDecorator(HttpMethod.Get);

/**
 * Routes HTTP Post requests to the specified path.
 */
export const Post = createMappingDecorator(HttpMethod.Post);

/**
 * Routes HTTP Put requests to the specified path.
 */
export const Put = createMappingDecorator(HttpMethod.Put);

/**
 * Routes HTTP Delete requests to the specified path.
 */
export const Delete = createMappingDecorator(HttpMethod.Delete);

/**
 * Routes HTTP Patch requests to the specified path.
 */
export const Patch = createMappingDecorator(HttpMethod.Patch);

/**
 * Routes HTTP Options requests to the specified path.
 */
export const Options = createMappingDecorator(HttpMethod.Options);

/**
 * Routes HTTP Head requests to the specified path.
 */
export const Head = createMappingDecorator(HttpMethod.Head);

/**
 * Routes HTTP All requests to the specified path.
 */
export const All = createMappingDecorator("All");

export enum RouteParamTypes {
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

export type ParamData = object | string | number;
export interface RouteParamsMetadata {
  [prop: number]: {
    index: number;
    data?: ParamData;
  };
}

const assignMetadata = (
  args: RouteParamsMetadata,
  paramtype: RouteParamTypes,
  index: number,
  data?: ParamData
) => {
  return {
    ...args,
    [`${paramtype}:${index}`]: {
      index,
      data
    }
  };
};

const createRouteParamDecorator = (paramType: RouteParamTypes) => {
  return (data?: ParamData): ParameterDecorator => (target, key, index) => {
    const args =
      Reflect.getMetadata(METADATAKEY_HTTPTRIGGER_ARGS, target, key) || {};

    Reflect.defineMetadata(
      METADATAKEY_HTTPTRIGGER_ARGS,
      assignMetadata(args, paramType, index, data),
      target,
      key
    );
  };
};

export const Request: () => ParameterDecorator = createRouteParamDecorator(
  RouteParamTypes.Request
);

export const Response: () => ParameterDecorator = createRouteParamDecorator(
  RouteParamTypes.Response
);

export const File: () => ParameterDecorator = createRouteParamDecorator(
  RouteParamTypes.File
);

export const Files: () => ParameterDecorator = createRouteParamDecorator(
  RouteParamTypes.Files
);

export const Ctx: () => ParameterDecorator = createRouteParamDecorator(
  RouteParamTypes.Context
);

export function Query(): ParameterDecorator;
export function Query(name: string): ParameterDecorator;
export function Query(name?: string): ParameterDecorator {
  return createRouteParamDecorator(RouteParamTypes.Query)(name);
}

export function Body(): ParameterDecorator;
export function Body(name: string): ParameterDecorator;
export function Body(name?: string): ParameterDecorator {
  return createRouteParamDecorator(RouteParamTypes.Body)(name);
}

export function Param(): ParameterDecorator;
export function Param(name: string): ParameterDecorator;
export function Param(name?: string): ParameterDecorator {
  return createRouteParamDecorator(RouteParamTypes.Param)(name);
}

export function HttpTrigger(pathOrPrefix?: string): ClassDecorator {
  return (target: {}) => {
    if (Reflect.hasOwnMetadata(METADATAKEY_TRIGGER, target)) {
      throw new Error(ERROR_DUPLICATE_TRIGGER);
    }
    setTriggerMetadata(target, "httpTrigger");
    Reflect.defineMetadata(METADATAKEY_HTTPTRIGGER_PATH, pathOrPrefix, target);
  };
}

export interface ControllerOptions {
  path?: string;
}
