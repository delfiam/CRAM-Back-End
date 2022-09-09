import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';
export declare class UsuariosController {
    private usuariosService;
    constructor(usuariosService: UsuariosService);
    getUsuarios(): Promise<Usuario[]>;
    getUsuarioByID(id: number): Promise<Usuario>;
    crearUsuario(usuario: Usuario): Promise<Usuario>;
    editarUsuario(id: number, usuario: Usuario): Promise<import("typeorm").UpdateResult>;
    eliminarUsuario(id: number): Promise<void>;
}
