import { changeDayHours } from "./changeDayHours.js";

const mainInputs = (data) => {
  // const date = new Date(data.dt * 1000).toLocaleString("es-ES", {
  //   dateStyle: "medium",
  // });

  const mainContainer = document.querySelector('#mainContainer')
  // const searchForm = document.createElement('form')
  // const searchInput = document.createElement('input')
  const countryInput = document.createElement('input')
  const weatherLogo = document.createElement('img')
  const tempInput = document.createElement('input')
  const description = document.createElement('input')
  const infoContainer = document.createElement('div')
  const todayContainer = document.createElement('div')
  
  mainContainer.append(countryInput, weatherLogo, tempInput, description, infoContainer)
  // searchForm.append(searchInput)

  // countryInput.value = data.sys.country
  // weatherLogo.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  // tempInput.value = `${Math.floor(data.main.temp)}°`
  // description.value = data.weather[0].description
  countryInput.value = 'Uruguay'
  weatherLogo.src = 'https://img.icons8.com/office/80/undefined/chance-of-storm.png'
  tempInput.value = '20°'
  description.value = 'Thunderstorm'

  countryInput.className = 'country__input input'
  weatherLogo.className = 'weather__logo'
  tempInput.className = 'temp__input input'
  description.className = 'description input'


  

  // document.querySelector("#input__temp").value = `${Math.floor(
  //   data.main.temp
  // )}°`;
  // document.querySelector("#input__date").value = date;
  // document.querySelector(
  //   "#input__city"
  // ).value = `${data.name}, ${data.sys.country}`;
};

const background = (img) => {
  document.querySelector("#container").style.backgroundImage = img;
 
};

const changeBackground = (el, background) => {
  const dayHour = new Date(el.dt * 1000).getHours();
 
  (dayHour>=6 && dayHour<19)?changeDayHours(true, el, background):changeDayHours(false, el, background)
};

const iconTemp = (codeIcon) => {
  const img = document.querySelector("#icon__temp");
  img.src = `https://openweathermap.org/img/wn/${codeIcon}.png`;
};

export { mainInputs, background, changeBackground, iconTemp };
