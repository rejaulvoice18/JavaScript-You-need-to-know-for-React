// 1. How to declare variable using let and const

const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';

// 2. conditions

// 6 basic conditions:  >, <, ===, !==, <=, >=
// multiple conditions: &&, || 

if(fatherName === 'Arnold'){

}
else if(fatherName === 'Arnold'){

}
else{

}

// 3. Array
// index
// length, push, 

const numbers = [89, 35, 98, 12];

// 4. For  loop

for(let i = 0; i < numbers.length; i++){
	const number = numbers[i];
console.log(number);
}

// 5. Function

function multiply(num1, num2){
	const result = num1 * num2;
	return result;
}

const output = multiply(35, 78);

// 6. Object
// 3 ways to access property by name

const student = {
	name: 'Sakib khan',
	age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

const myVariable = 'age'

console.log(student.age); // direct by property
console.log(student['age']) // access via property name string
console.log(student[myVariable]); // access via property name in a variable
