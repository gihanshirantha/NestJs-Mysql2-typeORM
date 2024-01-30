import { CreateListDto } from './create-list.dto';

export class CreateItemDto {
  name: string;
  price: number;
  listing: CreateListDto;
}
