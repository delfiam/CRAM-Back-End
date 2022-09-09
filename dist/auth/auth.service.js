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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const usuarios_service_1 = require("../usuarios/usuarios.service");
const jwt_1 = require("@nestjs/jwt");
const bcryptjs_1 = require("bcryptjs");
let AuthService = class AuthService {
    constructor(usuariosService, jwtService) {
        this.usuariosService = usuariosService;
        this.jwtService = jwtService;
    }
    async register(user) {
        let user_logged;
        const { password, nombre, mail, username, foto } = user;
        const salt = await (0, bcryptjs_1.genSalt)();
        const key = await (0, bcryptjs_1.hash)(password, salt);
        user_logged = { IdUsuario: null, username: username, nombre: nombre, mail: mail, password: key, foto: foto };
        this.usuariosService.crearUsuario(user_logged);
    }
    async login(user) {
        const { username, password } = user;
        const validarUsuario = await this.usuariosService.getUsuarioByUsername(username);
        if (!validarUsuario)
            throw new common_1.HttpException('user_not_found', 404);
        const validarPassword = await (0, bcryptjs_1.compare)(password, validarUsuario.password);
        if (validarPassword) {
            const payload = { username: validarUsuario.username, sub: validarUsuario.IdUsuario };
            const access_token = this.jwtService.sign(payload);
            const data = {
                usuario: validarUsuario,
                access_token,
            };
            return data;
        }
        else {
            throw new common_1.HttpException('Incorrect_Password', 404);
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [usuarios_service_1.UsuariosService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map