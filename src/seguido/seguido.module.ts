import { Module } from '@nestjs/common';
import { SeguidoService } from './seguido.service';
import { SeguidoController } from './seguido.controller';

@Module({
  providers: [SeguidoService],
  controllers: [SeguidoController]
})
export class SeguidoModule {}
