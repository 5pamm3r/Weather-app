const containerItems = document.createElement('div')
containerItems.setAttribute('class','items__container')

let itemsContainer = (data) => {
  const itemContainer = document.createElement('div')
  itemContainer.setAttribute('class','item__container')
  const date = document.createElement('span')
  // const weatherIcon = document.createElement('img')
  const description = document.createElement('span')
  let maxTemp = document.createElement('span')
  let minTemp = document.createElement('span')
  const infoContainer = document.createElement('div')
  const tempContainer = document.createElement('div')


  date.textContent = data.list[0].dt
  // weatherIcon.src = data.list.weather.icon
  description.textContent = data.list[0].weather[0].description;
  maxTemp.textContent = data.list[0].main.temp_max;
  minTemp.textContent = data.list[0].main.temp_min;

  infoContainer.append(description)
  tempContainer.append(maxTemp, minTemp)
  itemContainer.append(date, infoContainer, tempContainer)
  containerItems.append(itemContainer)
  return containerItems
}

export { itemsContainer }