const actor = {
    name : 'Muqeed',
    age : 30,
    phone : '01781816037',
    money : 1000000
}
// if right side is an object , left side of destructuring will object as well
// use property name as a variable that contains the property value

// const {name} = actor;
// console.log(name);
// const {age} = actor;
// console.log(age);
const {name,age : boyosh} = actor;
console.log(name);
console.log(boyosh);

// array destructuring
const numbers = [45,90];
const [first,second] = numbers;
const [x,y] = [12,13];

function doubleThem(a,b){
    return [a*2,b*2];
}
const [prothom,ditiyo] = doubleThem(6,9);
console.log(prothom,ditiyo);
