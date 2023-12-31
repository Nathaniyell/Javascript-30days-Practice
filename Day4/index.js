// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter((inventor) => {
  if ((inventor.year >= 1500) & (inventor.year < 1600)) {
    return true; //keep that inventor
  } else {
    return false;
  }
});
console.table(fifteen); //returns the list of inventors that passed the specified parameters in a tabular form

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const inventorNames = inventors.map((inventor) => {
  return `${inventor.first} ${inventor.last}`;
}); //Map takes in an array, does something with that array and returns a new array.
console.log(inventorNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const ordered = inventors.sort((firstPerson, secondPerson) =>
  firstPerson.year > secondPerson.year ? 1 : -1
);
console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year); //subtract the year each inventor died from the year they were born and add that to the total
}, 0); //The scond parameter allows you to set the first value of the total variable to zero so as not to return undefined
console.log(totalYears);

// 5. Sort the inventors by years lived
const oldest = inventors.sort((big, small) => {
  const lastGuy = big.passed - big.year;
  const nextGuy = small.passed - small.year;
  return lastGuy > nextGuy ? -1 : 1;
});
console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const category = document.querySelector(".mw-category");
const links = Array.from(category.querySelectorAll("a")); //converts the domeNode gotten from document.querySelectorAll into an array so that you can use array methods on the array that is returned

//const links = [...category.querySelectorAll("a")]; //this goes to show that you can call the dom methods on an element to access other elements nested within it. Also the spread operator converts the domeNode into an array so that you can use array methods on the array that is returned

const de = links.map((link) => {
  return link.textContent.filter((streetName) => streetName.includes("de"));
});
const people = [
    "Bernhard, Sandra",
    "Bethea, Erin",
    "Becker, Carl",
    "Bentsen, Lloyd",
    "Beckett, Samuel",
    "Blake, William",
    "Berger, Ric",
    "Beddoes, Mick",
    "Beethoven, Ludwig",
    "Belloc, Hilaire",
    "Begin, Menachem",
    "Bellow, Saul",
    "Benchley, Robert",
    "Blair, Robert",
    "Benenson, Peter",
    "Benjamin, Walter",
    "Berlin, Irving",
    "Benn, Tony",
    "Benson, Leana",
    "Bent, Silas",
    "Berle, Milton",
    "Berry, Halle",
    "Biko, Steve",
    "Beck, Glenn",
    "Bergman, Ingmar",
    "Black, Elk",
    "Berio, Luciano",
    "Berne, Eric",
    "Berra, Yogi",
    "Berry, Wendell",
    "Bevan, Aneurin",
    "Ben-Gurion, David",
    "Bevel, Ken",
    "Biden, Joseph",
    "Bennington, Chester",
    "Bierce, Ambrose",
    "Billings, Josh",
    "Birrell, Augustine",
    "Blair, Tony",
    "Beecher, Henry",
    "Biondo, Frank",
  ];
  
// 7. sort Exercise
// Sort the people alphabetically by last name

const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(", "); //destructure the first and the name and split it into two using a comma and a space
  const [bLast, bFirst] = nextOne.split(", ");
  return aLast > bLast ? 1 : -1;
});

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];
const transportation = data.reduce((obj, item)=>{
if(!obj[item]){
    obj[item] = 0
}
    obj[item]++
}, {
    car: 0,
    walk:0,
    truck:0
})
