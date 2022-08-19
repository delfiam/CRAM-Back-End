 import { MinLength, MaxLength, IsNotEmpty } from "class-validator";
import { Entity, Column } from 'typeorm';

@Entity()
export class LoginAuthDto{

    @Column({name: 'Username', type: 'varchar'})

    username: string
    
    @Column({name: 'Password', type: 'varchar'})
    @MinLength(4)
    password: string


} 