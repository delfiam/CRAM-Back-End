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
exports.SeguidoService = void 0;
const common_1 = require("@nestjs/common");
const seguido_entity_1 = require("./seguido.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let SeguidoService = class SeguidoService {
    constructor(seguidos) {
        this.seguidos = seguidos;
    }
    getSeguidores(id) {
        return this.seguidos.findBy({ IdSeguido: id });
    }
    getSeguidos(id) {
        return this.seguidos.findBy({ IdUsuario: id });
    }
    seguir(seguido) {
        return this.seguidos.save(seguido);
    }
    async dejarDeSeguir(seguido) {
        await this.seguidos.delete({ IdUsuario: seguido.IdUsuario, IdSeguido: seguido.IdSeguido });
    }
};
SeguidoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(seguido_entity_1.Seguido)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SeguidoService);
exports.SeguidoService = SeguidoService;
//# sourceMappingURL=seguido.service.js.map