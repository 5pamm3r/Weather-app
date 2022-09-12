const fragmentNextHours = document.createDocumentFragment()

const nextHoursContainer = (icon, temperature, hour) => {
  const itemsContainer = document.querySelector('#templateWeatherToday').content;
  itemsContainer.querySelector('#weatherTodayIcon').src = icon
  itemsContainer.querySelector('#weatherTodaySubtitle').textContent = `${temperature}°`
  itemsContainer.querySelector('#weatherTodayDescription').textContent = `${hour}:00`
  
  const clone = document.importNode(itemsContainer, true)
  fragmentNextHours.append(clone)
};
export { nextHoursContainer, fragmentNextHours };
