import { Repository } from 'typeorm';
import { Lugar } from './lugares.entity';
export declare class LugaresService {
    private lugares;
    constructor(lugares: Repository<Lugar>);
    getLugares(): Promise<Lugar[]>;
    getLugarById(id: string): Promise<Lugar>;
    getLugarFiltro(filtro: string): Promise<Lugar[]>;
    eliminarLugar(id: string): Promise<void>;
    crearLugar(lugar: Lugar): Promise<Lugar>;
    editarLugar(id: string, lugar: Lugar): Promise<void>;
}
