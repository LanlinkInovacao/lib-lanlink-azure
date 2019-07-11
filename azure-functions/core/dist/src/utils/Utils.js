"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUndefined = (obj) => typeof obj === "undefined";
exports.isObject = (fn) => !exports.isNil(fn) && typeof fn === "object";
exports.validatePath = (path) => path ? (path.charAt(0) !== "/" ? "/" + path : path) : "";
exports.isFunction = (fn) => typeof fn === "function";
exports.isString = (fn) => typeof fn === "string";
exports.isConstructor = (fn) => fn === "constructor";
exports.isNil = (obj) => exports.isUndefined(obj) || obj === null;
exports.isEmpty = (array) => !(array && array.length > 0);
exports.isSymbol = (fn) => typeof fn === "symbol";
//# sourceMappingURL=Utils.js.map