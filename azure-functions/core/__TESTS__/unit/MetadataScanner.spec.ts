import { connect } from "../../src/bindings/Binding";
import { BindingDefinitionType } from "../../src/bindings/BindingDefinition";
import { Context } from "../../src/Context";
import { TriggerManager } from "../../src/triggers/TriggerManager";

import { UserController } from "./UserController";

describe("Bindings.connect", () => {
  class Parent {
    constructor() {}
    testParent() {}
    testParent2() {}
    get propParent() {
      return "";
    }
    set valParent(value: any) {}
  }

  class Test extends Parent {
    constructor() {
      super();
    }
    get prop() {
      return "";
    }
    set val(value: any) {}
    test() {}
    test2() {}
  }

  it("Validate the execution of the connector of a class with Azure Function.", async done => {
    done();
  });
});
