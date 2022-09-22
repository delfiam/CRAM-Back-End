import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Seguido {
  @PrimaryGeneratedColumn()
  IdSeguido: number; 

  @Column({name: 'IdUsuario', type: 'int'})
  IdUsuario: number;
}
