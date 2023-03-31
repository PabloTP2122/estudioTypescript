// Pablo => [P,a,b,l,o] => string => string[]
// [P,a,b,l,o] => Pablo => string[] => string


function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

const rtaArray = parseStr('Pablo');
// rtaArray.reverse();
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray', 'Pablo =>', rtaArray);

const rtaStr = parseStr(['P', 'a', 'b', 'l', 'o']);
// rtaStr.toLowerCase();
if (typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
}
console.log('rtaStr', "['P', 'a', 'b', 'l', 'o'] =>", rtaStr);
