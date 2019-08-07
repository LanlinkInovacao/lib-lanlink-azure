import { connect } from "../../src/bindings/Binding";
import { BindingDefinitionType } from "../../src/bindings/BindingDefinition";
import { Context } from "../../src/Context";

import { Get, HttpTrigger } from "../../src/triggers/http";

describe("Bindings.connect", () => {
  @HttpTrigger()
  class UserController {
    @Get()
    async getUsers(): Promise<[]> {
      return [];
    }
  }

  it("Validate the execution of the connector of a class with Azure Function.", async done => {
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

    const userConnect = connect(UserController);
    await userConnect(context);
    done();
  });
});
