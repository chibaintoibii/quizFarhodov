import { Body, Controller, Post } from '@nestjs/common';
import { OptionService } from '../services/option.service';
import { QuestionService } from '../services/question.service';
import { CreateOptionDto } from '../dto/create-option.dto';
@Controller('question/option')
export class OptionsController {
  constructor(
    private optionService: OptionService,
    private questionService: QuestionService,
  ) {}

  @Post()
  async saveOptionToQuestion(@Body() dataDto: CreateOptionDto) {
    const question = await this.questionService.findById(dataDto.questionId);
    const option = await this.optionService.create(dataDto, question);
    return { question, dataDto, option };
  }
}
