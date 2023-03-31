// Los parametros opcionales también pueden ser definidos
// al inicializar la variable

export const createProduct = (
  id: string | number,
  // Los que siguen son parametros opcionales
  isNew: boolean = false,
  stock: number = 0
) => {
  return {
    id,
    stock: stock,
    isNew: isNew
  }
}

const p1 = createProduct(15, true, 12);
console.log(p1);
const p2 = createProduct(25, false);
console.log(p2);
const p3 = createProduct(5, true);
console.log(p3);
const p4 = createProduct(1);
console.log(p4);
const p5 = createProduct(9, true, 10);
console.log(p5);
