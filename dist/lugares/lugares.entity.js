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
exports.Lugar = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
let Lugar = class Lugar {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", String)
], Lugar.prototype, "IdLugar", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nombre', type: 'text' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Lugar.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Descripcion', type: 'text' }),
    __metadata("design:type", String)
], Lugar.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Filtros', type: 'text' }),
    __metadata("design:type", String)
], Lugar.prototype, "filtros", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Foto', type: 'longtext' }),
    __metadata("design:type", String)
], Lugar.prototype, "foto", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'AgregadoALista', type: 'tinytext' }),
    __metadata("design:type", Boolean)
], Lugar.prototype, "agregadoLista", void 0);
Lugar = __decorate([
    (0, typeorm_1.Entity)()
], Lugar);
exports.Lugar = Lugar;
//# sourceMappingURL=lugares.entity.js.map