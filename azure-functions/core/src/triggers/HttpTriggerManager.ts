import { AzureFunctionsTriggerManager } from "../AzureFunctionsTrigger";
import { Context } from "../Context";
import { HttpMethodInternal } from "../HttpRequest";
import { RouterExplorer } from "./RouterExplorer";
import { MetadataScanner } from "../utils/MetadataScanner";

export interface RoutePathProperties {
  path: string[];
  requestMethod: HttpMethodInternal;
  context: Context;
  methodName: string;
}

export class HttpTriggerManager implements AzureFunctionsTriggerManager {
  run<T>(instance: new () => T, context: Context, args: any[]): void {
    const request = context.req;
    if (request === undefined) {
      return;
    }

    const routerBuilder = new RouterExplorer(new MetadataScanner(), context);

    this.resolve(routerBuilder, instance, context, context.req!.url);
  }

  private resolve<T>(
    routerBuilder: RouterExplorer,
    instance: new () => T,
    applicationRef: Context,
    basePath: string
  ) {
    const path = routerBuilder.exploreMethodMetadata(instance, basePath);

    // this.logger.log(CONTROLLER_MAPPING_MESSAGE(controllerName, path));
    routerBuilder.explore(instance, basePath);
  }

  // chooseBestMethod<T>(
  //   tyeFunction: new () => T,
  //   url: string,
  //   method: HttpMethodInternal
  // ): string[] {
  //   return [];
  // }

  // build(): void {}
}
