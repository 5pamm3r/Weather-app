export const changeDayHours = (state, el, background) => {
  const weatherMain = el.weather[0].main;

  const itsSunny = {
    true: {
      Clear: 'url("https://i.postimg.cc/NfS4r0CP/soleado.jpg")',
      Clouds: 'url("https://i.postimg.cc/DwCbbpzf/parcial.jpg")',
      Mist: 'url("https://i.postimg.cc/DwCbbpzf/parcial.jpg")',
      Rain: 'url("https://i.postimg.cc/fWxtvRbr/lluvioso.jpg")',
      Thunderstorm: 'url("https://i.postimg.cc/fWxtvRbr/lluvioso.jpg")',
    },
    false: {
      Clear: 'url("https://i.postimg.cc/RZL9vmGh/noche-despejado.jpg")',
      Clouds: 'url("https://i.postimg.cc/Bb9w8Ln0/noche-parcial.jpg")',
      Mist: 'url("https://i.postimg.cc/DwCbbpzf/noche-parcial.jpg")',
      Rain: 'url("https://i.postimg.cc/N0nncPhL/noche-lluvioso.jpg")',
      Thunderstorm: 'url("https://i.postimg.cc/fWxtvRbr/noche-lluvioso.jpg")',
    },
  };

  background(itsSunny[state][weatherMain]);
};
