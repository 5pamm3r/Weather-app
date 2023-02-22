const container = document.getElementById('backAnimate');
const sunny = () => {
  document.getElementById('vapour').classList.remove('block');
  const brightening = document.createElement('div')
  brightening.classList.add('brightening')
  container.classList.remove('back__thunderstorm', 'back__cloudy', 'back__rain');
  container.classList.add('back__sunny')
  document.getElementById('weatherIconContainer').style.zIndex = 1;
  document.getElementById('mainContainer').classList.remove('cloudy','rain','thunderstorm');
  document.getElementById('mainContainer').classList.add('sunny');
  container.append(brightening)
}
export default sunny;