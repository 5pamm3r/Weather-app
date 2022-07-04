import { viewMoreItemsContainer, fragmentViewMore } from "./viewMore.js";
import { container } from "../../footerContainer/indexUI.js";
const viewMoreContainer = document.createElement("div");
viewMoreContainer.setAttribute("class", "viewMore__container");
viewMoreContainer.setAttribute("id", "viewMoreContainer");


const nextDays = (data) => {
  viewMoreItemsContainer(data.list[7]);
  viewMoreItemsContainer(data.list[15]);
  viewMoreItemsContainer(data.list[23]);
  viewMoreItemsContainer(data.list[31]);
  viewMoreItemsContainer(data.list[39]);
  viewMoreContainer.append(fragmentViewMore);
  container.append(viewMoreContainer);


};

export { nextDays, viewMoreContainer };
