const getWeatherData = async (city) => {
    const res = await fetch(`https://community-open-weather-map.p.rapidapi.com/find?q=${city}&units=metric&lang=sp`, {
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "3e3e6304f0mshe71eb2622fc0338p114ee1jsn7d5ecdc73032"}});
    const data =  await res.json();


    console.log(data)

    document.getElementById('input-temp').value = `${data.list[0].main.temp}°`;
    const date = new Date(data.list[0].dt*1000)

    const hora = String(date).slice(16,18)
    // console.log(hora)

    document.getElementById('input-date').value = String(date).slice(4,15);
    document.getElementById('input-city').value = `${data.list[0].name} ,${data.list[0].sys.country}`
    // console.log(data.list[0].clouds.all)
    if(hora >= 06 && hora < 20) {

        if(data.list[0].clouds.all < 40){
            document.getElementById('container').style.backgroundImage = await 'url("https://i.postimg.cc/NfS4r0CP/soleado.jpg")'
            document.getElementById('container').style.backgroundSize = 'cover'
            document.getElementById('container').style.backgroundPosition = 'center'

        } else if(data.list[0].clouds.all >= 40){
            document.getElementById('container').style.backgroundImage = await 'url("https://i.postimg.cc/DwCbbpzf/parcial.jpg")'
            document.getElementById('container').style.backgroundSize = 'cover'
            document.getElementById('container').style.backgroundPosition = 'center'
        } else if(data.list[0].rain != null){
            document.getElementById('container').style.backgroundImage = await 'url("https://i.postimg.cc/fWxtvRbr/lluvioso.jpg")'
            document.getElementById('container').style.backgroundSize = 'cover'
            document.getElementById('container').style.backgroundPosition = 'center'
        } else if(data.list[0].wind.speed > 40){
            document.getElementById('container').style.backgroundImage = await 'url("https://i.postimg.cc/GhK4ZgGP/viento.jpg")'
            document.getElementById('container').style.backgroundSize = 'cover'
            document.getElementById('container').style.backgroundPosition = 'center'
        }
    } else {
        if(data.list[0].clouds.all === 0){
            document.getElementById('container').style.backgroundImage = await 'url("https://i.postimg.cc/0NMrK83Z/noche-despejado.jpg")'
            document.getElementById('container').style.backgroundSize = 'cover'
            document.getElementById('container').style.backgroundPosition = 'center'

        } else if(data.list[0].clouds.all > 40){
            document.getElementById('container').style.backgroundImage = await 'url("https://i.postimg.cc/MGCHyCJw/noche-parcial.jpg")'
            document.getElementById('container').style.backgroundSize = 'cover'
            document.getElementById('container').style.backgroundPosition = 'center'
        } else if(data.list[0].rain != null){
            document.getElementById('container').style.backgroundImage = await 'url("https://i.postimg.cc/Qx8tkgwF/noche-lluvioso.jpg")'
            document.getElementById('container').style.backgroundSize = 'cover'
            document.getElementById('container').style.backgroundPosition = 'center'
        } else if(data.list[0].wind.speed > 40){
            document.getElementById('container').style.backgroundImage = await 'url("https://i.postimg.cc/C1Chbd4C/noche-viento.jpg")'
            document.getElementById('container').style.backgroundSize = 'cover'
            document.getElementById('container').style.backgroundPosition = 'center'
        }
    }
}

window.onload = () => {
    getWeatherData('montevideo')
}