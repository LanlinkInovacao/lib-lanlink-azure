import { RuntimeException } from "./RuntimeException";

export const UNKNOWN_REQUEST_MAPPING = `An invalid controller has been detected. Perhaps, one of your controllers is missing @Controller() decorator.`;

export class UnknownRequestMappingException extends RuntimeException {
  constructor() {
    super(UNKNOWN_REQUEST_MAPPING);
  }
}
