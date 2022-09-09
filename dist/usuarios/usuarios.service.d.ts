import { Usuario } from './usuario.entity';
import { Repository } from 'typeorm';
export declare class UsuariosService {
    private usuarios;
    constructor(usuarios: Repository<Usuario>);
    getUsuarios(): Promise<Usuario[]>;
    getUsuarioByID(id: number): Promise<Usuario>;
    crearUsuario(usuario: Usuario): Promise<Usuario>;
    editarUsuario(id: number, usuario: Usuario): Promise<import("typeorm").UpdateResult>;
    eliminarUsuario(id: number): Promise<void>;
    getUsuarioByUsername(username: string): Promise<Usuario | undefined>;
}
