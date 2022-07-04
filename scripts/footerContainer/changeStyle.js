import { timeLapsContainer } from "./timeLaps.js";

import {
  mainContainer,
  backBtn,
  countryInput,
  weatherLogo,
  tempInput,
  description,
  dateInput,
} from "../mainContainer/indexUI.js";

const changeStyle = () => {
  const weatherContainer = document.createElement("div");
  const infoContainer = document.createElement("div");
  const sectionContainer = document.querySelector("#container");
  const footerContainer = document.querySelector("#footerContainer");
  const viewMoreContainer = document.querySelector(".viewMore__container");

  mainContainer.classList.add("main__container-reduce");
  footerContainer.classList.add("footer__container-deploy");
  countryInput.style.display = "none";
  dateInput.style.display = "none";
  subtitleContainer.style.display = "none";
  timeLapsContainer.style.display = "none";
  viewMoreContainer.style.display = "flex";
  tempInput.style.fontSize = '9rem'

  weatherContainer.setAttribute("id", "weatherContainer");
  weatherContainer.setAttribute("class", "weather__container");
  infoContainer.setAttribute("class", "dateInfo__container");
  sectionContainer.style.height = "100vh";
  backBtn.style.display = "block";

  infoContainer.append(tempInput, description);
  weatherContainer.append(weatherLogo, infoContainer);
  mainContainer.insertAdjacentElement("afterbegin", weatherContainer);
  mainContainer.insertAdjacentElement("afterbegin", backBtn);
};

export { changeStyle };
