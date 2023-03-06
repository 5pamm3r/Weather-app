import { nextHoursContainer, fragmentNextHours } from "./nextHoursContainer.js";

export const nextHours = async (city, country) => {
  try {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ba2212a8a8mshc21e4bba59bebd4p1d5811jsn33fe8b053950',
        'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
      }
    };
    const getCoord = async (city, country) => {
      try{
    
        const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=5&appid=8d9eeb8926ac32c224c151d4599f79b6`)
        const data = await res.json()
        getWeather(data[0].lat, data[0].lon)
      }
      catch(error) {
        console.error(error)
      }
    }
    const getWeather = async (lat, lon) => {
      try{
    
        const res = await fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=${lat}&lon=${lon}&units=metric&lang=en`, options)
        const data = await res.json()
        console.log(data)
        nextHoursContainer(`https://5pamm3r.github.io/umbrella/public/img/icons/weather/${data.data[0].weather.icon}.png`, Math.floor(data.data[0].temp), new Date(data.data[0].ts * 1000).getHours())
        nextHoursContainer(`https://5pamm3r.github.io/umbrella/public/img/icons/weather/${data.data[1].weather.icon}.png`, Math.floor(data.data[1].temp), new Date(data.data[1].ts * 1000).getHours())
        nextHoursContainer(`https://5pamm3r.github.io/umbrella/public/img/icons/weather/${data.data[2].weather.icon}.png`, Math.floor(data.data[2].temp), new Date(data.data[2].ts * 1000).getHours())
        nextHoursContainer(`https://5pamm3r.github.io/umbrella/public/img/icons/weather/${data.data[3].weather.icon}.png`, Math.floor(data.data[3].temp), new Date(data.data[3].ts * 1000).getHours())
        document.querySelector('#nextHoursContainer').append(fragmentNextHours)
      } catch(err){
        console.error(err)
      }
    }
    
    getCoord(city, country)
  } catch (error) {
    console.error(error)
  }
}