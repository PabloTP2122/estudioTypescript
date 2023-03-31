//
type Sizes = 'S' | 'M' | 'L' | 'XL';

interface Product {
  id: string | number;
  title: string;
  createAt: string;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: '1',
  title: 'Product 1',
  createAt: '',
  stock: 150,
});

const addProduct = (data: Product) => {
  products.push(data);
}
