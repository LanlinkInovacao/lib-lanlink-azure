"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
describe("Bindings.connect", () => {
    class Parent {
        constructor() { }
        testParent() { }
        testParent2() { }
        get propParent() {
            return "";
        }
        set valParent(value) { }
    }
    class Test extends Parent {
        constructor() {
            super();
        }
        get prop() {
            return "";
        }
        set val(value) { }
        test() { }
        test2() { }
    }
    it("Validate the execution of the connector of a class with Azure Function.", (done) => __awaiter(this, void 0, void 0, function* () {
        done();
    }));
});
//# sourceMappingURL=MetadataScanner.spec.js.map