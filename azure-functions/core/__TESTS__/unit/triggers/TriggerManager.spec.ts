import { BindingDefinitionType } from "../../../src/bindings/BindingDefinition";
import { Context } from "../../../src/Context";
import { TriggerManager } from "../../../src/triggers/TriggerManager";

import { AzureFunctionsTriggerManager, Get } from "../../../src";

describe("HttpTriggerManager", () => {
  class UserController {
    @Get()
    async getUsers(): Promise<[]> {
      return [];
    }
  }

  it("Validate if triggers are being added correctly.", () => {
    const triggerManager = new TriggerManager();
    const triggers = triggerManager.triggers;

    expect(triggers[BindingDefinitionType.HttpTrigger]).toBeDefined();
  });

  it("Validates if HttpTrigger is running correctly.", done => {
    const invocationId = "";
    const context: Context = {
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
          type: BindingDefinitionType.HttpTrigger,
          direction: "in"
        }
      ],
      done: (): void => {}
    };
    const triggerManager = new TriggerManager();
    const triggers = triggerManager.triggers;

    triggers[BindingDefinitionType.HttpTrigger] = {
      run: <T>(
        _typeFunction: new () => T,
        context: Context
      ): Promise<any | void> | void => {
        expect(context).toEqual(context);
        done();
      },
      resolver: instance => {}
    } as AzureFunctionsTriggerManager;

    triggerManager.run(UserController, context);
  });

  it("Validates if HttpTrigger is not running.", done => {
    const invocationId = "";
    const context: Context = {
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
      done: (): void => {}
    };
    const triggerManager = new TriggerManager();

    const value = triggerManager.run(UserController, context);
    expect(value).toBeUndefined();

    done();
  });
});
