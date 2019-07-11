"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RouterExplorer_1 = require("./RouterExplorer");
const MetadataScanner_1 = require("../utils/MetadataScanner");
class HttpTriggerManager {
    run(instance, context, args) {
        const request = context.req;
        if (request === undefined) {
            return;
        }
        const routerBuilder = new RouterExplorer_1.RouterExplorer(new MetadataScanner_1.MetadataScanner(), context);
        this.resolve(routerBuilder, instance, context, context.req.url);
    }
    resolve(routerBuilder, instance, applicationRef, basePath) {
        const path = routerBuilder.exploreMethodMetadata(instance, basePath);
        // this.logger.log(CONTROLLER_MAPPING_MESSAGE(controllerName, path));
        routerBuilder.explore(instance, basePath);
    }
}
exports.HttpTriggerManager = HttpTriggerManager;
//# sourceMappingURL=HttpTriggerManager.js.map