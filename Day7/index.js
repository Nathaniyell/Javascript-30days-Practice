// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAdult = people.some((person) => {
  const currentYear = new Date().getFullYear();
  const currentAge = currentYear - person.year;
  if (currentAge >= 19) {
    console.log(`${person.name} is ${currentAge} years old`);
    return true;
  }
});
console.log(isAdult); //.some() returns true if at least one of the items of the array meets the criteria

// Array.prototype.every() // is everyone 19 or older?
const allAdults = people.every((person) => {
  const currentYear = new Date().getFullYear();
  const currentAge = currentYear - person.year;
  if (currentAge >= 19) {
    console.log(`${person.name} is ${currentAge} years old`);
    return true;
  }
});
console.log(allAdults); //.every() returns false if not all the items of the array meets the criteria. So all items in the array must meet the cirteria for it to return true

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findId = comments.find((comment) => comment.id === 823423);
console.log(findId);
//.find() - Instead of giving you a subset of the array just like filter would, it will just give you the item that you are looking for

// Array.prototype.findIndex()

// Find the comment with this ID
const index = comments.findIndex((comment) => comment.id === 823423);
console.log(index);

// delete the comment with the ID of 823423
const newComments = comments.splice(index, 1)//deletes the comment at the specified index
console.table(comments) //returns an array of all the comments but without the deleted comment
