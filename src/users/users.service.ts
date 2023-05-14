import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid} from 'uuid';

import { User } from './interfaces/user.interface';
import { CreateUserDto, UpdateUserDto } from './dto';


@Injectable()
export class UsersService {

    private users: User[] = [
        {
            id: uuid(),
            username: 'grover',
            password: '123',
            email: 'grover.penafiel@gmail.com'
        },
        {   
            id: uuid(),
            username: 'americo',
            password: '123',
            email: 'americo.penafiel@gmail.com'
        }
    ];

    findAll(){
        return this.users;
    }

    findUserById(id: string){

        const user = this.users.find(usr => usr.id === id);

        if(!user) throw new NotFoundException(`No existe el usuario con id: ${id}`);
        
        return user;
    }

    createUser( createUserDto: CreateUserDto){

        const user: User ={
            id: uuid(),
            ...createUserDto
        };

        this.users.push(user);
        return user;
    }

    updateUser(id: string, updateUserDto: UpdateUserDto){

        if(updateUserDto.id && updateUserDto.id !== id)
            throw new BadRequestException(`El id del usuario no es valido`);

        let userDB = this.findUserById(id);

        this.users = this.users.map( user => {
            if(user.id === id){
                userDB = {
                    ...userDB,
                    ...updateUserDto,
                    id
                }
                return userDB;
            }

            return user;
        });

        return userDB;

    }

    deleteUser(id: string){
        const user = this.findUserById(id);

        this.users = this.users.filter( user => user.id !== id);
    }
}
