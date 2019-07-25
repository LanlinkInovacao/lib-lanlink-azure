import inquirer from "inquirer";

import { Answer, TriggerValue, Choice } from "../models/choice";

export async function triggerQuestion(): Promise<Answer> {
  const listOfFiles: Choice[] = [
    { name: "httpTrigger", value: TriggerValue.HTTPTRIGGER },
    { name: "timerTrigger", value: TriggerValue.TIMERTRIGGER }
  ];

  return inquirer.prompt([
    {
      name: "trigger",
      type: "list",
      message: "Select a trigger for Azure Functions function:",
      choices: listOfFiles
    }
  ]);
}
