 const products = [
    {id: 1, name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver'},
    {id: 2, name: 'phone', price: 7000, brand: 'iphone', color: 'golden'},
    {id: 3, name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {id: 4, name: 'sunglass', price: 300, brand: 'rayboon', color: 'black'},
    {id: 5, name: 'camera', price: 9000, brand: 'canon', color: 'gray'},
 ]

 // aita single line arrow function aita nije nije return kore
 const brands = products.map(product => product.brand);
 //console.log(brands);
 const prices = products.map(product => product.price);
 //console.log(prices);

// multiline arrow function nije nije return kore nah, aitake return keyword er madhome return korte hoy
const prices2= products.map(pd => {
    return pd.price;
}); 

//foreach returns kore nah, direct print kore fele
products.forEach(product => console.log(product))
products.forEach(product => console.log(product.name));

// multiline forEach
products.forEach(product => {


})

// 3.filter filter ekta array return korbe
const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);

const specificName = products.filter(pd => pd.name.includes('n'));
console.log(specificName);

// 4. find e condition a prothom jeta match kore oita return kore
const special = products.find(pd => pd.name.includes('n'));
console.log(special)

const remaining = products.filter(pd => pd.id != 3); 
// jei porduct gulur id number 3 na oi gula nia ekta notun array return korbe,
// means jei product er id number 3 take baad dye ekta notun array kora.


