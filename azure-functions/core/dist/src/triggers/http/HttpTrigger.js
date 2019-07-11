"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const Constants_1 = require("../Constants");
const Utils_1 = require("../Utils");
const HttpRequest_1 = require("../../HttpRequest");
const defaultMetadata = {
    path: "/",
    method: HttpRequest_1.HttpMethod.Get
};
exports.RequestMapping = (metadata = defaultMetadata) => {
    const path = metadata.path || "/";
    const requestMethod = metadata.method || HttpRequest_1.HttpMethod.Get;
    return (_target, _key, descriptor) => {
        Reflect.defineMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_PATH, path, descriptor.value);
        Reflect.defineMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_METHOD, requestMethod, descriptor.value);
        return descriptor;
    };
};
const createMappingDecorator = (method) => (path) => {
    return exports.RequestMapping({
        path,
        method
    });
};
/**
 * Routes HTTP Get requests to the specified path.
 */
exports.Get = createMappingDecorator(HttpRequest_1.HttpMethod.Get);
/**
 * Routes HTTP Post requests to the specified path.
 */
exports.Post = createMappingDecorator(HttpRequest_1.HttpMethod.Post);
/**
 * Routes HTTP Put requests to the specified path.
 */
exports.Put = createMappingDecorator(HttpRequest_1.HttpMethod.Put);
/**
 * Routes HTTP Delete requests to the specified path.
 */
exports.Delete = createMappingDecorator(HttpRequest_1.HttpMethod.Delete);
/**
 * Routes HTTP Patch requests to the specified path.
 */
exports.Patch = createMappingDecorator(HttpRequest_1.HttpMethod.Patch);
/**
 * Routes HTTP Options requests to the specified path.
 */
exports.Options = createMappingDecorator(HttpRequest_1.HttpMethod.Options);
/**
 * Routes HTTP Head requests to the specified path.
 */
exports.Head = createMappingDecorator(HttpRequest_1.HttpMethod.Head);
/**
 * Routes HTTP All requests to the specified path.
 */
exports.All = createMappingDecorator("All");
var RouteParamTypes;
(function (RouteParamTypes) {
    RouteParamTypes["Request"] = "Request";
    RouteParamTypes["Response"] = "Response";
    RouteParamTypes["Body"] = "Body";
    RouteParamTypes["Query"] = "Query";
    RouteParamTypes["Param"] = "Param";
    RouteParamTypes["Headers"] = "Headers";
    RouteParamTypes["File"] = "File";
    RouteParamTypes["Files"] = "Files";
    RouteParamTypes["Context"] = "Context";
})(RouteParamTypes = exports.RouteParamTypes || (exports.RouteParamTypes = {}));
const assignMetadata = (args, paramtype, index, data) => {
    return Object.assign({}, args, { [`${paramtype}:${index}`]: {
            index,
            data
        } });
};
const createRouteParamDecorator = (paramType) => {
    return (data) => (target, key, index) => {
        const args = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_ARGS, target, key) || {};
        Reflect.defineMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_ARGS, assignMetadata(args, paramType, index, data), target, key);
    };
};
exports.Request = createRouteParamDecorator(RouteParamTypes.Request);
exports.Response = createRouteParamDecorator(RouteParamTypes.Response);
exports.File = createRouteParamDecorator(RouteParamTypes.File);
exports.Files = createRouteParamDecorator(RouteParamTypes.Files);
exports.Ctx = createRouteParamDecorator(RouteParamTypes.Context);
function Query(name) {
    return createRouteParamDecorator(RouteParamTypes.Query)(name);
}
exports.Query = Query;
function Body(name) {
    return createRouteParamDecorator(RouteParamTypes.Body)(name);
}
exports.Body = Body;
function Param(name) {
    return createRouteParamDecorator(RouteParamTypes.Param)(name);
}
exports.Param = Param;
function HttpTrigger(pathOrPrefix) {
    return (target) => {
        if (Reflect.hasOwnMetadata(Constants_1.METADATAKEY_TRIGGER, target)) {
            throw new Error(Constants_1.ERROR_DUPLICATE_TRIGGER);
        }
        Utils_1.setTriggerMetadata(target, "httpTrigger");
        Reflect.defineMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_PATH, pathOrPrefix, target);
    };
}
exports.HttpTrigger = HttpTrigger;
//# sourceMappingURL=HttpTrigger.js.map