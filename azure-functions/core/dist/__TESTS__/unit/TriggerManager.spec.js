"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BindingDefinition_1 = require("../../src/bindings/BindingDefinition");
const TriggerManager_1 = require("../../src/triggers/TriggerManager");
const UserController_1 = require("./UserController");
describe("HttpTriggerManager", () => {
    it("Validate if triggers are being added correctly.", () => {
        const triggerManager = new TriggerManager_1.TriggerManager();
        const triggers = triggerManager.triggers;
        expect(triggers[BindingDefinition_1.BindingDefinitionType.HttpTrigger]).toBeDefined();
    });
    it("Validates if HttpTrigger is running correctly.", done => {
        const invocationId = "";
        const context = {
            invocationId,
            executionContext: {
                invocationId,
                functionName: "",
                functionDirectory: ""
            },
            bindings: {},
            bindingData: {},
            bindingDefinitions: [
                {
                    name: "req",
                    type: BindingDefinition_1.BindingDefinitionType.HttpTrigger,
                    direction: "in"
                }
            ],
            done: () => { }
        };
        const triggerManager = new TriggerManager_1.TriggerManager();
        const triggers = triggerManager.triggers;
        triggers[BindingDefinition_1.BindingDefinitionType.HttpTrigger] = {
            run: (_typeFunction, context) => {
                expect(context).toEqual(context);
                done();
            }
        };
        triggerManager.run(UserController_1.UserController, context);
    });
    it("Validates if HttpTrigger is not running.", done => {
        const invocationId = "";
        const context = {
            invocationId,
            executionContext: {
                invocationId,
                functionName: "",
                functionDirectory: ""
            },
            bindings: {},
            bindingData: {},
            bindingDefinitions: [
                { name: "req", type: "TesteTrigger", direction: "in" }
            ],
            done: () => { }
        };
        const triggerManager = new TriggerManager_1.TriggerManager();
        const value = triggerManager.run(UserController_1.UserController, context);
        expect(value).toBeUndefined();
        done();
    });
});
//# sourceMappingURL=TriggerManager.spec.js.map