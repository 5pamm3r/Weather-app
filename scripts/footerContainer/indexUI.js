const container = document.querySelector("#footerContainer");
const subtitleContainer = document.createElement("div");
const subtitle = document.createElement("span");
const viewMore = document.createElement("button");
const viewLogo = document.createElement("img");

subtitleContainer.setAttribute("class", "subtitle__container");
subtitleContainer.setAttribute("id", "subtitleContainer");
subtitle.setAttribute("class", "subtitle");
viewMore.setAttribute("class", "view__more");

export { container, subtitleContainer, subtitle, viewMore, viewLogo };
