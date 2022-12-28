import { nextDaysContainer, fragmentNextDays } from "./nextDaysContainer.js";
export const nextDays = (data) => {
  const days = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
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

  // nextDaysContainer(
  //   days[new Date(data.forecast.forecastday[1].date_epoch * 1000).getDay()],
  //   data.forecast.forecastday[1].day.condition.icon,
  //   data.forecast.forecastday[1].day.condition.text,
  //   Math.floor(data.forecast.forecastday[1].day.maxtemp_c),
  //   Math.floor(data.forecast.forecastday[1].day.mintemp_c)
  // );
  // nextDaysContainer(
  //   days[new Date(data.forecast.forecastday[2].date_epoch * 1000).getDay()],
  //   data.forecast.forecastday[2].day.condition.icon,
  //   data.forecast.forecastday[2].day.condition.text,
  //   Math.floor(data.forecast.forecastday[2].day.maxtemp_c),
  //   Math.floor(data.forecast.forecastday[2].day.mintemp_c)
  // );
  //arreglar
  while(document.getElementById('nextDaysContainer').firstElementChild) {
    document.getElementById('nextDaysContainer').firstElementChild.remove()
  }
  nextDaysContainer(
    'Lunes',
    '../../public/img/icons/rain-v.png',
    'tormenta',
    '13',
    '13'
  )
  nextDaysContainer(
    'Lunes',
    '../../public/img/icons/rain-v.png',
    'tormenta',
    '13',
    '13'
  )
  nextDaysContainer(
    'Lunes',
    '../../public/img/icons/rain-v.png',
    'tormenta',
    '13',
    '13'
  )
  document.querySelector("#nextDaysContainer").append(fragmentNextDays);
  
};
