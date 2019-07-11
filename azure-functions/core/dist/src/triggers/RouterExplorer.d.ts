import { Context } from "../ContextBase";
import { HttpMethodInternal } from "../HttpRequest";
import { MetadataScanner } from "../utils/MetadataScanner";
interface RoutePathProperties {
    path: string[];
    requestMethod: HttpMethodInternal;
    methodName: string;
}
export declare class RouterExplorer {
    private readonly metadataScanner;
    private readonly context;
    private readonly exceptionFiltersCache;
    constructor(metadataScanner: MetadataScanner, context: Context);
    explore(instance: {}, basePath: string): void;
    applyPathsToRouterProxy(routePaths: RoutePathProperties[], instance: {}, basePath: string): void;
    private applyCallbackToRouter;
    validateRoutePath(path: string): string;
    scanForPaths(instance: {}, prototype?: any): RoutePathProperties[];
    exploreMethodMetadata(instancePrototype: any, methodName: string): RoutePathProperties;
}
export {};
