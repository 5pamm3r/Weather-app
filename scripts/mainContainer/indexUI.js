const mainContainer = document.querySelector("#mainContainer");
// const searchForm = document.createElement('form')
// const searchInput = document.createElement('input')
const countryInput = document.createElement("span");
const weatherLogo = document.createElement("img");
const tempInput = document.createElement("span");
const description = document.createElement("span");
const dateInput = document.createElement("span");
const infoContainer = document.createElement("div");
const todayContainer = document.createElement("div");
countryInput.className = "country span";
weatherLogo.className = "weather__logo";
tempInput.className = "temperature span";
description.className = "description span";
dateInput.className = "date span";
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
