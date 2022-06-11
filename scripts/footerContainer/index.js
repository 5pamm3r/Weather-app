import { data } from "../data.js";
import { nextDays } from "../nextDays/index.js";
import { container, subtitleContainer, subtitle, viewMore } from "./indexUI.js";
import { itemsContainer, timeLaps } from "./timeLaps.js";

import { mainContainer, backBtn, countryInput, weatherLogo, tempInput, description, dateInput } from "../mainContainer/indexUI.js";


const footerContainer = () => {
  subtitle.textContent = "Today";
  viewMore.textContent = "7 days";
  viewMore.addEventListener('click', () => {
    nextDays(data)
    mainContainer.classList.add('main__container-reduce')
    container.classList.add('footer__container-deploy')
    countryInput.style.display = 'none'
    // tempInput.style.display = 'none'
    // description.style.display = 'none'
    dateInput.style.display = 'none'
    subtitleContainer.style.display = 'none'
    timeLapsItemContainer.style.display = 'none'
    
    const weatherContainer = document.createElement('div')
    weatherContainer.setAttribute('id','weatherContainer')
    weatherContainer.style.display = 'flex'
    const infoContainer = document.createElement('div')
    infoContainer.append('Tommorow', tempInput, description )
    infoContainer.style.display = 'flex'
    infoContainer.style.flexDirection = 'column'
    weatherContainer.append(weatherLogo, infoContainer)
    weatherContainer.style.display = 'flex'
    mainContainer.insertAdjacentElement('afterbegin', weatherContainer)
    const sectionContainer = document.querySelector('#container')
    sectionContainer.style.height = '100vh'
    mainContainer.insertAdjacentElement('afterbegin',backBtn)
    backBtn.style.display = 'block'
  })
  subtitleContainer.append(subtitle, viewMore);

  timeLaps(
    "21°",
    "https://img.icons8.com/emoji/48/undefined/cloud-with-lightning-and-rain-emoji.png",
    "19:00"
  );
  timeLaps(
    "23°",
    "https://img.icons8.com/emoji/48/undefined/cloud-with-lightning-and-rain-emoji.png",
    "23:00"
  );
  timeLaps(
    "19°",
    "https://img.icons8.com/emoji/48/undefined/cloud-with-lightning-and-rain-emoji.png",
    "2:00"
  );
  timeLaps(
    "21°",
    "https://img.icons8.com/emoji/48/undefined/cloud-with-lightning-and-rain-emoji.png",
    "6:00"
  );

  const timeLapsItemContainer = document.createElement("div");
  timeLapsItemContainer.setAttribute("class", "timeLapsItem__container");
  timeLapsItemContainer.setAttribute('id','timeLapsItemContainer')
  timeLapsItemContainer.append(...itemsContainer);
  container.append(subtitleContainer, timeLapsItemContainer);
};

export { footerContainer };
