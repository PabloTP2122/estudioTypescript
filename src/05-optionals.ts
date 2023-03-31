// Los parametros opcionales tienen que ir al final

//Nullish-coalescing
export const createProduct = (
  id: string | number,
  isNew: boolean,
  stock?: number
) => {
  return {
    id,
    /* stock: stock || 0, */
    stock: stock ?? 0,
    isNew: isNew ?? false
  }
}

// Problemas al usar ||
// Si mando 0 === false
// Si mando '' === false
// false === false

// Por lo anterior es mejor usar
// el operador Nullish-coalescing ??

/* || evalua valores falsy (https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
?? evalua valores nullish (osea null y undefined) */

const p1 = createProduct(15, true, 12);
console.log(p1);
const p2 = createProduct(15, true);
console.log(p2);
