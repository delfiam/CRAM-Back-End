import { Controller, Body, Get, Post, Patch, Delete, Param, UseGuards } from '@nestjs/common';
import { FiltrosService } from './filtros.service';
import { Filtros } from './filtros.entity';

@Controller('filtros')
export class FiltrosController {
    constructor(private filtrosService: FiltrosService) { }

    @Get()
    getFiltros() {
        return this.filtrosService.getFiltros();
    }

    @Get(':id')
    getFiltroByID(@Param('id') id: number) {
        return this.filtrosService.getFiltroByID(id);
    }

    @Post()
    crearFiltros(@Body() filtros: Filtros) {
        return this.filtrosService.crearFiltros(filtros);
    }

    @Patch(':id')
    editarFiltros(@Param('id') id: number, @Body() filtros: Filtros) {
        return this.filtrosService.editarFiltros(id, filtros);
    }

    @Delete(':id')
    eliminarFiltros(@Param('id') id: number) {
        return this.filtrosService.eliminarFiltros(id);
    }
}
