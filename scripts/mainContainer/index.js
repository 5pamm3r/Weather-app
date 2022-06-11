import {
  backBtn,
  mainContainer,
  countryInput,
  weatherLogo,
  tempInput,
  dateInput,
  description,
  infoContainer,
  todayContainer,
} from "./indexUI.js";
import { container } from "../footerContainer/indexUI.js";
import { itemsContainer, itemsTodayContainer } from "./itemsTodayContainer.js";

backBtn.addEventListener('click',() => {
  mainContainer.classList.remove('main__container-reduce')
  container.classList.remove('footer__container-deploy')
  const ref = document.querySelector('#weatherContainer')
  ref.remove()
  
  countryInput.insertAdjacentElement('afterend', weatherLogo)
  weatherLogo.insertAdjacentElement('afterend', infoContainer)
  const containerItems = document.querySelector('#containerItems')
  containerItems.remove()

  countryInput.style.display = 'block'
  tempInput.style.display = 'block'
  description.style.display = 'block'
  dateInput.style.display = 'block'
  const subtitleContainer = document.querySelector('#subtitleContainer')
  subtitleContainer.style.display = 'flex'
  const timeLapsItemContainer = document.querySelector('#timeLapsItemContainer')
  timeLapsItemContainer.style.display = 'flex'
  infoContainer.append(tempInput, description)

  // const weatherContainer = document.createElement('div')
  // weatherContainer.style.display = 'flex'
  // const infoContainer = document.createElement('div')
  // infoContainer.append('Tommorow', tempInput, description )
  // infoContainer.style.display = 'flex'
  // infoContainer.style.flexDirection = 'column'
  // weatherContainer.append(weatherLogo, infoContainer)
  // weatherContainer.style.display = 'flex'
  // mainContainer.insertAdjacentElement('afterbegin', weatherContainer)
  // const sectionContainer = document.querySelector('#container')
  // sectionContainer.style.height = '100vh'
  // mainContainer.insertAdjacentElement('afterbegin',backBtn)
  // backBtn.style.display = 'block'
})

const main = (data) => {
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

export { main };
