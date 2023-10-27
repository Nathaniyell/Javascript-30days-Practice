// start with strings, numbers and booleans
let age = 100;
let age2 = age;
console.log(age, age2); //returns 100, 100
age = 200;
console.log(age, age2); //returns 200, 100

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.

const team = players;
console.log(players, team); //returns ['Wes', 'Sarah', 'Ryan', 'Poppy'];['Wes', 'Sarah', 'Ryan', 'Poppy'];
// You might think we can just do something like this:
team[3] = "Lux";

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice(); //calling slice without passing it an argument creates a copy of the original array, allowing you to update the values without changing the values of the orignal array
team2[3] = "Nath"; //updates the last item in the team2 array but the original array still stays untouched

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players); //another way to create a copy of an array

// or use the new ES6 Spread
const team4 = [...players];

const team5 = Array.from(players); //another way to creat a copy

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// and think we make a copy:
const captain = person;
captain.number = 99; //this makes a reference to the original object and updates the original and the new object
console.log(person, captain);

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99 });
console.log(cap2, person); //updates the new object but not the original one

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
