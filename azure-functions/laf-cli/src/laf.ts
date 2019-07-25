import { injectable, inject } from "inversify";
import { Logger } from "./utils/logger.util";

import { Choice, Answer, TriggerValue } from "./models/choice";
import {
  HttpTriggerTemplate,
  TimerTriggerTemplate
} from "./templates/triggers";

import {
  nameQuestion,
  overwriteFileQuestion,
  triggerQuestion,
  scheduleQuestion
} from "./questions";

import { ConsoleMessage } from "./models/console-message";

@injectable()
export class LAF {
  constructor(
    @inject("Logger") private logger: Logger,
    @inject("HttpTriggerTemplate")
    private httpTriggerTemplate: HttpTriggerTemplate,
    @inject("TimerTriggerTemplate")
    private timerTriggerTemplate: TimerTriggerTemplate
  ) {
    this.logger.showTitleAndBanner();
    this.executeLAF();
  }

  public async executeLAF(): Promise<any> {
    let triggerAnswer: Answer = await triggerQuestion();

    if (triggerAnswer.trigger === TriggerValue.HTTPTRIGGER) {
      return this.httpTriggerActions();
    } else if (triggerAnswer.trigger === TriggerValue.TIMERTRIGGER) {
      return this.timerTriggerActions();
    }
  }

  private async httpTriggerActions() {
    // let githubFileAnswer: Answer = await githubFileQuestion();
    // switch (githubFileAnswer.files) {
    //   case UniversalChoiceValue.ALL: {
    //     this.logger.showInfo(ConsoleMessage.START_GENERATING);
    //     this.codeOfConduct.generateFile();
    //     this.contributing.generateFile();
    //     this.bugReport.generateFile();
    //     this.featureRequest.generateFile();
    //     return this.pullRequest.generateFile();
    //   }
    //   case UniversalChoiceValue.LICENSE: {
    //     return this.license.generateLicense();
    //   }
    //   case UniversalChoiceValue.CHANGELOG: {
    //     return this.changelog.generateFile();
    //   }
    //   case UniversalChoiceValue.CONTRIBUTING: {
    //     return this.contributing.generateFile();
    //   }
    //   case UniversalChoiceValue.CODE_OF_CONDUCT: {
    //     return this.codeOfConduct.generateFile();
    //   }
    //   case UniversalChoiceValue.TODO: {
    //     return this.todo.generateFile();
    //   }
    //   case UniversalChoiceValue.README: {
    //     return this.readme.generateFile();
    //   }
    //   case GithubChoiceValue.BUG_REPORT: {
    //     return this.bugReport.generateFile();
    //   }
    //   case GithubChoiceValue.FEATURE_REQUEST: {
    //     return this.featureRequest.generateFile();
    //   }
    //   case GithubChoiceValue.PULL_REQUEST: {
    //     return this.pullRequest.generateFile();
    //   }
    // }
  }

  private async timerTriggerActions() {
    let timerScheduleAnswer: Answer = await scheduleQuestion();

    let timerNameAnswer: Answer = await nameQuestion();
  }
}
