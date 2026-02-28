/* Write a function getWeather(city).
    If no city is passed, it returns "Please provide a location".
    If a city is passed, it returns "The weather in [city] is sunny".
    Use a Default Parameter so that if no city is passed, it defaults to "Mumbai".
*/


function getWeather(city = "Mumbai") {
    return `The weather in ${city} is sunny`
}

console.log(getWeather("Bengaluru"));
console.log(getWeather());
