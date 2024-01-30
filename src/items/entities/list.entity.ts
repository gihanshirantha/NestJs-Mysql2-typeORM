import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Listing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  ratings: number;

  constructor(listing: Partial<Listing>) {
    Object.assign(this, listing);
  }
}
