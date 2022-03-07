function sunny (el, background) {
    if(el.weather[0].main === 'Clear'){
        background('url("https://i.postimg.cc/NfS4r0CP/soleado.jpg")')

    } else if(el.weather[0].main === 'Clouds'){
        background('url("https://i.postimg.cc/DwCbbpzf/parcial.jpg")')
        
    } else if(el.weather[0].main === 'Rain'){
        background('url("https://i.postimg.cc/fWxtvRbr/lluvioso.jpg")')
        
    } else if(el.wind.speed > 40){
        background('url("https://i.postimg.cc/GhK4ZgGP/viento.jpg")')
        
    }
}

function night (el, background) {
    if(el.weather[0].main === 'Clear'){
        background('url("https://i.postimg.cc/0NMrK83Z/noche-despejado.jpg")')

    } else if(el.weather[0].main === 'Clouds'){
        background('url("https://i.postimg.cc/MGCHyCJw/noche-parcial.jpg")')
        
    } else if(el.weather[0].main === 'Rain'){
        background('url("https://i.postimg.cc/Qx8tkgwF/noche-lluvioso.jpg")')
        
    } else if(el.wind.speed > 40){
        background('url("https://i.postimg.cc/C1Chbd4C/noche-viento.jpg")')
        
    }
}

const search = document.getElementById('search__form')
search.addEventListener('submit', e=>{
    e.preventDefault()
    const searchInput = document.getElementById('search__input')
    getWeatherData(searchInput.value)

})

const makeInputs = (data) =>{
    const date = new Date(data.dt*1000).toLocaleString('es-ES', {
        dateStyle: 'medium'
    })
    document.getElementById('input-temp').value = `${Math.floor(data.main.temp)}°`;
    document.getElementById('input-date').value = date;
    document.getElementById('input-city').value = `${data.name} ,${data.sys.country}`
}

const background = (img) => {
    document.getElementById('container').style.backgroundImage = img
    document.getElementById('container').style.backgroundSize = 'cover'
    document.getElementById('container').style.backgroundPosition = 'center'
}

const changeBack = (el, background) => {
    const dayHour = new Date(el.dt*1000).getHours();    
    if(dayHour >= 06 && dayHour < 19) {
        sunny(el, background)
    } else {
        night(el, background)
    }
}

const getWeatherData = async (city) => {
    const res = await fetch(`https://community-open-weather-map.p.rapidapi.com/find?q=${city}&units=metric&lang=sp`, {
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "3e3e6304f0mshe71eb2622fc0338p114ee1jsn7d5ecdc73032"}});
    const data =  await res.json();
    // console.log(data)

    data.list.forEach(el=>{
        if(el.sys.country === 'UY'){
            makeInputs(el)
            changeBack(el, background)
        }
    })
}


window.onload = () => {
    getWeatherData('Salto')
}