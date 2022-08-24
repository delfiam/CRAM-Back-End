import { PartialType } from "@nestjs/swagger";
import { IsEmail, MaxLength, MinLength, IsNotEmpty } from "class-validator";
import { LoginAuthDto } from "./login-auth.dto";
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()

export class RegisterAuthDto extends PartialType(LoginAuthDto){

    @Column({name: 'Nombre', type: 'text'})
    @IsNotEmpty()
    nombre: string

    @Column({name:'Mail', type: 'text'})
    @IsEmail()
    mail: string

    @Column({name:'Foto', type:'text'})
    foto: string

    @PrimaryGeneratedColumn({name: 'IdUsuario', type: 'int'})
    IdUsuario: number
    
} 