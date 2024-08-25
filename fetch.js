// 1. JSON

const student = {
	name: 'Sakib khan',
	age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

// Javascript object JSON object a Rupantor
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

// JSON object k normal javascript a transfer

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// 2. fetch
fetch('url')
.then(res => res.json())
.then(data => console.log(data));

// keys, values
const keys = Object.keys(student);
const values = Object.values(student);
console.log(keys);
console.log(values);

// Ekhon theke amra array er modhe forEach r map use korbo kuno kichu return er jonnno map
// R return na chaile forEach use korbo

const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach(num => console.log(num));
numbers.map(num => num*2);

// Array like object e for of/for loop ta use korbo
// for in use korbo opject er property gular upor / loop on an object using for in

// array of object
const products = [
    {id: 1, name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver'},
    {id: 2, name: 'phone', price: 7000, brand: 'iphone', color: 'golden'},
    {id: 3, name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {id: 4, name: 'sunglass', price: 300, brand: 'rayboon', color: 'black'},
    {id: 5, name: 'camera', price: 9000, brand: 'canon', color: 'gray'},
 ];

 const newProduct = { name: 'webcam', price: 700, brand: 'Lal'};

 //copy products array and then add newProduct
const newProducts = [...products, newProduct];

// Create a new array without one specific item
// remove phone means create a new array without the phone

const remaining = products.filter(product => product.name !== 'phone');
