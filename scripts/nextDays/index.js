import { itemsContainer } from "./itemsContainer.js"
import { container } from "../footerContainer/indexUI.js"

const nextDays = (data) => {
  for(let i=0; i<6; i++){
    itemsContainer(data)
  }
  container.append(itemsContainer(data))
  
}

export { nextDays }