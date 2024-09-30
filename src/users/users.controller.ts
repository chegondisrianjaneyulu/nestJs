import { Body, Controller, Delete, Get, Param, Patch, Post, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user-dto';

@Controller('users')
export class UsersController {
    constructor( private readonly userSerivice: UsersService){}
    
    @Get()
    findAll() {
        return this.userSerivice.findAll();
    }

    @Get(':id') 
    findOne(@Param('id', ParseIntPipe) id: number ){
       return this.userSerivice.findOne(id)
    }

    @Post()
    create(@Body(ValidationPipe) user: CreateUserDto ) {
        return this.userSerivice.create(user)
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id:number, @Body(ValidationPipe) updateUser: UpdateUserDto) {
        return this.userSerivice.update(id, updateUser)
    }

    @Delete(':id') 
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.userSerivice.delete(id)
    }
}
