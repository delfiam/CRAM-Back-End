import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Seguido {
  @PrimaryColumn({ primary: false })
  IdSeguido: number; 

  @Column({name: 'IdUsuario', type: 'int'})
  IdUsuario: number;
}
