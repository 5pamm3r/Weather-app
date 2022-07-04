import { main } from "./mainContainer/index.js";
import { footerContainer } from "./footerContainer/index.js";
const getWeatherData = async (city) => {
  try {
    const res = await fetch(
      `https://community-open-weather-map.p.rapidapi.com/find?q=${city}&units=metric&lang=sp`,
      {
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key":
            "03180f7dcemsh85b598425ef8801p16815ajsnb73ba7cd518c",
        },
      }
    );
    const data = await res.json();
    data.list.map((item)=>{
      if(item.sys.country === 'UY') {
        console.log(item);
        main(item);
        footerContainer();
      }
    })
  } catch (err) {
    console.error(err);
  }
};

document.body.addEventListener("submit", (e) => {
  if (e.target.id === "search__form") {
    e.preventDefault();
    const searchInput = document.querySelector("#search__input");
    getWeatherData(searchInput.value);
  }
});

window.onload = () => {
  getWeatherData("Salto");
};


