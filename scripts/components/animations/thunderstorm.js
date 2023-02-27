// 88 88 110
import rain from "./rain.js";
const container = document.getElementById("backAnimate");

const thunderstorm = () => {
  const img = document.createElement("img");
  const img2 = document.createElement('img');
  img.src = "https://5pamm3r.github.io/umbrella/public/img/images/lightning-2.png";
  img2.src = 'https://5pamm3r.github.io/umbrella/public/img/images/lightning.png'
  document.getElementById('mainContainer').classList.remove('rain', 'sunny', 'cloudy')
  document.getElementById('mainContainer').classList.add('thunder')
  document.getElementById('vapour').style.opacity = 1;
  container.classList.remove('back__rain','back__sunny','back__cloudy');
  container.classList.add('back__thunderstorm')
  container.append(img, img2);


  rain("0.4s");
};
export default thunderstorm;
