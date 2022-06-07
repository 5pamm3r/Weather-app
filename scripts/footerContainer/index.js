import { container, subtitleContainer, subtitle, viewMore } from "./indexUI.js";
import { itemsContainer, timeLaps } from "./timeLaps.js";
const footerContainer = () => {
  subtitle.textContent = "Today";
  viewMore.textContent = "7 days";
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
  timeLapsItemContainer.append(...itemsContainer);
  container.append(subtitleContainer, timeLapsItemContainer);
};

export { footerContainer };
