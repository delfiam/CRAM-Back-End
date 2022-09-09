import { UsuariosService } from '../usuarios/usuarios.service';
import { RegisterAuthDto } from './dto/registrar-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { Usuario } from 'src/usuarios/usuario.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usuariosService;
    private jwtService;
    constructor(usuariosService: UsuariosService, jwtService: JwtService);
    register(user: RegisterAuthDto): Promise<void>;
    login(user: LoginAuthDto): Promise<{
        usuario: Usuario;
        access_token: string;
    }>;
}
