import { Router } from 'express';

import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { ListCarsController } from '@modules/cars/useCases/listCars/ListCarsController';

const createCarsController = new CreateCarController();
const listCarsController = new ListCarsController();

const carsRouter = Router();

carsRouter.post('/', createCarsController.handle);

carsRouter.get('/', listCarsController.handle);

export { carsRouter };
