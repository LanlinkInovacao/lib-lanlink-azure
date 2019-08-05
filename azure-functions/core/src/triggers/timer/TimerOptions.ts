export interface ScheduleStatus {
  Last: string;
  LastUpdated: string;
  Next: string;
}

export interface TimerOptions {
  Schedule: {};
  ScheduleStatus: ScheduleStatus;
  IsPastDue: boolean;
}
