import { nextDays, viewMoreContainer } from "./nextDays/index.js";
import { container, subtitleContainer, subtitle, viewMore } from "./indexUI.js";
import { timeLaps, timeLapsContainer } from "./timeLaps.js";
import { changeStyle } from "./changeStyle.js";

const footerContainer = async () => {
  try {
    const res = await fetch('https://community-open-weather-map.p.rapidapi.com/forecast?q=salto%2Cuy&units=metric&lang=es',
      {
        headers: {
          'X-RapidAPI-Key': '03180f7dcemsh85b598425ef8801p16815ajsnb73ba7cd518c',
          'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
        }
      });
    const data = await res.json()
    console.log(data)


    subtitle.textContent = "Today";
    viewMore.textContent = "7 days";

    viewMore.addEventListener('click', () => {
      const viewMoreItemContainer = document.getElementsByClassName('viewMoreItem__container').length
      if (viewMoreItemContainer <= 0) {
        nextDays(data)
        changeStyle();

      } else {
        changeStyle()
      }


    })
    subtitleContainer.append(subtitle, viewMore);
    console.log(data.list[0].dt_txt)
    timeLaps(
      `${Math.floor(data.list[0].main.temp)}°`,
      `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`,
      data.list[0].dt_txt.substring(11, 16)
    );
    timeLaps(
      `${Math.floor(data.list[1].main.temp)}°`,
      `https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}.png`,
      data.list[1].dt_txt.substring(11, 16)
    );
    timeLaps(
      `${Math.floor(data.list[2].main.temp)}°`,
      `https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}.png`,
      data.list[2].dt_txt.substring(11,16)
    );
    timeLaps(
      `${Math.floor(data.list[3].main.temp)}°`,
      `https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}.png`,
      data.list[3].dt_txt.substring(11,16)
    );

    container.append(subtitleContainer, timeLapsContainer);

  } catch (error) {
    console.error(error)
  }
};

export { footerContainer };
