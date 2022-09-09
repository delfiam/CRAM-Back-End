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
exports.Review = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
let Review = class Review {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Review.prototype, "IdReview", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Destacar', type: 'varchar' }),
    (0, class_validator_1.MaxLength)(80),
    __metadata("design:type", String)
], Review.prototype, "destacar", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Descripcion', type: 'text' }),
    __metadata("design:type", String)
], Review.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Puntaje', type: 'int' }),
    __metadata("design:type", Number)
], Review.prototype, "puntaje", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Comentarios', type: 'text' }),
    __metadata("design:type", String)
], Review.prototype, "comentarios", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'IdUsuario', type: 'int' }),
    __metadata("design:type", Number)
], Review.prototype, "IdUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'IdLugar', type: 'int' }),
    __metadata("design:type", String)
], Review.prototype, "IdLugar", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Titulo', type: 'varchar' }),
    __metadata("design:type", String)
], Review.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Foto', type: 'longtext' }),
    __metadata("design:type", String)
], Review.prototype, "foto", void 0);
Review = __decorate([
    (0, typeorm_1.Entity)()
], Review);
exports.Review = Review;
//# sourceMappingURL=Reviews.entity.js.map