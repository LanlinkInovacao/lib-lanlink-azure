import {
  TimerTrigger,
  METADATAKEY_TRIGGER_NAME,
  METADATAKEY_TRIGGER,
  TimerRun,
  METADATAKEY_TIMERTRIGGER_RUN
} from "../../../../src";

describe("triggers.timer.TimerTrigger", () => {
  @TimerTrigger()
  class CollectTimer {
    @TimerRun()
    static run() {}
  }

  it("Validate if TimerTrigger was set correctly.", () => {
    const isTrigger =
      Reflect.getOwnMetadata(METADATAKEY_TRIGGER, CollectTimer) === true;

    expect(true).toEqual(isTrigger);

    const isTimerTrigger =
      Reflect.getOwnMetadata(METADATAKEY_TRIGGER_NAME, CollectTimer) ===
      "timerTrigger";

    expect(true).toEqual(isTimerTrigger);
  });

  it("Validate if TimerTrigger was set correctly.", () => {
    const isTimerRun =
      Reflect.getOwnMetadata(METADATAKEY_TIMERTRIGGER_RUN, CollectTimer.run) ===
      true;

    expect(true).toEqual(isTimerRun);
  });
});
