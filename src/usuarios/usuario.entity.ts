import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { hash, compare, genSalt } from 'bcryptjs'

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn('increment')
  IdUsuario: number; 

  @Column({name: 'Foto', type: 'text'})
  foto: string;

  @Column({name: 'Nombre', type: 'text'})
  nombre: string;

  @Column({name: 'Password', type: 'varchar'})
  password: string;

  @Column({name: 'Username', unique: true})
  username: string;

  @Column({name:'Mail', unique: true})
  mail: string;

}
