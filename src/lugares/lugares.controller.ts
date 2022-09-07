import { Controller, Body, Get, Post, Patch, Delete, Param, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { LugaresService } from './lugares.service';
import {Lugar} from './lugares.entity'
@Controller('lugares')
export class LugaresController {
    constructor(private lugaresService: LugaresService) { }

    @Get() // localhost:3000/Lugares
    @ApiQuery({name: 'filtros', required: false, type: String})

    
    GetLugares( 
        @Query('filtros') Filtro: string,
    ) {
        if (Filtro !== null){
            return this.lugaresService.getLugarFiltro(Filtro)
        }
        else{
            return this.lugaresService.getLugares()
        }
        
    }

    @Get(':id') // localhost:3000/Lugares/1
    GetLugarById(@Param('id') id: string) {
        return this.lugaresService.getLugarById(id);
    }
    

    @Post() // localhost:3000/Lugares
    CrearLugar(@Body() lugar: Lugar) {
        return this.lugaresService.crearLugar(lugar);
    }

    @Patch(':id') // localhost:3000/Lugares/1
    EditarLugar(@Param('id') id: string, @Body() lugar: Lugar) {
        return this.lugaresService.editarLugar(id, lugar);
    }

    @Delete(':id') // localhost:3000/Lugares/1
    EliminarLugar(@Param('id') id: string) {
        return this.lugaresService.eliminarLugar(id);
    }

}
