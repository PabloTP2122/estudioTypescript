// Utilizado para funciones que se sabe que nunca va a terminar.
// Ejemplo un ciclo infinito.
// never indica que potencialmente el programa se puede detener
const withoutEnd = () => {
  while (true) {
    console.log('Nunca parar de aprender');
  }
}

const fail = (message: string) => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'Es un string'
  } else if (Array.isArray(input)) {
    return 'Es un array'
  }
  return fail('No match');
}

console.log(example('Quiubo'));
console.log(example([1, 1, 1, 5]));
console.log(example(1)); //Aquí se detiene el programa
console.log(example('Hola después de fail'));

