function sunny (data, background) {
    if(data.list[0].clouds.all < 40){
        background('url("https://i.postimg.cc/NfS4r0CP/soleado.jpg")')

    } else if(data.list[0].clouds.all >= 40){
        background('url("https://i.postimg.cc/DwCbbpzf/parcial.jpg")')
        
    } else if(data.list[0].rain != null){
        background('url("https://i.postimg.cc/fWxtvRbr/lluvioso.jpg")')
        
    } else if(data.list[0].wind.speed > 40){
        background('url("https://i.postimg.cc/GhK4ZgGP/viento.jpg")')
        
    }
}

function night (data, background) {
    if(data.list[0].clouds.all < 40){
        background('url("https://i.postimg.cc/0NMrK83Z/noche-despejado.jpg")')

    } else if(data.list[0].clouds.all > 40){
        background('url("https://i.postimg.cc/MGCHyCJw/noche-parcial.jpg")')
        
    } else if(data.list[0].rain != null){
        background('url("https://i.postimg.cc/Qx8tkgwF/noche-lluvioso.jpg")')
        
    } else if(data.list[0].wind.speed > 40){
        background('url("https://i.postimg.cc/C1Chbd4C/noche-viento.jpg")')
        
    }
}

const getWeatherData = async (city) => {
    const res = await fetch(`https://community-open-weather-map.p.rapidapi.com/find?q=${city}&units=metric&lang=sp`, {
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "3e3e6304f0mshe71eb2622fc0338p114ee1jsn7d5ecdc73032"}});
    const data =  await res.json();
    const date = new Date(data.list[0].dt*1000)
    const hora = String(date).slice(16,18)
    
    document.getElementById('input-temp').value = `${data.list[0].main.temp}°`;
    document.getElementById('input-date').value = String(date).slice(4,15);
    document.getElementById('input-city').value = `${data.list[0].name} ,${data.list[0].sys.country}`

    const background = async (img) => {
        document.getElementById('container').style.backgroundImage = await img
        document.getElementById('container').style.backgroundSize = 'cover'
        document.getElementById('container').style.backgroundPosition = 'center'
    }

    if(hora >= 06 && hora < 19) {
        sunny(data, background)
    } else {
        night(data, background)
    }
}



window.onload = () => {
    getWeatherData('Salto')
}