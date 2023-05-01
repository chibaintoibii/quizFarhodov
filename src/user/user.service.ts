import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './schemas/user.schema';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(username: string): Promise<User> {
    const user = this.userRepository.findOneBy({ username });
    return user;
  }

  async create(data: CreateUserDto): Promise<User> {
    const user = this.userRepository.create({ ...data });
    await this.userRepository.save(user);
    return user;
  }
}
