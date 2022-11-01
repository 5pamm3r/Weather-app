// import { API_KEY } from "./components/apiKey.js";
import { main } from "./components/main.js";
const getWeatherData = async (city) => {
  const key = config.MY_KEY;
  try {
    const res = await fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`,
      {
        headers: {
          "X-RapidAPI-Key":
            key,
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
