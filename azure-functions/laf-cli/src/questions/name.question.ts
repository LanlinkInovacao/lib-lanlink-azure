import inquirer from "inquirer";

export function nameQuestion(): Promise<any> {
  return inquirer.prompt([
    {
      name: "name",
      type: "input",
      message:
        "The name of the variable that represents the timer object in function code.:"
    }
  ]);
}
