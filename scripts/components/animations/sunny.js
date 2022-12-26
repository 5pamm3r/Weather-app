// 0 186 224
const container = document.getElementById('backAnimate');
const sunny = () => {
  document.getElementById('vapour').classList.remove('block');
  const brightning = document.createElement('div')
  brightning.classList.add('brightning')
  container.classList.remove('back__thunderstorm', 'back__cloudy', 'back__rain');
  container.classList.add('back__sunny')
  document.getElementById('weatherIconContainer').style.zIndex = 1;
  document.getElementById('mainContainer').classList.remove('cloudy','rain','thunderstorm');
  document.getElementById('mainContainer').classList.add('sunny');
  container.append(brightning)
}
export default sunny;