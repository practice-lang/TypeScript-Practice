//type
let myname:string; 
myname= "ttakkku";
// myname = 35;

let myage = 35;
// myage = '35';

let ishecome = false;
// ishecome = 'js';

let hisbag: any;
hisbag = 35;
hisbag = "ttakkku";

/**
 * @next https://www.youtube.com/watch?v=lmWufxmmLl8&list=PLlSZlNj22M7S1HmF3Vs8TJ2gUq_0xNN6-&index=5
 * TypeScript 005 Array
 */

//Array
let heroes:any = ["superman", "hulk"];
heroes = "50";

//Tuples
let classB:[string, number] = ["StUDENTS", 20];
classB = ["Teachers", 30];
console.log(classB[0]);

//enum
enum Color {
    red,
    blue = 10,
    yellow
}

let color1 = Color.yellow;
console.log(color1);

//any
let batmancar:any = "K5";
console.log(batmancar);

batmancar = {maker: "KIT", manu: 2017};
console.log(batmancar);

// function return types
function returnmyName(): string {
    return myname;
}
console.log(returnmyName());

// function argument types
function multiply(value1: number, valce2: number): number{
    return valce2 * value1;
}

console.log(multiply(2, 4));

//function types
let sauer: (a: number, b: number) => number;

sauer = multiply;
let reulst = multiply(4, 6);
//sauer = returnmyName; 
console.log(reulst);

/**
 * @next https://www.youtube.com/watch?v=ybs3E1LYWNA&list=PLlSZlNj22M7S1HmF3Vs8TJ2gUq_0xNN6-&index=12
 * TypeScript 012 Object`s Type
 */