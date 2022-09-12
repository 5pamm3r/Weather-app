const fragmentTodayContainer = document.createDocumentFragment();

const todayContainer = (icon, value, description) => {
  const container = document.querySelector('#templateWeatherToday').content;
  container.querySelector('#weatherTodayIcon').src = icon;
  container.querySelector('#weatherTodaySubtitle').textContent = value;
  container.querySelector('#weatherTodayDescription').textContent = description;
  const clone = document.importNode(container, true);
  fragmentTodayContainer.append(clone);
}
export { todayContainer, fragmentTodayContainer}