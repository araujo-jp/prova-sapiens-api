import { Router } from 'express';

import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { DeleteCarController } from '@modules/cars/useCases/deleteCar/DeleteCarController';
import { ListCarsController } from '@modules/cars/useCases/listCars/ListCarsController';

const createCarsController = new CreateCarController();
const listCarsController = new ListCarsController();
const deleteCarController = new DeleteCarController();

const carsRouter = Router();

carsRouter.post('/', createCarsController.handle);

carsRouter.get('/', listCarsController.handle);

carsRouter.post('/:id', deleteCarController.handle);

export { carsRouter };
