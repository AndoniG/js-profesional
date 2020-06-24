function add(a: number, b: number): number {
  return a + b;
}

const sum: number = add(3, 4);
console.log(sum);

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a;
  };
}

const addFour = createAdder(4);
const fourPlusSix = addFour(6);

// ? es opcional
function fullName(firstName?: string, lastName: string = "Doe"): string {
  return `${firstName} ${lastName}`;
}

const andoni = fullName("Andoni");
console.log(andoni);

// Interfaces
interface Rectangulo {
  ancho: number;
  alto: number;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);
