import "reflect-metadata";
import { Container } from "inversify";
import { LAF } from "./laf";
import { Logger } from "./utils/logger.util";
import { Checker } from "./utils/checker.util";
import { DefaultTemplate } from "./templates/default/default.template";
import {
  HttpTriggerTemplate,
  TimerTriggerTemplate
} from "./templates/triggers";

export function index(): LAF {
  const container: Container = new Container();

  // Utils
  container
    .bind<Logger>("Logger")
    .to(Logger)
    .inSingletonScope();
  container
    .bind<Checker>("Checker")
    .to(Checker)
    .inSingletonScope();

  // Default Template
  container
    .bind<DefaultTemplate>("DefaultTemplate")
    .to(DefaultTemplate)
    .inSingletonScope();

  // Triggers Templates
  container
    .bind<HttpTriggerTemplate>("HttpTriggerTemplate")
    .to(HttpTriggerTemplate)
    .inSingletonScope();
  container
    .bind<TimerTriggerTemplate>("TimerTriggerTemplate")
    .to(TimerTriggerTemplate)
    .inSingletonScope();

  // LAF
  container
    .bind<LAF>("LAF")
    .to(LAF)
    .inSingletonScope();

  return container.get<LAF>("LAF");
}

index();
