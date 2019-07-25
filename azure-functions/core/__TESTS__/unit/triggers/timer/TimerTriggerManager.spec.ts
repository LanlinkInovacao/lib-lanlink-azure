import { TimerTrigger, TimerRun, TimerTriggerManager } from "../../../../src";

describe("triggers.timer.TimerTriggerManager", () => {
  it("Validate if Run method was executed.", done => {
    @TimerTrigger()
    class CollectTimer {
      @TimerRun()
      run() {
        expect(true).toEqual(true);
        done();
      }
    }

    let timerTriggerManager = new TimerTriggerManager();
    timerTriggerManager.run(CollectTimer, {
      invocationId: "",
      executionContext: {
        invocationId: "",
        functionName: "",
        functionDirectory: ""
      },
      bindings: {},
      bindingData: {},
      bindingDefinitions: [{ name: "", type: "", direction: "in" }],
      done: (): void => {}
    });
  });
});
