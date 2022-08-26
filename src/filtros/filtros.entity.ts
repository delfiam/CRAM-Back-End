import { IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Filtros {
  @PrimaryGeneratedColumn()
  IdFiltros: number;

  @Column({name : 'Nombre', type:'text'})
  @IsNotEmpty()
  nombre: string;

  @Column({name: 'IdLugar', type: 'varchar'})
    IdLugar: number;

}