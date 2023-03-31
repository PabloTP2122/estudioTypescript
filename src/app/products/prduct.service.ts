import { Product } from './product.model'
import { createProductDto, UpdateProductDto, FindProductDto } from './product.dto';
//Para simular la API
import { faker } from './../../../node_modules/@faker-js/faker/';

export const products: Product[] = [];

export const addProduct = (data: createProductDto): Product => {
  // Simulando lo que nos entregaría la base de datos a travez de la API
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createAt: faker.date.recent(),
    updateAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createAt: faker.date.recent(),
      updateAt: faker.date.recent(),
    }
  }
  products.push(newProduct);
  return newProduct;
}

export const updateProduct = (id: Product['id'], changes: UpdateProductDto) => {
  const index = products.findIndex(product => product.id === id);
  const prevData = products[index];
  products[index] = {
    // Merge de datos antiguos
    ...prevData,
    // Con cambios actuales
    ...changes
  }
  return products[index];
}

export const findProducts = (dto: FindProductDto): Product[] => {

  return products;
}

export const readProduct = (data: Product) => {
  products.push(data);
}

export const deleteProduct = (id: string, data: Product) => {
  products.push(data);
}
