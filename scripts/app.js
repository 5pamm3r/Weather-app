import { main } from "./components/main.js";
const getWeatherData = async (city) => {
  try {
    const res = await fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`,
      {
        headers: {
          "X-RapidAPI-Key":
            "03180f7dcemsh85b598425ef8801p16815ajsnb73ba7cd518c",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      }
    );
    const data = await res.json();
    main(data);
  } catch (err) {
    console.error(err);
  }
};

document.body.addEventListener("submit", (e) => {
  if (e.target.id === "searchForm") {
    e.preventDefault();
    const searchInput = document.querySelector("#searchInput");
    getWeatherData(searchInput.value);
  }
});

window.onload = () => {
  getWeatherData("Salto");
};
