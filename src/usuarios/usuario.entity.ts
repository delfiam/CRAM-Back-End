import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { hash, compare, genSalt } from 'bcryptjs'
import { IsEmail, IsNotEmpty } from 'class-validator';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn('increment', {name: 'IdUsuario', type: 'int'})
  IdUsuario: number; 

  @Column({name: 'Foto', type: 'text'})
  foto: string;

  @Column({name: 'Nombre', type: 'varchar'})
  nombre: string;

  @Column({name: 'Password', type: 'longtext'})
  @IsNotEmpty()
  password: string;

  @Column({name: 'Username', unique: true, type: 'varchar'})
  @IsNotEmpty()
  username: string;

  @Column({name:'Mail', unique: true, type: 'varchar'})
  @IsEmail()
  mail: string;

}
