// import { HttpServer } from "@nestjs/common";
// import { METHOD_METADATA, PATH_METADATA } from "@nestjs/common/constants";
// import { RequestMethod } from "@nestjs/common/enums/request-method.enum";
// import { Controller } from "@nestjs/common/interfaces/controllers/controller.interface";
// import { Type } from "@nestjs/common/interfaces/type.interface";

// import { ApplicationConfig } from "../application-config";
// import { UnknownRequestMappingException } from "../errors/exceptions/unknown-request-mapping.exception";
// import { GuardsConsumer } from "../guards/guards-consumer";
// import { GuardsContextCreator } from "../guards/guards-context-creator";
// import { createContextId } from "../helpers/context-id-factory";
// import { ExecutionContextHost } from "../helpers/execution-context-host";
// import { ROUTE_MAPPED_MESSAGE } from "../helpers/messages";
// import { STATIC_CONTEXT } from "../injector/constants";
// import { NestContainer } from "../injector/container";
// import { Injector } from "../injector/injector";
// import { ContextId, InstanceWrapper } from "../injector/instance-wrapper";
// import { Module } from "../injector/module";
// import { InterceptorsConsumer } from "../interceptors/interceptors-consumer";
// import { InterceptorsContextCreator } from "../interceptors/interceptors-context-creator";
// import { MetadataScanner } from "../metadata-scanner";
// import { PipesConsumer } from "../pipes/pipes-consumer";
// import { PipesContextCreator } from "../pipes/pipes-context-creator";
// import { ExceptionsFilter } from "./interfaces/exceptions-filter.interface";
// import { REQUEST } from "./request";
// import { RouteParamsFactory } from "./route-params-factory";
// import { RouterExecutionContext } from "./router-execution-context";
// import { RouterProxy, RouterProxyCallback } from "./router-proxy";

import { Context } from "../../Context";
import { HttpMethodInternal } from "../../HttpRequest";
import { MetadataScanner } from "../../utils/MetadataScanner";
import { UnknownRequestMappingException } from "../../exceptions/UnknownRequestMappingException";

import {
  METADATAKEY_HTTPTRIGGER_PATH,
  METADATAKEY_HTTPTRIGGER_METHOD
} from "../Constants";
import { isUndefined, validatePath, isString } from "../../utils/Utils";

interface RoutePathProperties {
  path: string[];
  requestMethod: HttpMethodInternal;
  callback: Function;
  methodName: string;
  context: Context;
}

export class RouterExplorer {
  // private readonly logger = new Logger(RouterExplorer.name, true);
  private readonly exceptionFiltersCache = new WeakMap();

  constructor(
    private readonly metadataScanner: MetadataScanner,
    // private readonly container: NestContainer,
    // private readonly injector?: Injector,
    private readonly context: Context
  ) {}

  explore(instance: {}) {
    const routerPaths = this.scanForPaths(instance);
    this.applyPathsToRouterProxy(routerPaths, instance);
  }

  applyPathsToRouterProxy(routePaths: RoutePathProperties[], instance: {}) {
    (routePaths || []).forEach(pathProperties => {
      this.applyCallbackToRouter(pathProperties);
    });
  }

  private applyCallbackToRouter(pathProperties: RoutePathProperties) {
    // const { path: paths, requestMethod, methodName } = pathProperties;
    // const stripSlash = (str: string) =>
    //   str[str.length - 1] === "/" ? str.slice(0, str.length - 1) : str;
    // const isRequestScoped = !instanceWrapper.isDependencyTreeStatic();
    // const module = this.container.getModuleByKey(moduleKey);
    // if (isRequestScoped) {
    //   const handler = this.createRequestScopedHandler(
    //     instanceWrapper,
    //     requestMethod,
    //     module,
    //     moduleKey,
    //     methodName
    //   );
    //   paths.forEach(path => {
    //     const fullPath = stripSlash(basePath) + path;
    //     routerMethod(stripSlash(fullPath) || "/", handler);
    //   });
    //   return;
    // }
    // const proxy = this.createCallbackProxy(
    //   instance,
    //   targetCallback,
    //   methodName,
    //   moduleKey,
    //   requestMethod
    // );
    // paths.forEach(path => {
    //   const fullPath = stripSlash(basePath) + path;
    //   routerMethod(stripSlash(fullPath) || "/", proxy);
    // });
  }

