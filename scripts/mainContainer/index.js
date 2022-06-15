import {
  backBtn,
  countryInput,
  weatherLogo,
  tempInput,
  dateInput,
  description,
  todayContainer
} from "./indexUI.js";
import { itemsTodayContainer, fragment } from "./itemsTodayContainer.js";
import { changeStyle } from "./changeStyle.js";

backBtn.addEventListener('click',() => {
  changeStyle()

})

const main = (item) => {
  countryInput.textContent = `${item.name}, ${item.sys.country}`;
  weatherLogo.src = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`
  tempInput.textContent = `${Math.floor(item.main.temp)}°`;
  description.textContent = item.weather[0].description;
  dateInput.textContent = new Date(item.dt * 1000).toLocaleString('es-ES', {dateStyle: 'long'});

  itemsTodayContainer(
    "https://img.icons8.com/office/30/undefined/wind--v1.png",
    item.wind.speed,
    "Wind"
  );
  itemsTodayContainer(
    "https://img.icons8.com/external-justicon-flat-justicon/64/undefined/external-humidity-weather-justicon-flat-justicon.png",
    item.main.humidity,
    "Humidity"
  );
  itemsTodayContainer(
    "https://img.icons8.com/color/48/undefined/rain--v1.png",
    item.rain || 0,
    "Chance of rain"
  );
  todayContainer.append(fragment)
};

export { main };
