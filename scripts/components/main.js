import { nextDays } from "./nextDays.js";
import { nextHours } from "./nextHours.js";
import { todayContainer, fragmentTodayContainer } from "./todayContainer.js";

const main = (data) => {
  document.querySelector(
    "#location"
  ).textContent = 'Salto, Uy'/*`${data.location.region}, ${data.location.country}`*/;
  document.querySelector("#temperature").textContent = 25/*Math.floor(
    data.current.temp_c
  )*/;
  document.querySelector("#description").textContent =
    'Nublado'/*data.current.condition.text*/;
  document.querySelector("#day").textContent = 'Martes 5 diciembre'/*new Date(
    data.location.localtime_epoch * 1000
  ).toLocaleString("en-EN", { dateStyle: "medium" })*/;
  todayContainer(
    "../../public/img/icons/wind.png",
    '16'/*`${data.current.wind_kph} km/h`*/,
    "Wind speed"
  );
  todayContainer(
    '../../public/img/icons/humidity.png',
    '13'/*`${data.current.humidity} %`*/,
    "Humidity"
  );
  todayContainer(
    '../../public/img/icons/rain-v.png',
    '12'/*data.current.precip_mm*/,
    "Precip. mm"
  );
  document.querySelector("#infoTodayContainer").append(fragmentTodayContainer);
  // nextHours(data.location.region, data.location.country);
  nextHours('Salto','Uy')
  if(window.innerWidth > '800') {
    // nextDays(data)
    nextDays()
  } else {
    document
    .querySelector("#nextDaysBtn")
    // .addEventListener("click", () => nextDays(data));
    .addEventListener("click", () => nextDays());
  }

  document.querySelector("#backBtn").addEventListener("click", () => {
    while (document.querySelector("#nextDaysContainer").firstElementChild) {
      document.querySelector("#nextDaysContainer").firstElementChild.remove();
    }
    document.querySelector(".footerSubtitle__container").classList.remove('none');
    document.querySelector("#nextHoursContainer").classList.remove('none');
    document.querySelector("#nextDaysBtn").classList.remove('none');
    document.querySelector("#backBtn").classList.remove('block');

    document.querySelector("#backBtn").classList.add('none');
    document.querySelector(".footerSubtitle__container").classList.add('flex');
    document.querySelector("#nextHoursContainer").classList.add('flex');
    document.querySelector("#nextDaysBtn").classList.add('block');
  });
  document.querySelector(".location").addEventListener("click", () => {
    setTimeout(() => {
      
      document.querySelector(".location").style.display = "block";
      document.querySelector(".search__form").style.display = "none";
    }, 5000);
    document.querySelector(".location").style.display = "none";
    document.querySelector(".search__form").style.display = "flex";
  });
};

export { main };
