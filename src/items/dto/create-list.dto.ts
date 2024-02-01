import { IsString, IsNotEmpty, MinLength, IsNumber } from 'class-validator';

export class CreateListDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  ratings: number;
}
