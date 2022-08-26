import { Module } from '@nestjs/common';
import { ListaService } from './lista.service';

@Module({
  providers: [ListaService]
})
export class ListaModule {}
