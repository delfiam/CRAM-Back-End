"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const lugares_module_1 = require("./lugares/lugares.module");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const usuario_entity_1 = require("./usuarios/usuario.entity");
const lugares_entity_1 = require("./lugares/lugares.entity");
const reviews_entity_1 = require("./reviews/reviews.entity");
const reviews_module_1 = require("./reviews/reviews.module");
const auth_module_1 = require("./auth/auth.module");
const seguido_module_1 = require("./seguido/seguido.module");
const seguido_entity_1 = require("./seguido/seguido.entity");
const lugares_controller_1 = require("./lugares/lugares.controller");
const usuarios_service_1 = require("./usuarios/usuarios.service");
const usuarios_controller_1 = require("./usuarios/usuarios.controller");
const seguido_controller_1 = require("./seguido/seguido.controller");
const seguido_service_1 = require("./seguido/seguido.service");
const reviews_service_1 = require("./reviews/reviews.service");
const reviews_controller_1 = require("./reviews/reviews.controller");
const fs_1 = require("fs");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        providers: [usuarios_service_1.UsuariosService, seguido_service_1.SeguidoService, reviews_service_1.ReviewsService],
        controllers: [lugares_controller_1.LugaresController, usuarios_controller_1.UsuariosController, seguido_controller_1.SeguidoController, reviews_controller_1.ReviewsController],
        imports: [
            lugares_module_1.LugarModule,
            usuarios_module_1.UsuariosModule,
            reviews_module_1.ReviewModule,
            seguido_module_1.SeguidoModule,
            auth_module_1.AuthModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'cram.mysql.database.azure.com',
                port: 3306,
                username: 'cramDB',
                password: 'SofDelf7#',
                database: 'cram',
                entities: [usuario_entity_1.Usuario, lugares_entity_1.Lugar, reviews_entity_1.Review, seguido_entity_1.Seguido],
                synchronize: false,
                ssl: {
                    rejectUnauthorized: false,
                    ca: (0, fs_1.readFileSync)('DigiCertGlobalRootG2.crt.pem').toString()
                }
            }),
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map