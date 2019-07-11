"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("./Utils");
const lodash_1 = require("lodash");
const util_1 = require("util");
class MetadataScanner {
    scanFromPrototype(prototype, callback) {
        const mapResult = lodash_1.map([...this.getAllFilteredMethodNames(prototype)], callback);
        const filterResult = lodash_1.filter(mapResult, metadata => !Utils_1.isNil(metadata));
        return filterResult;
    }
    *getAllFilteredMethodNames(prototype) {
        do {
            yield* lodash_1.filter(Object.getOwnPropertyNames(prototype), prop => {
                const descriptor = Object.getOwnPropertyDescriptor(prototype, prop);
                if (!util_1.isUndefined(descriptor) && (descriptor.set || descriptor.get)) {
                    return false;
                }
                return !Utils_1.isConstructor(prop) && Utils_1.isFunction(prototype[prop]);
            });
        } while (
        // tslint:disable-next-line:no-conditional-assignment
        (prototype = Reflect.getPrototypeOf(prototype)) &&
            prototype !== Object.prototype);
    }
}
exports.MetadataScanner = MetadataScanner;
//# sourceMappingURL=MetadataScanner.js.map