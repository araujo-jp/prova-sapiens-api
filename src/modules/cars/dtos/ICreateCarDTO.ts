interface ICreateCarDTO {
  id?: string;
  model_name: string;
  description: string;
  license_plate: string;
  brand: string;
  year_manufactory: number;
  year_model: number;
  sale_price: number;
}

export { ICreateCarDTO };
