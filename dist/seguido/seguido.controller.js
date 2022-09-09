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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeguidoController = void 0;
const common_1 = require("@nestjs/common");
const seguido_entity_1 = require("./seguido.entity");
const seguido_service_1 = require("./seguido.service");
let SeguidoController = class SeguidoController {
    constructor(seguidosService) {
        this.seguidosService = seguidosService;
    }
    getSeguidos(id) {
        return this.seguidosService.getSeguidos(id);
    }
    getSeguidores(id) {
        return this.seguidosService.getSeguidores(id);
    }
    seguir(seguido) {
        return this.seguidosService.seguir(seguido);
    }
    dejarDeSeguir(seguido) {
        return this.seguidosService.dejarDeSeguir(seguido);
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SeguidoController.prototype, "getSeguidos", null);
__decorate([
    (0, common_1.Get)('/seguidores/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SeguidoController.prototype, "getSeguidores", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [seguido_entity_1.Seguido]),
    __metadata("design:returntype", void 0)
], SeguidoController.prototype, "seguir", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [seguido_entity_1.Seguido]),
    __metadata("design:returntype", void 0)
], SeguidoController.prototype, "dejarDeSeguir", null);
SeguidoController = __decorate([
    (0, common_1.Controller)('seguido'),
    __metadata("design:paramtypes", [seguido_service_1.SeguidoService])
], SeguidoController);
exports.SeguidoController = SeguidoController;
//# sourceMappingURL=seguido.controller.js.map