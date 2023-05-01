import { Module } from '@nestjs/common';
import { QuizService } from './services/quiz.service';
import { QuestionService } from './services/question.service';
import { OptionService } from './services/option.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { Question } from './entities/question.entity';
import { Option } from './entities/option.entity';
import { QuizController } from './controllers/quiz.controller';
import { QuestionController } from './controllers/question.controller';
import { OptionsController } from './controllers/option.controller';

@Module({
  controllers: [QuizController, QuestionController, OptionsController],
  providers: [QuizService, QuestionService, OptionService],
  imports: [TypeOrmModule.forFeature([Quiz, Option, Question])],
})
export class QuizModule {}
