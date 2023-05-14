import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateUserDto{
    
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString({message:`El nombre de usuario es requerido`})
    @IsOptional()
    readonly username: string;
    
    @IsString()
    @IsOptional()
    readonly password: string;

    @IsString()
    @IsOptional()
    readonly email: string;
}