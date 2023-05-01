import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Option } from '../entities/option.entity';
import { Repository } from 'typeorm';
import { Question } from '../entities/question.entity';
import { CreateOptionDto } from '../dto/create-option.dto';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(Option)
    private optionRepository: Repository<Option>,
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  async create(option: CreateOptionDto, question: Question): Promise<Option> {
    console.log(option);
    const newOption = this.optionRepository.create({
      ...option,
      question,
    });

    await this.optionRepository.save(newOption);
    return newOption;
  }
}
