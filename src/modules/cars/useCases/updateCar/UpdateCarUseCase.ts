import { inject, injectable } from 'tsyringe';

import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  id: string;
  model_name: string;
  description: string;
  license_plate: string;
  brand: string;
  year_manufactory: number;
  year_model: number;
  sale_price: number;
}

@injectable()
export class UpdateCarUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository
  ) {}

  async execute({
    id,
    model_name,
    description,
    brand,
    license_plate,
    sale_price,
    year_manufactory,
    year_model
  }: IRequest): Promise<Car> {
    const car = await this.carsRepository.findById(id);

    if (!car) {
      throw new AppError('Car does not exist');
    }

    car.model_name = model_name;
    car.description = description;
    car.brand = brand;
    car.license_plate = license_plate;
    car.sale_price = sale_price;
    car.year_manufactory = year_manufactory;
    car.year_model = year_model;

    const carUpdate = await this.carsRepository.create(car);

    return carUpdate;
  }
}
