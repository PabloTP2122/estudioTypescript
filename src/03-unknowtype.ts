let anyVar: any;
anyVar = true;
anyVar = 1;
anyVar = null;
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar;
///*************************** */
let unknownVar: unknown;
anyVar = true;
anyVar = 1;
anyVar = null;
anyVar = [];
anyVar = {};

// unknownVar.doSomething();
// Si primero se hace una verificación de la variable
// Sí me permite utilizar métodos propios de ese tipo de dato
if (typeof unknownVar === 'string') {
  unknownVar.toUpperCase();
}

if (typeof unknownVar === 'boolean') {
  let isNewV2: boolean = unknownVar;
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}

