export interface Answer {
  files: Object;
  trigger: TriggerValue;
  schedule: string;
  overwrite: boolean;
}

export interface Choice {
  name: string;
  value: TriggerValue;
}

export enum TriggerValue {
  HTTPTRIGGER = "httpTrigger",
  TIMERTRIGGER = "timerTrigger"
}
