import { Module } from '@nestjs/common';
import { QuizService } from './services/quiz.service';
import { QuestionService } from './services/question.service';
import { OptionService } from './services/option.service';

@Module({
  controllers: [],
  providers: [QuizService, QuestionService, OptionService],
  imports: [],
  exports: [],
})
export class QuizModule {}
