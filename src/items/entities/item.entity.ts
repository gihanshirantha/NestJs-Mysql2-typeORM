import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Listing } from './list.entity';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;
  public: any;

  @OneToOne(() => Listing, { cascade: true })
  @JoinColumn()
  listing: Listing;

  constructor(item: Partial<Item>) {
    Object.assign(this, item);
  }
}
