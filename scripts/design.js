import { changeDayHours } from "./changeDayHours.js";



const background = (img) => {
  document.querySelector("#container").style.backgroundImage = img;
 
};

const changeBackground = (el, background) => {
  const dayHour = new Date(el.dt * 1000).getHours();
 
  (dayHour>=6 && dayHour<19)?changeDayHours(true, el, background):changeDayHours(false, el, background)
};

const iconTemp = (codeIcon) => {
  const img = document.querySelector("#icon__temp");
  img.src = `https://openweathermap.org/img/wn/${codeIcon}.png`;
};

export { background, changeBackground, iconTemp };
