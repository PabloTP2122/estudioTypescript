import { Product } from './product.model';
// Utility types - Omit y
// Pick Type Opuesto de Omit

export interface createProductDto extends Omit<Product, 'id' | 'createAt' | 'updateAt' | 'category'> {
  categoryId: string
}

// Solo me quedo con los datos que selecciono
type exaple = Pick<Product, 'color' | 'description'>

// Partial type para update
export interface UpdateProductDto extends Partial<createProductDto> {
}

// Required type
type example2 = Required<Product>;

// Find
export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
  //No me permitira utilizar métodos mutables
  readonly tags?: ReadonlyArray<string>;
}
