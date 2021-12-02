import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateCarUseCase } from './UpdateCarUseCase';

export class UpdateCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const {
      model_name,
      description,
      license_plate,
      brand,
      year_manufactory,
      year_model,
      sale_price
    } = request.body;

    const updateCarUseCase = container.resolve(UpdateCarUseCase);

    const car = await updateCarUseCase.execute({
      id,
      model_name,
      description,
      brand,
      license_plate,
      sale_price,
      year_manufactory,
      year_model
    });

    return response.status(200).json(car);
  }
}
