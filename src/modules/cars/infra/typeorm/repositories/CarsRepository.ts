import { ICreateCarDTO } from 'modules/cars/dtos/ICreateCarDTO';
import { ICarsRepository } from 'modules/cars/repositories/ICarsRepository';
import { getRepository, Repository } from 'typeorm';

import { Car } from '../entities/Car';

export class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = getRepository(Car);
  }

  async create({
    id,
    model_name,
    description,
    brand,
    license_plate,
    year_manufactory,
    year_model,
    sale_price
  }: ICreateCarDTO): Promise<Car> {
    const car = this.repository.create({
      id,
      model_name,
      description,
      license_plate,
      brand,
      year_manufactory,
      year_model,
      sale_price
    });

    await this.repository.save(car);

    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = await this.repository.findOne({ license_plate });

    return car;
  }

  async list(): Promise<Car[]> {
    const cars = await this.repository.find();

    return cars;
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete({ id });
  }

  async findById(id: string): Promise<Car> {
    const car = await this.repository.findOne({ id });

    return car;
  }
}
