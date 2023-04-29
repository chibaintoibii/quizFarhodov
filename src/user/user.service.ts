import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './schemas/user.schema';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(username: string): Promise<User> {
    const user = this.usersRepository.findOneBy({ username });
    return user;
  }

  async create(data: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create({...data});
    await this.usersRepository.save(user);
    return user;
  }
}
