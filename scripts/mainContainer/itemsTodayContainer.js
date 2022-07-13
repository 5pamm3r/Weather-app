const fragment = document.createDocumentFragment()

const itemsTodayContainer = (logo, value, description) => {
  const itemsContainer = document.querySelector('#templateMainItemsContainer').content;
  itemsContainer.querySelector('.mainItems__icon').src = logo
  itemsContainer.querySelector('.mainItems__percentage').textContent = value
  itemsContainer.querySelector('.mainItems__description').textContent = description
  
  const clone = document.importNode(itemsContainer, true)
  fragment.append(clone)
};
export { itemsTodayContainer, fragment };
