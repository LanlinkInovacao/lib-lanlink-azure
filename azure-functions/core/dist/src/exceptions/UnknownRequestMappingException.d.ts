import { RuntimeException } from "./RuntimeException";
export declare const UNKNOWN_REQUEST_MAPPING = "An invalid controller has been detected. Perhaps, one of your controllers is missing @Controller() decorator.";
export declare class UnknownRequestMappingException extends RuntimeException {
    constructor();
}
