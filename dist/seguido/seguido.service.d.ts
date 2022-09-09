import { Seguido } from './seguido.entity';
import { Repository } from 'typeorm';
export declare class SeguidoService {
    private seguidos;
    constructor(seguidos: Repository<Seguido>);
    getSeguidores(id: number): Promise<Seguido[]>;
    getSeguidos(id: number): Promise<Seguido[]>;
    seguir(seguido: Seguido): Promise<Seguido>;
    dejarDeSeguir(seguido: Seguido): Promise<void>;
}
