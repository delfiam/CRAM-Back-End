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
import { readFileSync } from 'fs';


@Module({
  providers: [AppService],
  controllers: [AppController],
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
