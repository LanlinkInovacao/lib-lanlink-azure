import { AzureFunctionsTriggerManager } from "../../AzureFunctionsTrigger";
import { Context } from "../../Context";
import { HttpMethodInternal } from "../../HttpRequest";
import { RouterExplorer } from "./RouterExplorer";
import { MetadataScanner } from "../../utils/MetadataScanner";
import {
  METADATAKEY_HTTPTRIGGER_METHOD,
  METADATAKEY_HTTPTRIGGER_PATH
} from "../Constants";
import { isUndefined, isString, validatePath } from "../../utils/Utils";
import { UnknownRequestMappingException } from "../../exceptions";

interface RoutePathProperties {
  path: string[];
  requestMethod: HttpMethodInternal;
  callback: Function;
  methodName: string;
  context: Context;
}

export class HttpTriggerManager extends AzureFunctionsTriggerManager {
  private metadataScanner: MetadataScanner = new MetadataScanner();

  //https://docs.microsoft.com/en-us/aspnet/web-api/overview/web-api-routing-and-actions/attribute-routing-in-web-api-2#optional-uri-parameters-and-default-values
  resolver(instance: any) {}

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

  validateRoutePath(path: string): string {
    if (isUndefined(path)) {
      throw new UnknownRequestMappingException();
    }
    return validatePath(path);
  }

  // private resolve<T>(
  //   routerBuilder: RouterExplorer,
  //   instance: new () => T,
  // ) {
  //   // const path = routerBuilder.exploreMethodMetadata(instance, basePath);

  //   // this.logger.log(CONTROLLER_MAPPING_MESSAGE(controllerName, path));
  //   // routerBuilder.explore(instance, basePath);
  // }

  // chooseBestMethod<T>(
  //   tyeFunction: new () => T,
  //   url: string,
  //   method: HttpMethodInternal
  // ): string[] {
  //   return [];
  // }

  // build(): void {}
}
