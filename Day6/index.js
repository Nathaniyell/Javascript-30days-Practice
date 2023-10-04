const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"; //links to a city.json file which has all the cityNames, stateName and population.

const cities = [];
fetch(endpoint)
  .then((resp) => resp.json())
  .then((data) => cities.push(...data))
  .catch((error) => console.error("Fetch error:", error));

// console.log(cities);

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    //we need to check if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}
/*
The RegExp object is used for matching text with a pattern.
Modifiers are used to perform case-insensitive and global searches:
1. g - 	Perform a global match (find all matches rather than stopping after the first match)

let pattern = new RegExp("is", "g");
let result = text.match(pattern);

Note: For a global, case-insensitive search, use the "i" modifier together with the g modifier.

2. i - Perform case-insensitive matching
3. m - Perform multiline matching

Brackets are used to find a range of characters:
1. [abc] - Find any character between the brackets
2. [^abc] - Find any character NOT between the brackets
3. [0-9] - Find any character between the brackets (any digit)
4. [^0-9] -	Find any character NOT between the brackets (any non-digit)
5. (x|y) - Find any of the alternatives specified

*/

function numbersWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities); //the value from the input field is passed as an argument as well as the cities array. The value of the inputField is the wordToMatch
//   console.log(matchArray);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      ); //replace the regex(whatever it matches) with a highlighted span
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      ); //replace the regex(whatever it matches) with a highlighted span

      return `
    <li>
<span class="name">${cityName}, ${stateName}</span>
<span class="population">${numbersWithCommas(place.population)}</span>

    </li>
    `;
    })
    .join(""); //this .join method convert everything in the array into one item and not multiple items
  suggestions.innerHTML = html;
}
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions"); //the change event only fires when you've clicked out of the input field. You can also listen for a keyup event and fire the function so that at every instance that a key is clicked, the function runs.

searchInput.addEventListener("keyup", displayMatches);
searchInput.addEventListener("change", displayMatches);
