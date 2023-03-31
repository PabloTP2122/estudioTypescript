//Array fuertemente tipado
const prices: number[] = [1, 2, 3, 4, 5, 6];

//Tupla fuertemente tipada
// Limita el número de elementos y la posición según el tipo
let user: [string, number, boolean];
user = ['pabloTP', 29, true];

//Destructuración de una tupla
const [username, age] = user;
console.log(username);
console.log(age);
