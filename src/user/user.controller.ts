import { Controller, Delete, Get, Patch, Param, Post, Req, Body,Query } from '@nestjs/common';
import { UserService } from './user.service';
import { updateUserDto } from './dto/updateUser.dto';
import { CreateUserDto } from './dto/createUser.dto';

@Controller()
export class UserController {
    constructor(private userService: UserService){}

    @Get()
    getUsers(@Query('form_title') formTitle: string) {
        return this.userService.getInfo(formTitle);
    }
  
    @Post('/form')
    postUser(@Body() createUserDto: CreateUserDto){
      return this.userService.create(createUserDto);
    }
  
    @Patch('/fill_data')
    updateUser(@Body() body: any, @Query('form_title') formTitle: string){
      return this.userService.update(body, formTitle);
    }
    
    @Get('/:userId')
    getUser(@Param() param:{ userId: number}){
      return this.userService.getUser(param.userId);
    }
  


    @Delete('/:userId')
    deleteUser(@Param() param:{userId: number}){
      this.userService.delete(param);
    }

}
