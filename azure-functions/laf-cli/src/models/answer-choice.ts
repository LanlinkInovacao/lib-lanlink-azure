export interface Answer {
  files: Object;
  trigger: TriggerValue;
  overwrite: boolean;
}

export interface Choice {
  name: string;
  value: TriggerValue;
}

export enum TriggerValue {
  TIMERTRIGGER = "timerTrigger",
  HTTPTRIGGER = "httpTrigger"
}
