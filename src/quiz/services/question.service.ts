import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from '../entities/question.entity';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
    @InjectRepository(Quiz)
    private quizRepository: Repository<Quiz>,
  ) {}

  async create(question: CreateQuestionDto, quiz: Quiz): Promise<Question> {
    const newQuestion = this.questionRepository.create({
      ...question,
      quiz: quiz,
    });
    await this.questionRepository.save(newQuestion);
    return newQuestion;
  }

  async findById(id: number) {
    return await this.questionRepository.findOne({
      where: { id },
      relations: ['options'],
    });
  }
}
