"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LugarModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const lugares_service_1 = require("./lugares.service");
const lugares_controller_1 = require("./lugares.controller");
const lugares_entity_1 = require("./lugares.entity");
let LugarModule = class LugarModule {
};
LugarModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([lugares_entity_1.Lugar])],
        providers: [lugares_service_1.LugaresService],
        controllers: [lugares_controller_1.LugaresController],
    })
], LugarModule);
exports.LugarModule = LugarModule;
//# sourceMappingURL=lugares.module.js.map