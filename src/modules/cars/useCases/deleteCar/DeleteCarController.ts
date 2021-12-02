import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteCarsUseCase } from './DeleteCarUseCase';

export class DeleteCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteCarUseCase = container.resolve(DeleteCarsUseCase);

    await deleteCarUseCase.execute(id);

    return response.status(200).send();
  }
}
