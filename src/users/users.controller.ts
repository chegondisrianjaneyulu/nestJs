import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor( private readonly userSerivice: UsersService){}

    @Get()
    findAll() {
        return this.userSerivice.findAll();
    }

    @Get(':id') 
    findOne(@Param('id') id: string ){
       return this.userSerivice.findOne(+id)
    }

    @Post()
    create(@Body() user: {id: number, username: string, email:string, first_name:string, last_name:string, created_at:string} ) {
        return this.userSerivice.create(user)
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() updateUser: {username?: string, email?:string, first_name?:string, last_name?:string, created_at?:string}) {
        return this.userSerivice.update(+id, updateUser)
    }

    @Delete(':id') 
    delete(@Param('id') id: string) {
        return this.userSerivice.delete(+id)
    }
}
