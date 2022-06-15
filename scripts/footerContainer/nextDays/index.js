import { viewMoreItemsContainer, fragmentViewMore } from "./viewMore.js";
import { container } from "../../footerContainer/indexUI.js";
const viewMoreContainer = document.createElement("div");
viewMoreContainer.setAttribute("class", "viewMore__container");
viewMoreContainer.setAttribute("id", "viewMoreContainer");


const nextDays = (data) => {
  viewMoreItemsContainer(data);
  viewMoreItemsContainer(data);
  viewMoreItemsContainer(data);
  viewMoreItemsContainer(data);
  viewMoreItemsContainer(data);
  viewMoreItemsContainer(data);
  viewMoreContainer.append(fragmentViewMore);
  container.append(viewMoreContainer);


};

export { nextDays, viewMoreContainer };
