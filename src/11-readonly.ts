const numbers: number[] = [1, 2, 3, 4];

numbers.push(9);
numbers.pop();
numbers.unshift(1);

const numb: ReadonlyArray<number> = numbers.concat(5);
// No me dejaría hacer mutaciones por el tipado ReadonlyArray
/* num.push(9);
num.pop();
num.unshift(1); */
numb.map(element => element.toString);

