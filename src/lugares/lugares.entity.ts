import { IsNotEmpty } from 'class-validator';
import { Entity, Column, PrimaryColumn  } from 'typeorm';

@Entity()

export class Lugar {

  @PrimaryColumn()
  @Column({name: 'IdLugar', type: 'text'})
  IdLugar: string;

  @Column({name: 'Nombre', type: 'varchar'})
  @IsNotEmpty()
  nombre: string;

  @Column({name: 'Descripcion', type:'text'})
  description: string;

}

