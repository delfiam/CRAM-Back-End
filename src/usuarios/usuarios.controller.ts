import { Controller, Body, Get, Post, Patch, Delete, Param, UseGuards } from '@nestjs/common';
import { UsuariosService } from './usuarios.service'
import { Usuario } from './usuario.entity'


@Controller('usuarios')
export class UsuariosController {
    constructor(private usuariosService: UsuariosService) { }

    @Get() 
    getUsuarios() {
        return this.usuariosService.getUsuarios();
    }


    @Get(':id') 
    getUsuarioByID(@Param('id') id: number) {
        return this.usuariosService.getUsuarioByID(id);
    }

    @Post() 
    crearUsuario(@Body() usuario: Usuario) {
        return this.usuariosService.crearUsuario(usuario);
    }

    @Patch(':id') 
    editarUsuario(@Param('id') id: number, @Body() usuario: Usuario) {
        return this.usuariosService.editarUsuario(id, usuario);
    }

    @Delete(':id')
    eliminarUsuario(@Param('id') id: number) {
        return this.usuariosService.eliminarUsuario(id);
    }


}
