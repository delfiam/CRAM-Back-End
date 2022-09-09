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
exports.LugaresController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const lugares_service_1 = require("./lugares.service");
const lugares_entity_1 = require("./lugares.entity");
let LugaresController = class LugaresController {
    constructor(lugaresService) {
        this.lugaresService = lugaresService;
    }
    GetLugares(Filtro) {
        if (Filtro !== null) {
            return this.lugaresService.getLugarFiltro(Filtro);
        }
        else {
            return this.lugaresService.getLugares();
        }
    }
    GetLugarById(id) {
        return this.lugaresService.getLugarById(id);
    }
    CrearLugar(lugar) {
        return this.lugaresService.crearLugar(lugar);
    }
    EditarLugar(id, lugar) {
        return this.lugaresService.editarLugar(id, lugar);
    }
    EliminarLugar(id) {
        return this.lugaresService.eliminarLugar(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ name: 'filtros', required: false, type: String }),
    __param(0, (0, common_1.Query)('filtros')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LugaresController.prototype, "GetLugares", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LugaresController.prototype, "GetLugarById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [lugares_entity_1.Lugar]),
    __metadata("design:returntype", void 0)
], LugaresController.prototype, "CrearLugar", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, lugares_entity_1.Lugar]),
    __metadata("design:returntype", void 0)
], LugaresController.prototype, "EditarLugar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LugaresController.prototype, "EliminarLugar", null);
LugaresController = __decorate([
    (0, common_1.Controller)('lugares'),
    __metadata("design:paramtypes", [lugares_service_1.LugaresService])
], LugaresController);
exports.LugaresController = LugaresController;
//# sourceMappingURL=lugares.controller.js.map