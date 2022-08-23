import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { hash, compare, genSalt } from 'bcryptjs'

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn('increment', {name: 'IdUsuario', type: 'int'})
  IdUsuario: number; 

  @Column({name: 'Foto', type: 'text'})
  foto: string;

  @Column({name: 'Nombre', type: 'varchar'})
  nombre: string;

  @Column({name: 'Password', type: 'varchar'})
  password: string;

  @Column({name: 'Username', unique: true, type: 'varchar'})
  username: string;

  @Column({name:'Mail', unique: true, type: 'varchar'})
  mail: string;

}
