import { IsNotEmpty, IsString, Length } from "class-validator";


export class CreateQuestionDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 255)
  question: string;

  @IsNotEmpty()
  quizId: number;
}