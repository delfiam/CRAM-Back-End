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
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const lugares_module_1 = require("./lugares/lugares.module");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const usuario_entity_1 = require("./usuarios/usuario.entity");
const lugares_entity_1 = require("./lugares/lugares.entity");
const reviews_entity_1 = require("./reviews/reviews.entity");
const reviews_module_1 = require("./reviews/reviews.module");
const auth_module_1 = require("./auth/auth.module");
const seguido_module_1 = require("./seguido/seguido.module");
const seguido_entity_1 = require("./seguido/seguido.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        providers: [app_service_1.AppService],
        controllers: [app_controller_1.AppController],
        imports: [
            lugares_module_1.LugarModule,
            usuarios_module_1.UsuariosModule,
            reviews_module_1.ReviewModule,
            seguido_module_1.SeguidoModule,
            auth_module_1.AuthModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'user',
                password: 'password',
                database: 'cram',
                entities: [usuario_entity_1.Usuario, lugares_entity_1.Lugar, reviews_entity_1.Review, seguido_entity_1.Seguido],
                synchronize: false,
            }),
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map