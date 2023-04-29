import { Body, Controller, Get, HttpException, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':username')
  async findOne(@Param('username') username: string) {
    const user = await this.userService.findOne(username);
    if(!user) throw new HttpException(`User ${username} not found`, 404);
    console.log(user);
    return user;
  }

  @Post()
  async createUser(@Body() data: CreateUserDto) {
    return await this.userService.create(data);
  }
}
