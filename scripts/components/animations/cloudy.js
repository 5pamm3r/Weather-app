const container = document.getElementById('backAnimate');

const cloudy = () => {
  document.getElementById('vapour').classList.remove('block');
  const cloud = document.createElement('img');
  const cloud2 = document.createElement('img');

  cloud.src = 'https://5pamm3r.github.io/umbrella/public/img/images/cloud.png';
  cloud2.src = 'https://5pamm3r.github.io/umbrella/public/img/images/cloud.png';
  container.classList.remove('back__thunderstorm','back__sunny','back__rain');
  container.classList.add('back__cloudy');


  container.append(cloud, cloud2)
}
export default cloudy;