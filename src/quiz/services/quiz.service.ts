import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quiz } from '../entities/quiz.entity';
import { CreateQuizDto } from '../dto/create-quiz.dto';

@Injectable()
export class QuizService {
  constructor(@InjectRepository(Quiz) private quizRepository: Repository<Quiz>) {}

  async getAll(): Promise<Quiz[]>{
    return this.quizRepository
      .createQueryBuilder('q')
      .leftJoinAndSelect('q.questions', 'qt')
      .getMany();
  }

  async create(quiz: CreateQuizDto){
    return this.quizRepository.create(quiz);
  }

  async getById(id: number): Promise<Quiz>{
    return this.quizRepository.findOneBy({id});
  }
}
