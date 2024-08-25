// Truthy value: 'almas' 5, true, {}, []

// Falsy value: '', 0, false, null, undefined

//Here I am checking truthy
let myVar = 5;
if(myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
}

// Checking falsy negative or anything falsy

let myMoney = 50;
if(!myMoney){

}

const money = 80;
let food;
if(money > 100){
    food = 'biryani';
}
else{
    food = 'cha biscuit'
}

// shortcut likha k ternary bole

let food1 = money > 100 ? 'biryani' : 'cha biscuit';

console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
console.log(drink)

// number to string conversion
const num1 = 52;
console.log(num1);
const numStr = num1 + '';
console.log(numStr);
// kuno ekta number er sathe string jug korle sei number ta string hoye jay

// String to number a convert

const input = '560';
const inputNum = +input;
console.log(inputNum);

// ternary operator ta variable chara use kora hoy rokhon kuno kichu return kore nah
// direct execute hoy jay

let isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
isActive ? showUser() : hideUser();

// isActive true hoile && er porer ta edecute hobe otherwise hobe nah
// use && if the left side is true then right side will be executed
isActive && showUser();

// use || if the left side is false then right side will be executed
isActive || hideUser();

// toggle boolean kora: jodi true thake taile false hobe abar false thake true banabe
isActive = !isActive;
