import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Seguido {
  @PrimaryGeneratedColumn('increment')
  IdSeguido: number; 

  @Column({name: 'IdUsuario', type: 'int'})
  IdUsuario: number;
}
