import {
  Context,
  TimerOptions,
  TimerTrigger,
  connect,
  TimerRun
} from "@lanlink/azure-functions";

@TimerTrigger()
class MonitoredCustomersCSP {
  @TimerRun()
  run(context: Context, timer: TimerOptions): void | Promise<any> {
    var timeStamp = new Date().toISOString();

    if (timer.IsPastDue) {
      context.log("Timer function is running late!");
    }
    context.log("Timer trigger function ran!", timeStamp);
  }
}

export default connect(MonitoredCustomersCSP);