  // extractRouterPath(metatype: {}, prefix?: string): string {
  //   let path = Reflect.getMetadata(METADATAKEY_HTTPTRIGGER_PATH, metatype);
  //   if (prefix) path = prefix + this.validateRoutePath(path);
  //   return this.validateRoutePath(path);
  // }

  validateRoutePath(path: string): string {
    if (isUndefined(path)) {
      throw new UnknownRequestMappingException();
    }
    return validatePath(path);
  }

  scanForPaths(
    context: Context,
    instance: {},
    prototype?: any
  ): RoutePathProperties[] {
    const instancePrototype = isUndefined(prototype)
      ? Object.getPrototypeOf(instance)
      : prototype;

    return this.metadataScanner.scanFromPrototype<RoutePathProperties>(
      instancePrototype,
      method => this.exploreMethodMetadata(context, instancePrototype, method)
    );
  }

  exploreMethodMetadata(
    context: Context,
    instancePrototype: any,
    methodName: string
  ): RoutePathProperties {
    const targetCallback = instancePrototype[methodName];

    const routePath: string | string[] = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_PATH,
      targetCallback
    );

    // if (isUndefined(routePath)) {
    //   return null;
    // }
    const requestMethod: HttpMethodInternal = Reflect.getMetadata(
      METADATAKEY_HTTPTRIGGER_METHOD,
      targetCallback
    );
    const path = isString(routePath)
      ? [this.validateRoutePath(routePath)]
      : routePath.map(p => this.validateRoutePath(p));
    return {
      path,
      requestMethod,
      methodName,
      context,
      callback: targetCallback
    };
  }

  // private createCallbackProxy(
  //   instance: Controller,
  //   callback: RouterProxyCallback,
  //   methodName: string,
  //   module: string,
  //   requestMethod: RequestMethod,
  //   contextId = STATIC_CONTEXT,
  //   inquirerId?: string
  // ) {
  //   const executionContext = this.context.create(
  //     instance,
  //     callback,
  //     methodName,
  //     module,
  //     requestMethod,
  //     contextId,
  //     inquirerId
  //   );
  //   const exceptionFilter = this.exceptionsFilter.create(
  //     instance,
  //     callback,
  //     module,
  //     contextId,
  //     inquirerId
  //   );
  //   return this.routerProxy.createProxy(executionContext, exceptionFilter);
  // }

  // createRequestScopedHandler(
  //   instanceWrapper: InstanceWrapper,
  //   requestMethod: RequestMethod,
  //   module: Module,
  //   moduleKey: string,
  //   methodName: string
  // ) {
  //   const { instance } = instanceWrapper;
  //   const collection = module.controllers;
  //   return async <TRequest, TResponse>(
  //     req: TRequest,
  //     res: TResponse,
  //     next: () => void
  //   ) => {
  //     try {
  //       const contextId = createContextId();
  //       this.registerRequestProvider(req, contextId);

  //       // const contextInstance = await this.injector.loadPerContext(
  //       //   instance,
  //       //   module,
  //       //   collection,
  //       //   contextId
  //       // );
  //       this.createCallbackProxy(
  //         contextInstance,
  //         contextInstance[methodName],
  //         methodName,
  //         moduleKey,
  //         requestMethod,
  //         contextId,
  //         instanceWrapper.id
  //       )(req, res, next);
  //     } catch (err) {
  //       let exceptionFilter = this.exceptionFiltersCache.get(
  //         instance[methodName]
  //       );
  //       if (!exceptionFilter) {
  //         exceptionFilter = this.exceptionsFilter.create(
  //           instance,
  //           instance[methodName],
  //           moduleKey
  //         );
  //         this.exceptionFiltersCache.set(instance[methodName], exceptionFilter);
  //       }
  //       const host = new ExecutionContextHost([req, res, next]);
  //       exceptionFilter.next(err, host);
  //     }
  //   };
  // }

  // private registerRequestProvider<T = any>(request: T, contextId: ContextId) {
  //   const coreModuleRef = this.container.getInternalCoreModuleRef();
  //   const wrapper = coreModuleRef.getProviderByKey(REQUEST);

  //   wrapper.setInstanceByContextId(contextId, {
  //     instance: request,
  //     isResolved: true
  //   });
  // }
}
