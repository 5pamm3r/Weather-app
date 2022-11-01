// import { API_KEY } from "./apiKey.js";
import { nextHoursContainer, fragmentNextHours } from "./nextHoursContainer.js";

export const nextHours = async (city, country) => {
  var key = config.MY_KEY;
  try {
    const res = await fetch(
      `https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=1&location=${city}%2C${country}&contentType=json&unitGroup=metric&shortColumnNames=true`,
      {
        headers: {
          'X-RapidAPI-Key': key,
          'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
        }
      }
    );
    const data = await res.json();
    nextHoursContainer('https://img.icons8.com/color/48/undefined/rain--v1.png', Math.floor(data.locations[`${city},${country}`].values[3].temp), new Date(data.locations[`${city},${country}`].values[3].datetime).getHours())
    nextHoursContainer('https://img.icons8.com/color/48/undefined/rain--v1.png', Math.floor(data.locations[`${city},${country}`].values[6].temp), new Date(data.locations[`${city},${country}`].values[6].datetime).getHours())
    nextHoursContainer('https://img.icons8.com/color/48/undefined/rain--v1.png', Math.floor(data.locations[`${city},${country}`].values[9].temp), new Date(data.locations[`${city},${country}`].values[9].datetime).getHours())
    nextHoursContainer('https://img.icons8.com/color/48/undefined/rain--v1.png', Math.floor(data.locations[`${city},${country}`].values[12].temp), new Date(data.locations[`${city},${country}`].values[12].datetime).getHours())
    document.querySelector('#nextHoursContainer').append(fragmentNextHours)
  } catch (error) {
    console.error(error)
  }
}