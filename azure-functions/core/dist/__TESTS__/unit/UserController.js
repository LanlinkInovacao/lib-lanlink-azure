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
const Binding_1 = require("../../src/bindings/Binding");
const HttpTrigger_1 = require("../../src/triggers/http/HttpTrigger");
let UserController = class UserController {
    constructor() {
        this.users = [
            {
                id: 1,
                firstName: "João Pedro",
                lastName: "Queiroz",
                dateOfBirth: new Date(2021, 10, 1)
            },
            {
                id: 2,
                firstName: "Tiago",
                lastName: "Queiroz",
                dateOfBirth: new Date(2022, 4, 5)
            },
            {
                id: 3,
                firstName: "Mateus",
                lastName: "Queiroz",
                dateOfBirth: new Date(2023, 7, 3)
            }
        ];
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.users;
        });
    }
    getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = this.users.find(item => item.id === id);
            return user;
        });
    }
    getUserFilter(firstName, lastName) {
        return __awaiter(this, void 0, void 0, function* () {
            let users = this.users.filter(item => firstName !== undefined ? item.firstName === firstName : true);
            users = users.filter(item => lastName !== undefined ? item.lastName === lastName : true);
            return users;
        });
    }
    getUserByDateOfBirth(dateOfBirth) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = this.users.filter(item => item.dateOfBirth === dateOfBirth);
            return users;
        });
    }
};
__decorate([
    HttpTrigger_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsers", null);
__decorate([
    HttpTrigger_1.Get("{id:number}"),
    __param(0, HttpTrigger_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    HttpTrigger_1.Get("filter"),
    __param(0, HttpTrigger_1.Query()),
    __param(1, HttpTrigger_1.Query("lastName")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserFilter", null);
__decorate([
    HttpTrigger_1.Get("filter-of-date-birth"),
    __param(0, HttpTrigger_1.Param(":date")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserByDateOfBirth", null);
UserController = __decorate([
    HttpTrigger_1.HttpTrigger("users")
], UserController);
exports.UserController = UserController;
exports.default = Binding_1.connect(UserController);
//# sourceMappingURL=UserController.js.map