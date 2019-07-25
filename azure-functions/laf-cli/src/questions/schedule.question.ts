import inquirer from "inquirer";

export function scheduleQuestion(): Promise<any> {
  return inquirer.prompt([
    {
      name: "schedule",
      type: "input",
      message: "A CRON expression or a TimeSpan value:"
    }
  ]);
}
