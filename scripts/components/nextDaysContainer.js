const fragmentNextDays = document.createDocumentFragment();

const nextDaysContainer = (day, icon, description, maxTemp, minTemp) => {
  const container = document.querySelector('#templateNextDays').content;
  container.querySelector('#nextDay').textContent = day;
  container.querySelector('#nextDayIcon').src = icon;
  container.querySelector('#nextDayDescription').textContent = description;
  container.querySelector('#maxTemp').textContent = `${maxTemp}°`;
  container.querySelector('#minTemp').textContent = `${minTemp}°`;
  const clone = document.importNode(container, true)
  fragmentNextDays.append(clone)
}
export { nextDaysContainer, fragmentNextDays}