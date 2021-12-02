import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCarUseCase } from './CreateCarUseCase';

export class CreateCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      model_name,
      description,
      license_plate,
      brand,
      year_manufactory,
      year_model,
      sale_price
    } = request.body;

    const createCarUseCase = container.resolve(CreateCarUseCase);

    const car = await createCarUseCase.execute({
      model_name,
      description,
      license_plate,
      brand,
      year_manufactory,
      year_model,
      sale_price
    });

    return response.status(201).json(car);
  }
}
