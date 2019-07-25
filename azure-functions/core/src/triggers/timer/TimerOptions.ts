export interface ScheduleStatus {
  last: string;
  lastUpdated: string;
  next: string;
}

export interface TimerOptions {
  schedule: {};
  scheduleStatus: ScheduleStatus;
  isPastDue: boolean;
}
