import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Filtros } from './filtros.entity';

@Injectable()
export class FiltrosService {

    constructor(
        @InjectRepository(Filtros)
        private filtros:Repository<Filtros>
    ) { }

    getFiltros(): Promise<Filtros[]> {
        return this.filtros.find();
    }

    getFiltroByID(id: number): Promise<Filtros> {
        return this.filtros.findOneBy({IdFiltros: id});
    }

    async eliminarFiltros(id: number): Promise<void> {
        await this.filtros.delete({IdFiltros: id});
    }

    crearFiltros(filtros: Filtros): Promise<Filtros> {
        return this.filtros.save(filtros);
    }

    async editarFiltros(id: number, filtros: Filtros): Promise<void> {
        await this.filtros.update({IdFiltros: id}, filtros);
    }
}
