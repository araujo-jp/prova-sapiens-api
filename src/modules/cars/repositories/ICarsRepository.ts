import { ICreateCarDTO } from '../dtos/ICreateCarDTO';
import { Car } from '../infra/typeorm/entities/Car';

export interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  findByLicensePlate(license_plate: string): Promise<Car>;
  list(): Promise<Car[]>;
  deleteById(id: string): Promise<void>;
  findById(id: string): Promise<Car>;
}
