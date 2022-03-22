import {changeDayHours} from './changeDayHours.js'


const createInputs = (data) => {
    const date = new Date(data.dt*1000).toLocaleString('es-ES', {
        dateStyle: 'medium'
    })
    document.querySelector('#input__temp').value = `${Math.floor(data.main.temp)}°`
    document.querySelector('#input__date').value = date
    document.querySelector('#input__city').value = `${data.name}, ${data.sys.country}`
}

const background = (img) => {
    document.querySelector('#container').style.backgroundImage = img
    document.querySelector('#container').style.backgroundSize = 'cover'
    document.querySelector('#container').style.backgroundPosition = 'center'
}

const changeBackground = (el, background) => {
    const dayHour = new Date(el.dt*1000).getHours()  
    if (dayHour >= 6 && dayHour < 19) {
        changeDayHours(true, el, background)
    } else {
        changeDayHours(false, el, background)
    }
    
}

const iconTemp = (codeIcon) => {
    const img = document.querySelector('#icon__temp')
    img.src = `https://openweathermap.org/img/wn/${codeIcon}.png`
}

export { createInputs, background, changeBackground, iconTemp }