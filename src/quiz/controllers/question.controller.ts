import { Body, Controller, Get, HttpException, Param, ParseIntPipe, Post } from '@nestjs/common';
import { QuestionService } from '../services/question.service';
import { QuizService } from '../services/quiz.service';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { Question } from '../entities/question.entity';

@Controller('question')
export class QuestionController {
  constructor(
    private questionService: QuestionService,
    private quizService: QuizService,
  ) {}

  @Post()
  async saveQuestion(@Body() dataDto: CreateQuestionDto): Promise<Question> {
    const quiz = await this.quizService.getById(dataDto.quizId);
    if (!quiz) {
      throw new HttpException('quiz not found', 404);
    }
    return await this.questionService.create(dataDto, quiz);
  }

  @Get(':id')
  async getQuestionById(@Param('id', ParseIntPipe) id: number) {
    return await this.questionService.findById(id);
  }
}
