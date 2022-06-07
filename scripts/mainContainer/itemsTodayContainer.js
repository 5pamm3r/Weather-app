const itemsContainer = [];
const itemsTodayContainer = (logo, text, description) => {
  const itemContainer = document.createElement("div");
  const imgLogo = document.createElement("img");
  const textInput = document.createElement("input");
  const descriptionInput = document.createElement("input");
  itemContainer.className = "item__container";
  imgLogo.className = "item__container-logo";
  textInput.className = "item__container-text";
  descriptionInput.className = "item__container-description";

  imgLogo.src = logo;
  textInput.value = text;
  descriptionInput.value = description;

  itemContainer.append(imgLogo, textInput, descriptionInput);

  itemsContainer.push(itemContainer);
};
export { itemsContainer, itemsTodayContainer };
