import { Module } from '@nestjs/common';
import { FiltrosService } from './filtros.service';
import { Filtros } from './filtros.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FiltrosController } from './filtros.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Filtros])],
    providers: [FiltrosService],
    controllers: [FiltrosController],
})

export class FiltrosModule {}
