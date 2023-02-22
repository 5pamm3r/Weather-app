import { nextDays } from "./nextDays.js";
import { nextHours } from "./nextHours.js";
import { todayContainer, fragmentTodayContainer } from "./todayContainer.js";
import rain from "../components/animations/rain.js";
import thunderstorm from "../components/animations/thunderstorm.js";
import sunny from "../components/animations/sunny.js";
import cloudy from "../components/animations/cloudy.js";

const main = (data) => {
  document.getElementById('weatherIcon').className = data.current.condition.text;
  const d = document.getElementById('weatherIcon').classList;
  const classThunder = d.contains('Thunderstorm');
  const classRainn = d.contains('Rain');
  const classSunny = d.contains('Sunny');
  const classCloudy = d.contains('Cloudy') || d.contains('Fog');
  if(!!classRainn) {
    rain()
    document.getElementById('weatherIcon').src = '../../public/img/images/rain.png'
  } else if(!!classThunder) {
    thunderstorm()
    document.getElementById('weatherIcon').src = '../../public/img/images/thunderstorm.png'
  } else if(!!classSunny) {
    sunny()
    document.getElementById('weatherIcon').src = '../../public/img/images/sunny.png'
  } else if(!!classCloudy) {
    cloudy()
    document.getElementById('weatherIcon').src = '../../public/img/images/cloudy.png'
  }

  document.querySelector("#location").textContent =
    `${data.location.region}, ${data.location.country}`
  document.querySelector("#temperature").textContent = Math.floor(
    data.current.temp_c
  );
  document.querySelector("#description").textContent =
    data.current.condition.text;
  document.querySelector("#day").textContent = new Date(
    data.location.localtime_epoch * 1000
  ).toLocaleString("en-EN", { dateStyle: "medium" });
  todayContainer(
    "../../public/img/icons/wind.png",
    `${data.current.wind_kph} km/h`,
    "Wind speed"
  );
  todayContainer(
    "../../public/img/icons/humidity.png",
    `${data.current.humidity} %`,
    "Humidity"
  );
  todayContainer(
    "../../public/img/icons/rain-v.png",
    data.current.precip_mm,
    "Precip. mm"
  );
  document.querySelector("#infoTodayContainer").append(fragmentTodayContainer);
  nextHours(data.location.region, data.location.country);
  if (window.innerWidth > "800") {
    nextDays(data)
  } else {
    document
      .querySelector("#nextDaysBtn")
      .addEventListener("click", () => nextDays(data));
  }
  //arreglar
  document.querySelector("#backBtn").addEventListener("click", () => {
    while (document.querySelector("#nextDaysContainer").firstElementChild) {
      document.querySelector("#nextDaysContainer").firstElementChild.remove();
    }
    document
      .querySelector(".footerSubtitle__container")
      .classList.remove("none");
    document.querySelector("#nextHoursContainer").classList.remove("none");
    document.querySelector("#nextDaysBtn").classList.remove("none");
    document.querySelector("#backBtn").classList.remove("block");

    document.querySelector("#backBtn").classList.add("none");
    document.querySelector(".footerSubtitle__container").classList.add("flex");
    document.querySelector("#nextHoursContainer").classList.add("flex");
    document.querySelector("#nextDaysBtn").classList.add("block");
  });
  document.querySelector(".location").addEventListener("click", () => {
    setTimeout(() => {
      document.querySelector(".location").style.display = "block";
      document.querySelector(".search__form").style.display = "none";
    }, 10000);
    document.querySelector(".location").style.display = "none";
    document.querySelector(".search__form").style.display = "flex";
  });
};

export { main };
