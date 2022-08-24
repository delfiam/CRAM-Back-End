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
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'MyNewPass', 
      database: 'cram',
      entities: [Usuario, Lugar, Review],
      synchronize: false,
    })
  ],

})
export class AppModule { }
