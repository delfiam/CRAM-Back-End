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
exports.LugaresService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const lugares_entity_1 = require("./lugares.entity");
let LugaresService = class LugaresService {
    constructor(lugares) {
        this.lugares = lugares;
    }
    getLugares() {
        return this.lugares.find();
    }
    getLugarById(id) {
        return this.lugares.findOneBy({ IdLugar: id });
    }
    getLugarFiltro(filtro) {
        return this.lugares.findBy({ filtros: filtro });
    }
    async eliminarLugar(id) {
        await this.lugares.delete({ IdLugar: id });
    }
    crearLugar(lugar) {
        return this.lugares.save(lugar);
    }
    async editarLugar(id, lugar) {
        await this.lugares.update({ IdLugar: id }, lugar);
    }
};
LugaresService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(lugares_entity_1.Lugar)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LugaresService);
exports.LugaresService = LugaresService;
//# sourceMappingURL=lugares.service.js.map