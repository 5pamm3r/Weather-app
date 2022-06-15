import {
  backBtn,
  mainContainer,
  countryInput,
  weatherLogo,
  tempInput,
  dateInput,
  description,
  infoContainer,
} from "./indexUI.js";
import { container } from "../footerContainer/indexUI.js";

const changeStyle = () => {
  mainContainer.classList.remove("main__container-reduce");
  container.classList.remove("footer__container-deploy");
  const ref = document.querySelector("#weatherContainer");
  ref.remove();

  countryInput.insertAdjacentElement("afterend", weatherLogo);
  weatherLogo.insertAdjacentElement("afterend", infoContainer);
  const viewMoreContainer = document.querySelector("#viewMoreContainer");
  viewMoreContainer.style.display = "none";

  countryInput.style.display = "block";
  tempInput.style.display = "block";
  description.style.display = "block";
  dateInput.style.display = "block";
  const subtitleContainer = document.querySelector("#subtitleContainer");
  subtitleContainer.style.display = "flex";
  const timeLapsContainer = document.querySelector(".timeLapsItem__container");
  timeLapsContainer.style.display = "flex";
  infoContainer.append(tempInput, description);
  backBtn.style.display = "none";
};

export { changeStyle };
