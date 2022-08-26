import { IsNotEmpty } from "class-validator";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lista {
    @PrimaryGeneratedColumn()
    IdLista: number;
    
    @Column({ name: "Nombre", type: "text" })
    @IsNotEmpty()
    nombre: string;

    @Column({ name: "Descripcion", type: "text" })
    descripcion: string;

    @Column ({name: 'IdUsuario', type: 'int'})
    IdUsuario: number;
}