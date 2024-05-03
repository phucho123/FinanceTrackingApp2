/* eslint-disable prettier/prettier */
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}
    @Get()
    async getAllUsers():Promise<User[]>{
        return this.userService.findAll();

    }

    @Get("/:id")
    async getUserById(@Param('id') id:string):Promise<User>{
        
        return this.userService.findById(id);

    }
    @Post("new")
    async createUser(
        @Body()
         user:CreateUserDto ,
):Promise<User>{
        return this.userService.create(user)

    }
    @Put(":id")
    async updateUser(
        @Param('id') id:string,
        @Body()
         user:UpdateUserDto,
):Promise<User>{
        return this.userService.updateById(id,user)

    }

    @Delete(":id")
    async deleteUser(
        @Param('id') id:string,
        
):Promise<User>{
        return this.userService.deleteById(id)

    }


}
