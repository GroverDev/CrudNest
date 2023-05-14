import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid} from 'uuid';

import { User } from './interfaces/user.interface';

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
}
