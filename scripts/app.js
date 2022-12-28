import { main } from "./components/main.js";
import rain from "./components/animations/rain.js";
import thunderstorm from "./components/animations/thunderstorm.js";
import sunny from "./components/animations/sunny.js";
import cloudy from "./components/animations/cloudy.js";
const getWeatherData = async (city) => {
  try {
    // const res = await fetch(
    //   `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`,
    //   {
    //     headers: {
    //       "X-RapidAPI-Key":
    //         '03180f7dcemsh85b598425ef8801p16815ajsnb73ba7cd518c',
    //       "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    //     },
    //   }
    // );
    // const data = await res.json();

    // main(data);
    main()
    // rain()
  } catch (err) {
    console.error(err);
  }
};

document.body.addEventListener("submit", (e) => {
  if (e.target.id === "searchForm") {
    e.preventDefault();
    const searchInput = document.querySelector("#searchInput");
    //mejorar
    while(document.getElementById('infoTodayContainer').firstElementChild) {
      document.getElementById('infoTodayContainer').firstElementChild.remove()
    }
    while(document.getElementById('nextHoursContainer').firstElementChild) {
      document.getElementById('nextHoursContainer').firstElementChild.remove()
    }
    
    getWeatherData(searchInput.value);
  }
});
window.onload = () => {
  getWeatherData("Salto");
  const classThunder = document.getElementById('weatherIcon').classList.contains('thunderstorm');
  const classRainn = document.getElementById('weatherIcon').classList.contains('rain');
  const classSunny = document.getElementById('weatherIcon').classList.contains('sunny');
  const classCloudy = document.getElementById('weatherIcon').classList.contains('cloudy');
  if(!!classRainn) {
    rain()
  } else if(!!classThunder) {
    thunderstorm()
  } else if(!!classSunny) {
    sunny()
  } else if(!!classCloudy) {
    cloudy()
  }
};
