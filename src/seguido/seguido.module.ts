import { Module } from '@nestjs/common';
import { SeguidoService } from './seguido.service';
import { SeguidoController } from './seguido.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seguido } from './seguido.entity';

@Module({
  providers: [SeguidoService],
  controllers: [SeguidoController],
  imports: [TypeOrmModule.forFeature([Seguido])],
  exports: [SeguidoService],
})
export class SeguidoModule {}
