// use spread operator to get max
const max = Math.max();
const numbers = [3,4,5,6,7,8,9,10];
const arrayMax = Math.max(...numbers);
console.log(numbers);
console.log(arrayMax);

// use spread operatop to copy
const friends = [10,2030,30];
const bondhu = friends;
const dosto = [...friends];//copy
console.log(dosto);
friends.push(100);
console.log(dosto);
console.log(friends);

// advanced
const num = [19,39,...friends,999]//adding extra element while copy
console.log(num);
