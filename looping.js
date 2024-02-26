// for of amra array er opor chalaite pari
const numbers = [1,2,3,4];
for (const num of numbers){
    // console.log(num);
}
// for of amra string er opor chalaite pari
const nobab = 'Siraj Ud Doula';
for (const char of nobab){
    // console.log(char);
}
// object er jonno for in use korbo
const glass = {
    name: 'glass',
    color: 'golden',
    price: 5000,
    isCleaned: false
};
for (const key in glass){
    const value = glass[key];//eikhane key akta variable , property er nam na . tai eita k third braket diye liksi
    console.log(key,value);
}

// optional
const keys = Object.keys(glass);
console.log(keys);

for(const key of keys){
    const value = glass[key];
    console.log(key,value);
}
