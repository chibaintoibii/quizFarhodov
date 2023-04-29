import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { Quiz } from '../entities/quiz.entity';
import { CreateQuizDto } from '../dto/create-quiz.dto';

@Controller('quizes')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Get()
  async getAllQuizes(): Promise<Quiz[]> {
    return this.quizService.getAll();
  }

  @Post()
  async createQuiz(@Body() quizData: CreateQuizDto): Promise<Quiz> {
    return await this.quizService.create(quizData);
  }

  @Get(':id')
  async getQuizById(@Param('id', ParseIntPipe) id: number): Promise<Quiz>{
    return await this.getQuizById(id);
  }
}
