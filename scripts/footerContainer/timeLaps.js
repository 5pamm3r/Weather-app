const itemsContainer = [];
const timeLaps = (temp, icon, hour) => {
  const itemContainer = document.createElement("div");
  const temperature = document.createElement("span");
  const weatherIcon = document.createElement("img");
  const hourItem = document.createElement("span");
  itemContainer.setAttribute("class", "item__container");
  temperature.setAttribute("class", "temperature");
  weatherIcon.setAttribute("class", "weather__icon");
  hourItem.setAttribute("class", "hour__item");

  temperature.textContent = temp;
  weatherIcon.src = icon;
  hourItem.textContent = hour;

  itemContainer.append(temperature, weatherIcon, hourItem);
  itemsContainer.push(itemContainer);
};

export { itemsContainer, timeLaps };
