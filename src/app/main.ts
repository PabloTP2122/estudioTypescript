import { faker } from './../../node_modules/@faker-js/faker/';
import { addProduct, products, updateProduct, findProducts } from './products/prduct.service';

for (let index = 0; index < 50; index++) {
  addProduct({
    /* id: faker.datatype.uuid(), */
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    title: faker.commerce.productName(),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElement(),
    size: faker.helpers.arrayElement(['M', 'S', 'XL', 'L']),
    /* createAt: faker.date.recent(),
    updateAt: faker.date.recent(), */
    stock: faker.datatype.number({ min: 10, max: 100 }),
    categoryId: faker.datatype.uuid(),
    /* category: {
      id: faker.datatype.uuid(),
      createAt: faker.date.recent(),
      updateAt: faker.date.recent(),
      name: faker.commerce.department()
    } */
  })
}

console.log(products);
const product = products[0];

updateProduct(product.id, {
  title: 'Nuevo título',
  stock: 80,
});

findProducts(
  {
    stock: 10,
  }
);

