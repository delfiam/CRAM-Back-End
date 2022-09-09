import { Seguido } from './seguido.entity';
import { SeguidoService } from './seguido.service';
export declare class SeguidoController {
    private seguidosService;
    constructor(seguidosService: SeguidoService);
    getSeguidos(id: number): Promise<Seguido[]>;
    getSeguidores(id: number): Promise<Seguido[]>;
    seguir(seguido: Seguido): Promise<Seguido>;
    dejarDeSeguir(seguido: Seguido): Promise<void>;
}
