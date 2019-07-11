"use strict";
// import { HttpServer } from "@nestjs/common";
// import { METHOD_METADATA, PATH_METADATA } from "@nestjs/common/constants";
// import { RequestMethod } from "@nestjs/common/enums/request-method.enum";
// import { Controller } from "@nestjs/common/interfaces/controllers/controller.interface";
// import { Type } from "@nestjs/common/interfaces/type.interface";
Object.defineProperty(exports, "__esModule", { value: true });
const UnknownRequestMappingException_1 = require("../exceptions/UnknownRequestMappingException");
const Constants_1 = require("./Constants");
const Utils_1 = require("../utils/Utils");
class RouterExplorer {
    constructor(metadataScanner, 
    // private readonly container: NestContainer,
    // private readonly injector?: Injector,
    context) {
        this.metadataScanner = metadataScanner;
        this.context = context;
        // private readonly logger = new Logger(RouterExplorer.name, true);
        this.exceptionFiltersCache = new WeakMap();
    }
    explore(instance, basePath) {
        const routerPaths = this.scanForPaths(instance);
        this.applyPathsToRouterProxy(routerPaths, instance, basePath);
    }
    applyPathsToRouterProxy(routePaths, instance, basePath) {
        (routePaths || []).forEach(pathProperties => {
            // const { path, requestMethod } = pathProperties;
            this.applyCallbackToRouter(pathProperties, instance, basePath);
            // path.forEach(p =>
            //   // this.logger.log(ROUTE_MAPPED_MESSAGE(p, requestMethod)),
            // );
        });
    }
    applyCallbackToRouter(pathProperties, instance, basePath) {
        const { path: paths, requestMethod, methodName } = pathProperties;
        const stripSlash = (str) => str[str.length - 1] === "/" ? str.slice(0, str.length - 1) : str;
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
    validateRoutePath(path) {
        if (Utils_1.isUndefined(path)) {
            throw new UnknownRequestMappingException_1.UnknownRequestMappingException();
        }
        return Utils_1.validatePath(path);
    }
    scanForPaths(instance, prototype) {
        const instancePrototype = Utils_1.isUndefined(prototype)
            ? Object.getPrototypeOf(instance)
            : prototype;
        return this.metadataScanner.scanFromPrototype(instancePrototype, method => this.exploreMethodMetadata(instancePrototype, method));
    }
    exploreMethodMetadata(instancePrototype, methodName) {
        const targetCallback = instancePrototype[methodName];
        const routePath = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_PATH, targetCallback);
        // if (isUndefined(routePath)) {
        //   return null;
        // }
        const requestMethod = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_METHOD, targetCallback);
        const path = Utils_1.isString(routePath)
            ? [this.validateRoutePath(routePath)]
            : routePath.map(p => this.validateRoutePath(p));
        return {
            path,
            requestMethod,
            methodName
        };
    }
}
exports.RouterExplorer = RouterExplorer;
//# sourceMappingURL=RouterExplorer.js.map