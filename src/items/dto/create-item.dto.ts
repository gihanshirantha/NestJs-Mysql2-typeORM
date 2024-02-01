import { Comment } from '../entities/comment.entity';
import { CreateCommentDto } from './create-comment.dto';
import { CreateListDto } from './create-list.dto';
import { CreateTagDto } from './create-tag.dto';
import { IsString, IsNotEmpty, MinLength, IsNumber } from 'class-validator';

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  listing: CreateListDto;

  tags: CreateTagDto[];
}
