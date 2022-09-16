import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LugarModule } from './lugares/lugares.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Usuario } from './usuarios/usuario.entity';
import { Lugar } from './lugares/lugares.entity';
import { Review } from './reviews/reviews.entity';
import { ReviewModule } from './reviews/reviews.module';
import { AuthModule } from './auth/auth.module';
import { SeguidoModule } from './seguido/seguido.module';
import { Seguido } from './seguido/seguido.entity';
import { LugaresService } from './lugares/lugares.service';
import { LugaresController } from './lugares/lugares.controller';
import { UsuariosService } from './usuarios/usuarios.service';
import { UsuariosController } from './usuarios/usuarios.controller';
import { SeguidoController } from './seguido/seguido.controller';
import { SeguidoService } from './seguido/seguido.service';
import { ReviewsService } from './reviews/reviews.service';
import { ReviewsController } from './reviews/reviews.controller';
import { readFileSync } from 'fs';


@Module({
  providers: [LugaresService, UsuariosService, SeguidoService, ReviewsService],
  controllers: [LugaresController, UsuariosController, SeguidoController, ReviewsController],
  imports: [
    LugarModule,
    UsuariosModule,
    ReviewModule,
    SeguidoModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'cram.mysql.database.azure.com',
      port: 3306,
      username: 'cramDB',
      password: 'SofDelf7#', 
      database: 'cram',
      entities: [Usuario, Lugar, Review, Seguido],
      synchronize: false,
      ssl:{
        rejectUnauthorized: false,
        ca: readFileSync('DigiCertGlobalRootG2.crt.pem').toString()
      }
    }),
  ],

})
export class AppModule { }
