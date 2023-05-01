import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateOptionDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 255)
  text: string;

  @IsNotEmpty()
  questionId: number;

  @IsNotEmpty()
  isCorrect: boolean;
}
