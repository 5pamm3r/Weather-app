const container = document.getElementById('mainContainer');

const rain = (seg) => {
  document.getElementById('vapour').classList.remove('none')
  document.getElementById('vapour').classList.add('block')
  if(!seg) {
    document.getElementById('mainContainer').classList.remove('sunny', 'cloudy', 'thunderstorm')
    document.getElementById('mainContainer').classList.add('rain')
  }
  let j = 0;
  while(j<=80) {
    let gout = document.createElement('i');
    let x = innerWidth * Math.random();
    let time = 1 * Math.random();

    gout.classList.add('gout')
    gout.style.animationDuration = !!seg? seg : (time <= 0.4 ? (time + 0.4) : time + 's');
    gout.style.animationDelay = time + 's';
    gout.style.left = x + 'px'
    container.append(gout);
    j++;
  }
}
export default rain;