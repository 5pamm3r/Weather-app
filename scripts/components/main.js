import { nextDays } from "./nextDays.js";
import { nextHours } from "./nextHours.js";
import { todayContainer, fragmentTodayContainer } from "./todayContainer.js";

const main = (data) => {
  document.querySelector(
    "#location"
  ).textContent = `${data.location.region}, ${data.location.country}`;
  document.querySelector("#temperature").textContent = Math.floor(
    data.current.temp_c
  );
  document.querySelector("#description").textContent =
    data.current.condition.text;
  document.querySelector("#day").textContent = new Date(
    data.location.localtime_epoch * 1000
  ).toLocaleString("en-EN", { dateStyle: "medium" });
  todayContainer(
    "https://img.icons8.com/office/30/undefined/wind--v1.png",
    `${data.current.wind_kph} km/h`,
    "Wind speed"
  );
  todayContainer(
    "https://img.icons8.com/external-justicon-flat-justicon/64/undefined/external-humidity-weather-justicon-flat-justicon.png",
    `${data.current.humidity} %`,
    "Humidity"
  );
  todayContainer(
    "https://img.icons8.com/color/48/undefined/rain--v1.png",
    data.current.precip_mm,
    "Precip. mm"
  );
  document.querySelector("#InfoTodayContainer").append(fragmentTodayContainer);
  nextHours(data.location.region, data.location.country);
  document
    .querySelector("#nextDays")
    .addEventListener("click", () => nextDays(data));

  document.querySelector("#backBtn").addEventListener("click", () => {
    while (document.querySelector("#nextDaysContainer").firstElementChild) {
      document.querySelector("#nextDaysContainer").firstElementChild.remove();
    }
    document.querySelector(".footerSubtitle__container").style.display = "flex";
    document.querySelector("#nextHoursContainer").style.display = "flex";
    document.querySelector("#nextDays").style.display = "inline-block";
    document.querySelector("#backBtn").style.display = "none";
  });

  document.querySelector(".location").addEventListener("click", () => {
    document.querySelector(".location").style.display = "none";
    document.querySelector(".search__form").style.display = "flex";
  });
};

export { main };
