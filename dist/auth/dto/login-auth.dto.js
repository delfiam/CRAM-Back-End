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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginAuthDto = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
let LoginAuthDto = class LoginAuthDto {
};
__decorate([
    (0, typeorm_1.Column)({ name: 'Username', type: 'varchar', unique: true, length: 20 }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], LoginAuthDto.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Password', type: 'longtext' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(4, {
        message: 'La contraseña debe tener al menos 4 caracteres',
    }),
    __metadata("design:type", String)
], LoginAuthDto.prototype, "password", void 0);
LoginAuthDto = __decorate([
    (0, typeorm_1.Entity)()
], LoginAuthDto);
exports.LoginAuthDto = LoginAuthDto;
//# sourceMappingURL=login-auth.dto.js.map