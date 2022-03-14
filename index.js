function sunny (el, background) {
    if(el.weather[0].main === 'Clear'){
        background('url("https://i.postimg.cc/NfS4r0CP/soleado.jpg")')
        
    } else if(el.weather[0].main === 'Clouds' || el.weather[0].main === 'Mist'){
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

    } else if(el.weather[0].main === 'Clouds' || el.weather[0].main === 'Mist'){
        background('url("https://i.postimg.cc/MGCHyCJw/noche-parcial.jpg")')
        
    } else if(el.weather[0].main === 'Rain'){
        background('url("https://i.postimg.cc/Qx8tkgwF/noche-lluvioso.jpg")')
        
    } else if(el.wind.speed > 40){
        background('url("https://i.postimg.cc/C1Chbd4C/noche-viento.jpg")')
        
    }
}

const search = document.querySelector('#search__form')
search.addEventListener('submit', e=>{
    e.preventDefault()
    const searchInput = document.querySelector('#search__input')
    getWeatherData(searchInput.value)

})

const makeInputs = (data) =>{
    const date = new Date(data.dt*1000).toLocaleString('es-ES', {
        dateStyle: 'medium'
    })
    document.querySelector('#input__temp').value = `${Math.floor(data.main.temp)}°`;
    document.querySelector('#input__date').value = date;
    document.querySelector('#input__city').value = `${data.name}, ${data.sys.country}`
}

const background = (img) => {
    document.querySelector('#container').style.backgroundImage = img
    document.querySelector('#container').style.backgroundSize = 'cover'
    document.querySelector('#container').style.backgroundPosition = 'center'
}

const changeBack = (el, background) => {
    const dayHour = new Date(el.dt*1000).getHours();    
    if(dayHour >= 06 && dayHour < 19) {
        sunny(el, background)
    } else {
        night(el, background)
    }
}

const iconTemp = (codeIcon) => {
    const img = document.querySelector('#icon__temp')
    img.src = `https://openweathermap.org/img/wn/${codeIcon}.png`
}

const getWeatherData = async (city) => {
        try{

            const res = await fetch(`https://community-open-weather-map.p.rapidapi.com/find?q=${city}&units=metric&lang=sp`, {
                "headers": {
                    "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                    "x-rapidapi-key": "03180f7dcemsh85b598425ef8801p16815ajsnb73ba7cd518c"}});

            
            const data =  await res.json();
            console.log(data)
            data.list.forEach(el=>{
                if(el.sys.country === 'UY'){
                    makeInputs(el)
                    changeBack(el, background)
                    iconTemp(el.weather[0].icon)
                }
            })
        } catch(err){
            console.error(err)
        }
}


window.onload = () => {
    getWeatherData('Salto')
}