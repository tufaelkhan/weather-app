const container = document.querySelector('.container')
const search = document.querySelector('.search-box button')
const weatherBox = document.querySelector('.weather-box')
const weatherDetails = document.querySelector('.weather-details')

search.addEventListener('click', ()=>{
    const APIKey = '145200e04488b30e843840ec465b5d40';
    const city = document.querySelector('.search-box input').value;

    if(city == '') return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`)
})