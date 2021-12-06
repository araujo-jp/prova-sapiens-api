import { Router } from 'express';

import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { DeleteCarController } from '@modules/cars/useCases/deleteCar/DeleteCarController';
import { ListCarsController } from '@modules/cars/useCases/listCars/ListCarsController';
import { ShowCarController } from '@modules/cars/useCases/showCar/ShowCarController';
import { UpdateCarController } from '@modules/cars/useCases/updateCar/UpdateCarController';

const createCarsController = new CreateCarController();
const listCarsController = new ListCarsController();
const deleteCarController = new DeleteCarController();
const updateCarController = new UpdateCarController();
const showCarController = new ShowCarController();

const carsRouter = Router();

carsRouter.post('/', createCarsController.handle);

carsRouter.get('/', listCarsController.handle);

carsRouter.get('/:id', showCarController.handle);

carsRouter.delete('/:id', deleteCarController.handle);

carsRouter.patch('/:id', updateCarController.handle);

export { carsRouter };
