"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Binding_1 = require("../../src/bindings/Binding");
const BindingDefinition_1 = require("../../src/bindings/BindingDefinition");
const UserController_1 = require("./UserController");
describe("Bindings.connect", () => {
    it("Validate the execution of the connector of a class with Azure Function.", (done) => __awaiter(this, void 0, void 0, function* () {
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
        const userConnect = Binding_1.connect(UserController_1.UserController);
        yield userConnect(context);
        done();
    }));
});
//# sourceMappingURL=Bindings.spec.js.map