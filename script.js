const container = document.querySelector('.container')
const search = document.querySelector('.search-box button')
const weatherBox = document.querySelector('.weather-box')
const weatherDetails = document.querySelector('.weather-details')

search.addEventListener('click', () => {
    const APIKey = '145200e04488b30e843840ec465b5d40';
    const city = document.querySelector('.search-box input').value;

    if(city == '') return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json =>{
    const image = document.querySelector('.weather-box img')
    const temparature = document.querySelector('.weather-box .temparature')
    const description = document.querySelector('.weather-box .description')
    const humidiity = document.querySelector('.weather-details .humidiity span')
    const wind = document.querySelector('.weather-details .wind span')

    switch (json.weather[0].main){
        case 'Clear':
            image.src = 'image/clearpic.png';
            break;
        case 'Rain':
            image.src = 'image/rain.png';
            break;
        case 'Snow':
            image.src = 'image/snow.png';
            break;
        case 'Clouds':
            image.src = 'image/cloud.png';
            break;
        case 'Mist':
            image.src = 'image/mist.jpg';
            break;
        case 'Haze':
            image.src = 'image/haze.jpg';
            break;
        default:
            image.src = "image/cloud.png";
    }

    temparature.innerHTML = `${parseInt(json.main.temp)} <span>^C</span>`;
    description.innerHTML = `${json.weather[0].description}`;
    humidiity.innerHTML = `${json.main.humidiity}%`;
    wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
    })
})