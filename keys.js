const glass = {
    name: 'glass',
    color: 'blue',
    price: 120,
    isCleaned: false
};
console.log(glass);
const keys = Object.keys(glass);
console.log(keys);
// [ 'name', 'color', 'price', 'isCleaned' ]
const values = Object.values(glass);
console.log(values);
// [ 'glass', 'blue', 120, false ]
const entries = Object.entries(glass);
console.log(entries);
// array of array,two dimensional array
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'blue' ],
//     [ 'price', 120 ],
//     [ 'isCleaned', false ]
//   ]

delete glass.isCleaned;
console.log(glass);
// freeze
// Object.freeze(glass);
// console.log(glass);
// glass.scorce = 'Bangladesh';
// glass.price = 5000;
// console.log(glass);
// seal
Object.seal(glass);
glass.scorce = 'Bangladesh';
glass.price = 5000;
console.log(glass);
