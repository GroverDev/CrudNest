import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService
    ){}

    @Get()
    getAllUsers(){
        return this.usersService.findAll();
    }

    @Get(':id')
    getUserById( @Param('id', ParseUUIDPipe) id: string){
        return this.usersService.findUserById(id);
    }

    @Post()
    createUser(@Body() body: any){
        return body;
    }

    @Put(':id')
    updateUser(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: any){
        return body;
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number){
        return { ok: true};
    }
}
