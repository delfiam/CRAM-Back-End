import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/registrar-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    RegisterUser(usuarioObject: RegisterAuthDto): Promise<void>;
    loginUse(usuarioObject: LoginAuthDto): Promise<{
        usuario: import("../usuarios/usuario.entity").Usuario;
        access_token: string;
    }>;
}
