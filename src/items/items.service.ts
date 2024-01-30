import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { EntityManager, Repository } from 'typeorm';
import { Item } from './entities/item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Listing } from './entities/list.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private readonly itemsRepository: Repository<Item>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createItemDto: CreateItemDto) {
    const listing = new Listing({
      ...createItemDto.listing,
      ratings: 0,
    });
    const item = new Item({ ...createItemDto, listing });
    await this.entityManager.save(item);
  }

  findAll() {
    return this.itemsRepository.find();
  }

  async findOne(id: number) {
    return this.itemsRepository.findOne({
      where: { id },
      relations: { listing: true },
    });
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    const item = await this.itemsRepository.findOneBy({ id });
    item.name = updateItemDto.name;
    await this.entityManager.save(item);
  }

  remove(id: number) {
    return this.itemsRepository.delete(id);
  }
}
