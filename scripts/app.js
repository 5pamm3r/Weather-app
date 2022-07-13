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
            "3e3e6304f0mshe71eb2622fc0338p114ee1jsn7d5ecdc73032",
        },
      }
    );
    const data = await res.json();
    
    data.list.map((item)=>{
      if(item.sys.country === 'UY') {
        main(item);
        footerContainer();
      }
    })
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


