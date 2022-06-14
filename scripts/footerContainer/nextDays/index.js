import { viewMoreItemsContainer, fragment} from "./viewMore.js"
import { container } from "../../footerContainer/indexUI.js"
const viewMoreContainer = document.createElement('div')
viewMoreContainer.setAttribute('class','viewMore__container')

const nextDays = (data) => {
  for(let i=0; i<6; i++){
    viewMoreItemsContainer(data)
  }

  viewMoreContainer.append(fragment)
  container.append(viewMoreContainer)
  
}

export { nextDays, viewMoreContainer }