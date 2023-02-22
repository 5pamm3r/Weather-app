import { nextDaysContainer, fragmentNextDays } from "./nextDaysContainer.js";
export const nextDays = (data) => {
  //API trae mal el date_epoch.
  const days = {
    0: "Monday",
    1: "Tuesday",
    2: "Wednesday",
    3: "Thursday",
    4: "Friday",
    5: "Saturday",
    6: "Sunday"
  };

  document.querySelector(".footerSubtitle__container").classList.remove('flex');
  document.querySelector(".footerSubtitle__container").classList.add('none');

  if (window.innerWidth < 800) {
    document.querySelector("#nextHoursContainer").classList.remove('flex');
    document.querySelector("#nextHoursContainer").classList.add('none');

    document.querySelector("#backBtn").classList.remove('none');
    document.querySelector("#backBtn").classList.add('block');
    document.querySelector("#nextDaysBtn").classList.remove('block');
    document.querySelector("#nextDaysBtn").classList.add('none');
  }

  nextDaysContainer(
    days[new Date(data.forecast.forecastday[1].date_epoch * 1000).getDay()],
    data.forecast.forecastday[1].day.condition.icon,
    data.forecast.forecastday[1].day.condition.text,
    Math.floor(data.forecast.forecastday[1].day.maxtemp_c),
    Math.floor(data.forecast.forecastday[1].day.mintemp_c)
  );
  nextDaysContainer(
    days[new Date(data.forecast.forecastday[2].date_epoch * 1000).getDay()],
    data.forecast.forecastday[2].day.condition.icon,
    data.forecast.forecastday[2].day.condition.text,
    Math.floor(data.forecast.forecastday[2].day.maxtemp_c),
    Math.floor(data.forecast.forecastday[2].day.mintemp_c)
  );
  //arreglar
  while(document.getElementById('nextDaysContainer').firstElementChild) {
    document.getElementById('nextDaysContainer').firstElementChild.remove()
  }
  document.querySelector("#nextDaysContainer").append(fragmentNextDays);
  
};
