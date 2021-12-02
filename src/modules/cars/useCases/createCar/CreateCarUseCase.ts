import { inject, injectable } from 'tsyringe';

import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  model_name: string;
  description: string;
  license_plate: string;
  brand: string;
  year_manufactory: number;
  year_model: number;
  sale_price: number;
}

@injectable()
export class CreateCarUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository
  ) {}

  async execute({
    model_name,
    description,
    license_plate,
    brand,
    year_manufactory,
    year_model,
    sale_price
  }: IRequest) {
    const carAlreadyExists = await this.carsRepository.findByLicensePlate(
      license_plate
    );

    if (carAlreadyExists) {
      throw new AppError('Car already exists');
    }

    const car = await this.carsRepository.create({
      model_name,
      description,
      license_plate,
      brand,
      year_manufactory,
      year_model,
      sale_price
    });

    return car;
  }
}
