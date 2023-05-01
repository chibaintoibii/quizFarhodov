import { Body, Controller, HttpException, Post } from '@nestjs/common';
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
    if (!question) {
      throw new HttpException('question not found', 404);
    }
    return await this.optionService.create(dataDto, question);
  }
}
