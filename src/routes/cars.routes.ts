import { Router } from 'express';

import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';

const createCarsController = new CreateCarController();

const carsRouter = Router();

carsRouter.post('/', createCarsController.handle);

export { carsRouter };
