import {
  backBtn,
  mainContainer,
  countryInput,
  weatherLogo,
  tempInput,
  dateInput,
  description,
} from "./indexUI.js";
import { container } from "../footerContainer/indexUI.js";

const changeStyle = () => {
  const sectionContainer = document.querySelector('#container')
  const ref = document.querySelector("#weatherContainer");
  const subtitleContainer = document.querySelector("#subtitleContainer");
  const timeLapsContainer = document.querySelector(".timeLapsItem__container");
  const viewMoreContainer = document.querySelector("#viewMoreContainer");
  const searchBtn = document.querySelector('#searchBtn');
  const searchInput = document.querySelector('#searchInput');
  
  mainContainer.classList.remove("main__container-reduce");
  container.classList.remove("footer__container-deploy");
  ref.remove();
  
  viewMoreContainer.style.display = "none";
  countryInput.style.display = "block";
  tempInput.style.display = "block";
  description.style.display = "block";
  dateInput.style.display = "block";
  subtitleContainer.style.display = "flex";
  timeLapsContainer.style.display = "flex";
  sectionContainer.style.height = '100%'
  backBtn.style.display = "none";
  searchBtn.style.display = 'block'
  searchInput.style.display = 'none'

  countryInput.insertAdjacentElement("afterend", weatherLogo);
  weatherLogo.insertAdjacentElement("afterend", tempInput);
  tempInput.insertAdjacentElement('afterend', description)
};

export { changeStyle };
