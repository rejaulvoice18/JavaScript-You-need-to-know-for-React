// 1. array destructuring

const numbers = [42, 65];

// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65];

const [x, y] = numbers;

console.log(x,y);

function boxIfy(num1, num2){
    const nums = [num1, num2];
    return nums;
}

// const [first, second] = [90, 34];
const [first, second] = boxIfy(90, 34);
console.log(boxIfy(90, 34));

const student = {
	name: 'Sakib khan',
	age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

const [firstMovie, secondMovie] = student.movies;

// object destructuring
const { name, age } = { id: 12, name: 'alu', salary: 3000, age: 14};
const { name, age } = { name: 'alu', age: 14 };


const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const {machine, ide} = employee;
const {weight, address} = employee.specification;
const {brand} = employee?.specification?.watch; 
// question mark ta holo optional chaining means object a oi option ta ba items 
// ta na o thakte pare tai questions mark ta use kora jay