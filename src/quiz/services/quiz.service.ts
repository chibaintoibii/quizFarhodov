import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quiz } from '../entities/quiz.entity';
import { CreateQuizDto } from '../dto/create-quiz.dto';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private quizRepository: Repository<Quiz>,
  ) {}

  async getAll(): Promise<Quiz[]> {
    return this.quizRepository.find({
      where: {},
      relations: ['questions', 'questions.options']
    })
  }

  async create(quizDto: CreateQuizDto): Promise<Quiz> {
    const quiz = this.quizRepository.create({ ...quizDto });
    await this.quizRepository.save(quiz);
    return quiz;
  }

  async getById(id: number): Promise<Quiz> {
    return this.quizRepository.findOneBy({ id });
  } 
}
