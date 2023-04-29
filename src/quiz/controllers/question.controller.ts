import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { QuestionService } from '../services/question.service';
import { QuizService } from '../services/quiz.service';
import { CreateQuestionDto } from '../dto/create-question.dto';

@Controller('question')
export class QuestionController {
  constructor(
    private questionService: QuestionService,
    private quizService: QuizService,
  ) {}

  @Post()
  async saveQuestion(@Body() question: CreateQuestionDto) {
    const quiz = await this.quizService.getById(question.quizId);
    if(!quiz){
        throw new HttpException('quiz not found', 404);
    }
    return await this.questionService.create(question, quiz);
  }
}
