const weatherIconsMap = new Map([
    ['clear', 'images/clear.png'],
    ['clouds', 'images/clouds.png'],
    ['drizzle', 'images/drizzle.png'],
    ['haze', 'images/haze.png'],
    ['humidity', 'images/humidity.png'],
    ['mist', 'images/mist.png'],
    ['rain', 'images/rain.png'],
    ['snow', 'images/snow.png'],
    ['wind', 'images/wind.png'],
  ]);
  

// API TO BE USED FOR THE WEATHER DETAILS
const apiKey = 'f54abaee51a9505b48a4f1802abdb88f';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const form = document.querySelector('form')
const searchInput = document.querySelector('#search')
const submitBtn = document.querySelector('#submit')
const weatherIcon = document.querySelector('.weather-icon')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const cityValue = searchInput.value;

    console.log(getWeather(cityValue))
})

async function getWeather(cityValue) {
    const response = await fetch(`${apiUrl}${cityValue}&appid=${apiKey}`)
    const data = await response.json()
    console.log(data)
}


