import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, MaxLength, MinLength, IsNotEmpty } from "class-validator";

@Entity()

export class Review {

  @PrimaryGeneratedColumn()
  IdReview: number;

  @Column({name: 'Destacar', type: 'varchar'})
  @MaxLength(80)
  destacar: string; 

  @Column({name: 'Descripcion', type: 'text'})
  descripcion: string; 

  @Column({name: 'Puntaje', type:'int'})
  puntaje: number;

  @Column({name:'Comentarios', type: 'text'})
  comentarios: string;

  @Column({name:'IdUsuario', type: 'int'})
  idUsuario: number; 

  @Column ({name: 'IdLugar', type: 'int'})
  idLugar: string ;
  
  @Column({name: 'Titulo', type: 'varchar'})
  titulo: string;

}
