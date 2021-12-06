import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowCarUseCase } from './ShowCarUseCase';

export class ShowCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const showCarUseCase = container.resolve(ShowCarUseCase);

    const car = await showCarUseCase.execute(id);

    return response.status(200).json(car);
  }
}
