const fragmentViewMore = document.createDocumentFragment() // memoria volátil. no genera re-flow. No pinta el DOM
const viewMoreItemsContainer = (data) => {
  const templateViewMore = document.querySelector("#templateViewMore").content;

  templateViewMore.querySelector(".item__container-day").textContent =
    data.list[0].dt;
  templateViewMore.querySelector(".weather__icon").src =
    "https://img.icons8.com/emoji/48/undefined/cloud-with-lightning-and-rain-emoji.png";
  templateViewMore.querySelector(
    ".weather__container-description"
  ).textContent = data.list[0].weather[0].description;
  templateViewMore.querySelector(".max__temp").textContent =
    data.list[0].main.temp_max;
  templateViewMore.querySelector(".min__temp").textContent =
    data.list[0].main.temp_min;
  const clone = document.importNode(templateViewMore, true);
  fragmentViewMore.append(clone)

  //arreglar, generan muchos.
};

export { viewMoreItemsContainer, fragmentViewMore };
