import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('cars')
export class Car {
  @PrimaryColumn()
  id?: string;

  @Column()
  model_name: string;

  @Column()
  description: string;

  @Column()
  license_plate: string;

  @Column()
  brand: string;

  @Column()
  year_manufactory: number;

  @Column()
  year_model: number;

  @Column()
  sale_price: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
