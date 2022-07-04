const fragmentViewMore = document.createDocumentFragment() // memoria volátil. no genera re-flow. No pinta el DOM
const viewMoreItemsContainer = (item) => {
  const templateViewMore = document.querySelector("#templateViewMore").content;
  templateViewMore.querySelector(".item__container-day").textContent =
    new Date(item.dt * 1000).toString().slice(0,3)
  templateViewMore.querySelector(".weather__icon").src =
    `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;
  templateViewMore.querySelector(
    ".weather__container-description"
  ).textContent = item.weather[0].description;
  templateViewMore.querySelector(".max__temp").textContent =
    `${Math.floor(item.main.temp_max)} /`;
  templateViewMore.querySelector(".min__temp").textContent =
    Math.floor(item.main.temp_min);
  const clone = document.importNode(templateViewMore, true);
  fragmentViewMore.append(clone)
};

export { viewMoreItemsContainer, fragmentViewMore };
