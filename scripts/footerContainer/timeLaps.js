const timeLapsContainer = document.querySelector('.timeLapsItem__container')
const timeLaps = (temp, icon, hour) => {
  // const itemContainer = document.createElement("div");
  // const temperature = document.createElement("span");
  // const weatherIcon = document.createElement("img");
  // const hourItem = document.createElement("span");
  // itemContainer.setAttribute("class", "item__container");
  // temperature.setAttribute("class", "temperature");
  // weatherIcon.setAttribute("class", "weather__icon");
  // hourItem.setAttribute("class", "hour__item");

  // temperature.textContent = temp;
  // weatherIcon.src = icon;
  // hourItem.textContent = hour;

  // itemContainer.append(temperature, weatherIcon, hourItem);
  // itemsContainer.push(itemContainer);
  const weatherToday = document.querySelector('#templateWeatherToday')
  weatherToday.content.querySelector('.weatherToday__temp').textContent  = temp;
  weatherToday.content.querySelector('.weatherToday__icon').src = icon;
  weatherToday.content.querySelector('.weatherToday__hour').textContent = hour;
  const clone = document.importNode(weatherToday.content, true)
  timeLapsContainer.append(clone)
};

export { timeLaps, timeLapsContainer };
