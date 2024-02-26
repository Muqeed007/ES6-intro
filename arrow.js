// multiple parameter
const difference = (x,y) => x - y;
const multiply = (a,b,c,d) => a*b*c*d;

const minus = difference(10,20);
console.log(minus);

const guun = multiply(1,2,3,4);
console.log(guun);

// single parameter or one parameter using braket
const getAge = (person) => person.age;
const student = {name: `Muqeed`,age:25};
const age = getAge(student);
console.log(age);

// single parameter without using braket
const getResult = person => person[0];
const result = getResult([10,20,30]);
console.log(result);

// no parameter
const getPI = () => Math.PI;
console.log(getPI());

// for large arrow function ,, must have to use return
const doMath = (x,y,z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum / mult;
    return result;
}
const math = doMath(1,2,3);
console.log(math);

