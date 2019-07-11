"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const HttpTrigger_1 = require("../../src/triggers/http/HttpTrigger");
const Constants_1 = require("../../src/triggers/Constants");
const src_1 = require("../../src");
describe("HttpTrigger.@httpTrigger()", () => {
    it("Validates the operation of the decorator without parameter.", (done) => __awaiter(this, void 0, void 0, function* () {
        let UserController = class UserController {
        };
        UserController = __decorate([
            HttpTrigger_1.HttpTrigger()
        ], UserController);
        const isTrigger = Reflect.getOwnMetadata(Constants_1.METADATAKEY_TRIGGER, UserController);
        const isHTTPTrigger = Reflect.getOwnMetadata(Constants_1.METADATAKEY_TRIGGER_NAME, UserController) ===
            "httpTrigger";
        expect(true).toEqual(isTrigger);
        expect(true).toEqual(isHTTPTrigger);
        done();
    }));
});
describe("HttpTrigger.@httpTrigger(route)", () => {
    it("Validates the operation of the decorator with route.", (done) => __awaiter(this, void 0, void 0, function* () {
        let UserController = class UserController {
        };
        UserController = __decorate([
            HttpTrigger_1.HttpTrigger("/api/users")
        ], UserController);
        const path = Reflect.getOwnMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_PATH, UserController);
        expect("/api/users").toEqual(path);
        done();
    }));
});
describe("HttpTrigger.@httpTrigger(options)", () => {
    it("Validates the operation of the decorator with options.", (done) => __awaiter(this, void 0, void 0, function* () {
        const fun = () => {
            let UserController = class UserController {
            };
            UserController = __decorate([
                HttpTrigger_1.HttpTrigger("/api/users"),
                HttpTrigger_1.HttpTrigger()
            ], UserController);
        };
        expect(fun).toThrow(Constants_1.ERROR_DUPLICATE_TRIGGER);
        done();
    }));
});
describe("HttpTrigger.@Get", () => {
    it("Valid execution of the get decorator with no path.", (done) => __awaiter(this, void 0, void 0, function* () {
        class UserController {
            static getUsers() { }
        }
        __decorate([
            HttpTrigger_1.Get(),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], UserController, "getUsers", null);
        const method = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_METHOD, UserController.getUsers);
        const path = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_PATH, UserController.getUsers);
        expect(method).toEqual(src_1.HttpMethod.Get);
        expect(path).toEqual("/");
        done();
    }));
    it("valid to decorator execution Get with path.", (done) => __awaiter(this, void 0, void 0, function* () {
        class UserController {
            static getUsers() { }
        }
        __decorate([
            HttpTrigger_1.Get("/users"),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], UserController, "getUsers", null);
        const method = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_METHOD, UserController.getUsers);
        const path = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_PATH, UserController.getUsers);
        expect(method).toEqual(src_1.HttpMethod.Get);
        expect(path).toEqual("/users");
        done();
    }));
});
describe("HttpTrigger.@Post", () => {
    it("Valid execution of the post decorator with no path.", (done) => __awaiter(this, void 0, void 0, function* () {
        class UserController {
            static getUsers() { }
        }
        __decorate([
            HttpTrigger_1.Post(),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], UserController, "getUsers", null);
        const method = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_METHOD, UserController.getUsers);
        const path = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_PATH, UserController.getUsers);
        expect(method).toEqual(src_1.HttpMethod.Post);
        expect(path).toEqual("/");
        done();
    }));
    it("valid to decorator execution post with path.", (done) => __awaiter(this, void 0, void 0, function* () {
        class UserController {
            static getUsers() { }
        }
        __decorate([
            HttpTrigger_1.Post("/users"),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], UserController, "getUsers", null);
        const method = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_METHOD, UserController.getUsers);
        const path = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_PATH, UserController.getUsers);
        expect(method).toEqual(src_1.HttpMethod.Post);
        expect(path).toEqual("/users");
        done();
    }));
});
describe("HttpTrigger.@Delete", () => {
    it("Valid execution of the Delete decorator with no path.", (done) => __awaiter(this, void 0, void 0, function* () {
        class UserController {
            static getUsers() { }
        }
        __decorate([
            HttpTrigger_1.Delete(),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], UserController, "getUsers", null);
        const method = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_METHOD, UserController.getUsers);
        const path = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_PATH, UserController.getUsers);
        expect(method).toEqual(src_1.HttpMethod.Delete);
        expect(path).toEqual("/");
        done();
    }));
    it("valid to decorator execution Delete with path.", (done) => __awaiter(this, void 0, void 0, function* () {
        class UserController {
            static getUsers() { }
        }
        __decorate([
            HttpTrigger_1.Delete("/users"),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], UserController, "getUsers", null);
        const method = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_METHOD, UserController.getUsers);
        const path = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_PATH, UserController.getUsers);
        expect(method).toEqual(src_1.HttpMethod.Delete);
        expect(path).toEqual("/users");
        done();
    }));
});
describe("HttpTrigger.@Put", () => {
    it("Valid execution of the Put decorator with no path.", (done) => __awaiter(this, void 0, void 0, function* () {
        class UserController {
            static getUsers() { }
        }
        __decorate([
            HttpTrigger_1.Put(),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], UserController, "getUsers", null);
        const method = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_METHOD, UserController.getUsers);
        const path = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_PATH, UserController.getUsers);
        expect(method).toEqual(src_1.HttpMethod.Put);
        expect(path).toEqual("/");
        done();
    }));
    it("valid to decorator execution Put with path.", (done) => __awaiter(this, void 0, void 0, function* () {
        class UserController {
            static getUsers() { }
        }
        __decorate([
            HttpTrigger_1.Put("/users"),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], UserController, "getUsers", null);
        const method = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_METHOD, UserController.getUsers);
        const path = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_PATH, UserController.getUsers);
        expect(method).toEqual(src_1.HttpMethod.Put);
        expect(path).toEqual("/users");
        done();
    }));
});
describe("HttpTrigger.@Patch", () => {
    it("Valid execution of the Patch decorator with no path.", (done) => __awaiter(this, void 0, void 0, function* () {
        class UserController {
            static getUsers() { }
        }
        __decorate([
            HttpTrigger_1.Patch(),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], UserController, "getUsers", null);
        const method = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_METHOD, UserController.getUsers);
        const path = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_PATH, UserController.getUsers);
        expect(method).toEqual(src_1.HttpMethod.Patch);
        expect(path).toEqual("/");
        done();
    }));
    it("valid to decorator execution Patch with path.", (done) => __awaiter(this, void 0, void 0, function* () {
        class UserController {
            static getUsers() { }
        }
        __decorate([
            HttpTrigger_1.Patch("/users"),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], UserController, "getUsers", null);
        const method = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_METHOD, UserController.getUsers);
        const path = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_PATH, UserController.getUsers);
        expect(method).toEqual(src_1.HttpMethod.Patch);
        expect(path).toEqual("/users");
        done();
    }));
});
describe("HttpTrigger.@Options", () => {
    it("Valid execution of the Options decorator with no path.", (done) => __awaiter(this, void 0, void 0, function* () {
        class UserController {
            static getUsers() { }
        }
        __decorate([
            HttpTrigger_1.Options(),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], UserController, "getUsers", null);
        const method = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_METHOD, UserController.getUsers);
        const path = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_PATH, UserController.getUsers);
        expect(method).toEqual(src_1.HttpMethod.Options);
        expect(path).toEqual("/");
        done();
    }));
    it("valid to decorator execution Get with path.", (done) => __awaiter(this, void 0, void 0, function* () {
        class UserController {
            static getUsers() { }
        }
        __decorate([
            HttpTrigger_1.Options("/users"),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], UserController, "getUsers", null);
        const method = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_METHOD, UserController.getUsers);
        const path = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_PATH, UserController.getUsers);
        expect(method).toEqual(src_1.HttpMethod.Options);
        expect(path).toEqual("/users");
        done();
    }));
});
describe("HttpTrigger.@Head", () => {
    it("Valid execution of the Head decorator with no path.", (done) => __awaiter(this, void 0, void 0, function* () {
        class UserController {
            static getUsers() { }
        }
        __decorate([
            HttpTrigger_1.Head(),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], UserController, "getUsers", null);
        const method = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_METHOD, UserController.getUsers);
        const path = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_PATH, UserController.getUsers);
        expect(method).toEqual(src_1.HttpMethod.Head);
        expect(path).toEqual("/");
        done();
    }));
    it("valid to decorator execution Head with path.", (done) => __awaiter(this, void 0, void 0, function* () {
        class UserController {
            static getUsers() { }
        }
        __decorate([
            HttpTrigger_1.Head("/users"),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], UserController, "getUsers", null);
        const method = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_METHOD, UserController.getUsers);
        const path = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_PATH, UserController.getUsers);
        expect(method).toEqual(src_1.HttpMethod.Head);
        expect(path).toEqual("/users");
        done();
    }));
});
describe("HttpTrigger.@All", () => {
    it("Valid execution of the All decorator with no path.", (done) => __awaiter(this, void 0, void 0, function* () {
        class UserController {
            static getUsers() { }
        }
        __decorate([
            HttpTrigger_1.All(),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], UserController, "getUsers", null);
        const method = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_METHOD, UserController.getUsers);
        const path = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_PATH, UserController.getUsers);
        expect(method).toEqual("All");
        expect(path).toEqual("/");
        done();
    }));
    it("valid to decorator execution Head with path.", (done) => __awaiter(this, void 0, void 0, function* () {
        class UserController {
            static getUsers() { }
        }
        __decorate([
            HttpTrigger_1.All("/users"),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], UserController, "getUsers", null);
        const method = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_METHOD, UserController.getUsers);
        const path = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_PATH, UserController.getUsers);
        expect(method).toEqual("All");
        expect(path).toEqual("/users");
        done();
    }));
});
describe("HttpTrigger: Decorators in function parameters", () => {
    it("Without param.", (done) => __awaiter(this, void 0, void 0, function* () {
        class UserController {
            static getUsers(req, body) { }
        }
        __decorate([
            __param(0, HttpTrigger_1.Request()), __param(1, HttpTrigger_1.Body()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object, Object]),
            __metadata("design:returntype", void 0)
        ], UserController, "getUsers", null);
        const userController = new UserController();
        const decoratorsArgs = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_ARGS, userController.constructor, "getUsers");
        expect(decoratorsArgs).toEqual({
            "Request:0": { index: 0, data: undefined },
            "Body:1": { index: 1, data: undefined }
        });
        done();
    }));
    it("With param.", (done) => __awaiter(this, void 0, void 0, function* () {
        class UserController {
            static getUsers(name, value) { }
        }
        __decorate([
            __param(0, HttpTrigger_1.Body("name")), __param(1, HttpTrigger_1.Query("filter")),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object, Object]),
            __metadata("design:returntype", void 0)
        ], UserController, "getUsers", null);
        const decoratorsArgs = Reflect.getMetadata(Constants_1.METADATAKEY_HTTPTRIGGER_ARGS, UserController, "getUsers");
        expect(decoratorsArgs).toEqual({
            "Body:0": { index: 0, data: "name" },
            "Query:1": { index: 1, data: "filter" }
        });
        done();
    }));
});
//# sourceMappingURL=HttpTrigger.spec.js.map