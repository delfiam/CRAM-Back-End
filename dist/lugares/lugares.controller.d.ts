import { LugaresService } from './lugares.service';
import { Lugar } from './lugares.entity';
export declare class LugaresController {
    private lugaresService;
    constructor(lugaresService: LugaresService);
    GetLugares(Filtro: string): Promise<Lugar[]>;
    GetLugarById(id: string): Promise<Lugar>;
    CrearLugar(lugar: Lugar): Promise<Lugar>;
    EditarLugar(id: string, lugar: Lugar): Promise<void>;
    EliminarLugar(id: string): Promise<void>;
}
