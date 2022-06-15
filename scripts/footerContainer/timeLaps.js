const timeLapsContainer = document.querySelector('.timeLapsItem__container')
const timeLaps = (temp, icon, hour) => {
  const weatherToday = document.querySelector('#templateWeatherToday')
  weatherToday.content.querySelector('.weatherToday__temp').textContent  = temp;
  weatherToday.content.querySelector('.weatherToday__icon').src = icon;
  weatherToday.content.querySelector('.weatherToday__hour').textContent = hour;
  const clone = document.importNode(weatherToday.content, true)
  timeLapsContainer.append(clone)
};

export { timeLaps, timeLapsContainer };
