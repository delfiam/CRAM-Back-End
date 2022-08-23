import { Entity, Column, PrimaryGeneratedColumn,  } from 'typeorm';
@Entity()
export class Lugar {
  @Column({name: 'IdLugar', type: 'text'})
  IdLugar: string;

  @Column({name : 'nombre', type:'varchar'})
  
  nombre: string;

  @Column({name: 'Descripcion', type:'text'})
  description: string;

}

