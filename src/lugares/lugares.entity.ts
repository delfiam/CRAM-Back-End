import { IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn,  } from 'typeorm';
@Entity()
export class Lugar {
  @PrimaryGeneratedColumn()
  IdLugar: string;

  @Column({name : 'nombre', type:'text'})
  @IsNotEmpty()
  nombre: string;


  @Column({name: 'Descripcion', type:'text'})
  description: string;

  @Column({name: 'Filtros', type:'text'})
  filtros: string;

}