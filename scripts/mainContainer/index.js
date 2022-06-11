import {
  countryInput,
  weatherLogo,
  tempInput,
  dateInput,
  description,
  infoContainer,
  todayContainer,
} from "./indexUI.js";
import { itemsContainer, itemsTodayContainer } from "./itemsTodayContainer.js";
const mainContainer = (data) => {
  // const date = new Date(data.dt * 1000).toLocaleString("es-ES", {
  //   dateStyle: "medium",
  // });

  // countryInput.value = data.sys.country
  // weatherLogo.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  // tempInput.value = `${Math.floor(data.main.temp)}°`
  // description.value = data.weather[0].description
  // dateInput.value = date
  countryInput.textContent = "Uruguay";
  weatherLogo.src =
    "https://img.icons8.com/office/80/undefined/chance-of-storm.png";
  tempInput.textContent = "20°";
  description.textContent = "Thunderstorm";
  dateInput.textContent = "Saturday 04 May";

  itemsTodayContainer(
    "https://img.icons8.com/office/30/undefined/wind--v1.png",
    "23 km/h",
    "Wind"
  );
  itemsTodayContainer(
    "https://img.icons8.com/external-justicon-flat-justicon/64/undefined/external-humidity-weather-justicon-flat-justicon.png",
    "94 %",
    "Humidity"
  );
  itemsTodayContainer(
    "https://img.icons8.com/color/48/undefined/rain--v1.png",
    "87 %",
    "Chance of rain"
  );
  todayContainer.append(...itemsContainer);

  // document.querySelector("#input__temp").value = `${Math.floor(
  //   data.main.temp
  // )}°`;
  // document.querySelector("#input__date").value = date;
  // document.querySelector(
  //   "#input__city"
  // ).value = `${data.name}, ${data.sys.country}`;
};

export { mainContainer };
