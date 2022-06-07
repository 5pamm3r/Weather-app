const mainContainer = document.querySelector("#mainContainer");
// const searchForm = document.createElement('form')
// const searchInput = document.createElement('input')
const countryInput = document.createElement("input");
const weatherLogo = document.createElement("img");
const tempInput = document.createElement("input");
const description = document.createElement("input");
const dateInput = document.createElement("input");
const infoContainer = document.createElement("div");
const todayContainer = document.createElement("div");
countryInput.className = "country__input input";
weatherLogo.className = "weather__logo";
tempInput.className = "temp__input input";
description.className = "description input";
dateInput.className = "date__input input";
todayContainer.className = "today__container";
mainContainer.append(
  countryInput,
  weatherLogo,
  tempInput,
  description,
  dateInput,
  infoContainer,
  todayContainer
);
// searchForm.append(searchInput)

export {
  mainContainer,
  countryInput,
  weatherLogo,
  tempInput,
  description,
  dateInput,
  infoContainer,
  todayContainer,
};
