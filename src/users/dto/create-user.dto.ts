import { IsString } from "class-validator";

export class CreateUserDto{
    
    @IsString({message:`El nombre de usuario es requerido`})
    readonly username: string;
    @IsString()
    readonly password: string;
    @IsString()
    readonly email: string;
}