import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LugarModule } from './lugares/lugares.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Usuario } from './usuarios/usuario.entity';
import { Lugar } from './lugares/lugares.entity';
import { Review } from './reviews/Reviews.entity';
import { ReviewModule } from './reviews/Reviews.module';
import { AuthModule } from './auth/auth.module';
import { SeguidoModule } from './seguido/seguido.module';
import { Seguido } from './seguido/seguido.entity';
import { FiltrosController } from './filtros/filtros.controller';
import { FiltrosService } from './filtros/filtros.service';
import { FiltrosModule } from './filtros/filtros.module';
import { ListaController } from './lista/lista.controller';
import { ListaModule } from './lista/lista.module';
import { ListaController } from './lista/lista.controller';

@Module({
  providers: [AppService, FiltrosService],
  controllers: [AppController, FiltrosController, ListaController],
  imports: [
    LugarModule,
    UsuariosModule,
    ReviewModule,
    SeguidoModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'password', 
      database: 'CRAM',
      entities: [Usuario, Lugar, Review, Seguido],
      synchronize: false,
    }),
    FiltrosModule,
    ListaModule
  ],

})
export class AppModule { }
