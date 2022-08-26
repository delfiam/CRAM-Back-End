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
  descripcion: string;

  @Column({name: 'Filtros', type:'text'})
  filtros: string;

  @Column({name: 'AgregadoALista', type: 'tinytext'})
    agregadoLista: boolean;

}