"use strict";
//type
var myname;
myname = "ttakkku";
// myname = 35;
var myage = 35;
// myage = '35';
var ishecome = false;
// ishecome = 'js';
var hisbag;
hisbag = 35;
hisbag = "ttakkku";
/**
 * @next https://www.youtube.com/watch?v=lmWufxmmLl8&list=PLlSZlNj22M7S1HmF3Vs8TJ2gUq_0xNN6-&index=5
 * TypeScript 005 Array
 */
//Array
var heroes = ["superman", "hulk"];
heroes = "50";
//Tuples
var classB = ["StUDENTS", 20];
classB = ["Teachers", 30];
console.log(classB[0]);
//enum
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 10] = "blue";
    Color[Color["yellow"] = 11] = "yellow";
})(Color || (Color = {}));
var color1 = Color.yellow;
console.log(color1);
//any
var batmancar = "K5";
console.log(batmancar);
batmancar = { maker: "KIT", manu: 2017 };
console.log(batmancar);
// function return types
function returnmyName() {
    return myname;
}
console.log(returnmyName());
// function argument types
function multiply(value1, valce2) {
    return valce2 * value1;
}
console.log(multiply(2, 4));
//function types
var sauer;
sauer = multiply;
var reulst = multiply(4, 6);
//sauer = returnmyName; 
console.log(reulst);
/**
 * @next https://www.youtube.com/watch?v=ybs3E1LYWNA&list=PLlSZlNj22M7S1HmF3Vs8TJ2gUq_0xNN6-&index=12
 * TypeScript 012 Object`s Type
 */ 
