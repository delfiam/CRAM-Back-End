import { Controller, Body, Get, Post, Delete, Param, UseGuards } from '@nestjs/common';
import { Seguido } from './seguido.entity';

import { SeguidoService } from './seguido.service';

@Controller('seguido')
export class SeguidoController {
    constructor(private seguidosService: SeguidoService) { }

    @Get(':id') 
    getSeguidos(@Param('id') id: number) {
        return this.seguidosService.getSeguidos(id);
    } 

    @Get(':id') 
    getSeguidores(@Param('id') id: number) {
        return this.seguidosService.getSeguidores(id);
    }

    @Post() 
    seguir(@Body() seguido: Seguido) {
        return this.seguidosService.seguir(seguido);
    }


    @Delete(':id')
    dejarDeSeguir(@Param('id') id: number) {
        return this.seguidosService.dejarDeSeguir(id);
    }


}
