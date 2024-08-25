const person = {
    name: 'Lal Nil Holud mia',
    profession: 'Traffic Surgeon',
    age: 39,
    25: 'summer',
    'son-name': 'Sunny',
    address: 'Shahabag'
}

// dot notation
const prof1 = person.profession;

//bracket notation
const prof2 = person["prfession"];
const pName = 'profession';
const prof3 = person[pName];
const season = person.25 // aivabe kaj korbe nah karon 25 numeric aita access korte hole bracket notation use korte hobe
const season2 = person[25];
const son1 = person.son-name // aivabe access kora jabe nah
const son = person["son-name"]; // aivabe access korte hobe;
console.log(season2);