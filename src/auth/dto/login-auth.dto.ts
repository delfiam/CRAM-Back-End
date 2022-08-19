 import { MinLength, MaxLength, IsNotEmpty } from "class-validator";
import { Entity, Column } from 'typeorm';

@Entity()
export class LoginAuthDto{

    @Column({name: 'Username', type: 'varchar', length: 20})

    username: string
    
    @Column({name: 'Password', type: 'varchar', length: 50})
    @MinLength(4)
    password: string


} 