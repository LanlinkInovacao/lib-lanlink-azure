"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RuntimeException_1 = require("./RuntimeException");
exports.UNKNOWN_REQUEST_MAPPING = `An invalid controller has been detected. Perhaps, one of your controllers is missing @Controller() decorator.`;
class UnknownRequestMappingException extends RuntimeException_1.RuntimeException {
    constructor() {
        super(exports.UNKNOWN_REQUEST_MAPPING);
    }
}
exports.UnknownRequestMappingException = UnknownRequestMappingException;
//# sourceMappingURL=UnknownRequestMappingException.js.map