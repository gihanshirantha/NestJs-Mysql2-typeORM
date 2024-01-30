import { Comment } from '../entities/comment.entity';
import { CreateCommentDto } from './create-comment.dto';
import { CreateListDto } from './create-list.dto';

export class CreateItemDto {
  name: string;
  price: number;
  listing: CreateListDto;
}
