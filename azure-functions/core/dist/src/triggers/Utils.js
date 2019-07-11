"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const Constants_1 = require("./Constants");
function setTriggerMetadata(target, triggerName) {
    Reflect.defineMetadata(Constants_1.METADATAKEY_TRIGGER, true, target);
    Reflect.defineMetadata(Constants_1.METADATAKEY_TRIGGER_NAME, triggerName, target);
}
exports.setTriggerMetadata = setTriggerMetadata;
function reflectCallbackMetadata(instance, methodName, metadataKey) {
    return Reflect.getMetadata(metadataKey, instance.constructor, methodName);
}
exports.reflectCallbackMetadata = reflectCallbackMetadata;
//# sourceMappingURL=Utils.js.map