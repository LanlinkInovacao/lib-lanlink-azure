import {
  ERROR_DUPLICATE_TRIGGER,
  METADATAKEY_TRIGGER,
  METADATAKEY_TIMERTRIGGER_RUN,
  ERROR_DUPLICATE_TIMERTRIGGER_RUN
} from "../Constants";

import { setTriggerMetadata } from "../Utils";
import { Context } from "../../Context";
import { TimerOptions } from "./TimerOptions";

export interface ITimerTrigger {
  run(context: Context, timer: TimerOptions): Promise<void>;
}

export function TimerTrigger(): ClassDecorator {
  return (target: {}) => {
    if (Reflect.hasOwnMetadata(METADATAKEY_TRIGGER, target)) {
      throw new Error(ERROR_DUPLICATE_TRIGGER);
    }
    setTriggerMetadata(target, "timerTrigger");
  };
}

export function TimerRun(): MethodDecorator {
  return (_target, _key, descriptor: PropertyDescriptor) => {
    if (
      Reflect.hasOwnMetadata(METADATAKEY_TIMERTRIGGER_RUN, descriptor.value)
    ) {
      throw new Error(ERROR_DUPLICATE_TIMERTRIGGER_RUN);
    }

    Reflect.defineMetadata(
      METADATAKEY_TIMERTRIGGER_RUN,
      true,
      descriptor.value
    );
  };
}
