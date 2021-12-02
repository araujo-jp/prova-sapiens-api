import { inject, injectable } from 'tsyringe';

import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';

@injectable()
export class DeleteCarsUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository
  ) {}

  async execute(id: string): Promise<void> {
    await this.carsRepository.deleteById(id);
  }
}
