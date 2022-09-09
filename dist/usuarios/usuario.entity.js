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
exports.Usuario = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
let Usuario = class Usuario {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment', { name: 'IdUsuario', type: 'int' }),
    __metadata("design:type", Number)
], Usuario.prototype, "IdUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Foto', type: 'text' }),
    __metadata("design:type", String)
], Usuario.prototype, "foto", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Nombre', type: 'varchar' }),
    __metadata("design:type", String)
], Usuario.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Password', type: 'longtext' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Usuario.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Username', unique: true, type: 'varchar' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Usuario.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Mail', unique: true, type: 'varchar' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], Usuario.prototype, "mail", void 0);
Usuario = __decorate([
    (0, typeorm_1.Entity)()
], Usuario);
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.entity.js.map