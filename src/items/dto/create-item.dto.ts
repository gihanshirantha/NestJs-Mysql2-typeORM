import { Comment } from '../entities/comment.entity';
import { CreateCommentDto } from './create-comment.dto';
import { CreateListDto } from './create-list.dto';
import { CreateTagDto } from './create-tag.dto';

export class CreateItemDto {
  name: string;
  price: number;
  listing: CreateListDto;
  tags: CreateTagDto[];
}
