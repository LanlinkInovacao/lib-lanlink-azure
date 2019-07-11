"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BindingDefinition_1 = require("../bindings/BindingDefinition");
const HttpTriggerManager_1 = require("./HttpTriggerManager");
class TriggerManager {
    constructor() {
        this._triggers = {};
        this.registerTriggers();
    }
    get triggers() {
        return this._triggers;
    }
    run(typeFunction, context, ...args) {
        const bindingTrigger = context.bindingDefinitions.find((item) => {
            return item.type.toLowerCase().indexOf("trigger") >= 0;
        });
        if (bindingTrigger !== undefined) {
            const trigger = this.triggers[bindingTrigger.type];
            if (trigger !== undefined) {
                return trigger.run(typeFunction, context, args);
            }
        }
    }
    registerTriggers() {
        this.triggers[BindingDefinition_1.BindingDefinitionType.HttpTrigger] = new HttpTriggerManager_1.HttpTriggerManager();
    }
}
exports.TriggerManager = TriggerManager;
//# sourceMappingURL=TriggerManager.js.map