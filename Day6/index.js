const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'; //links to a city.json file which has all the cityNames, stateName and population.

const cities =[];
fetch(endpoint)
.then(resp=>resp.json())
.then(data=>cities.push(...data))
console.log(cities)

function findMatches(wordToMatch, cities){
    return cities.filter(place=>{
        //we need to check if the city or state matches what was searched
        const regex = new RegExp(wordToMatch, "gi")
        place.city.match(regex) 
    })
}