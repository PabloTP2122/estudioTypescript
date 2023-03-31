// Pablo => [P,a,b,l,o] => string => string[]
// [P,a,b,l,o] => Pablo => string[] => string

// Sobrecarga de funciones o métodos
// El export solo se hizo porque hay otro documento en el que
// las funciones se llaman igual, al hacer export, typescript asume
// que solo se utilizará con imports
export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

/* export function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
} */
export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'string') {
    return input.split(''); // string[]
  } else if (typeof input === 'number') {
    return true; // boolean
  }
}
const rtaArray = parseStr('Pablo');
// Aquí ya no se requiere la comprobación del tipo
// porque ya lo puede inferir typescript gracias a
// la sobrecarga de funciones de arriba

rtaArray.reverse();
/* if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
} */
console.log('rtaArray', 'Pablo =>', rtaArray);

const rtaStr = parseStr(['P', 'a', 'b', 'l', 'o']);
rtaStr.toLowerCase();
/* if (typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
} */
console.log('rtaStr', "['P', 'a', 'b', 'l', 'o'] =>", rtaStr);
const rtaBoolean = parseStr(12);
