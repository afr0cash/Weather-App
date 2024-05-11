function getWeather () {
    const apiKey = '9a34ed3ab599d57a8b850ad3b277c296';
    const city = document.getElementById('city').value;

    if (!city) {
        alert('Please enter a city');
        return;
    }

    const currentWeatherUrl = `https://history.openweathermap.org/data/2.5/aggregated/day?id=2643743&month=2&day=2&appid={API key}`;
    const forecastUrl = `https://history.openweathermap.org/data/2.5/aggregated/month?id=2643743&month=2&appid={API key}`;
}

function getWeather() {
    fetch(currentWeatherUrl)
     .then(response => response.json())
     .then(data => {
        displayWeather(data);
    })
      .catch(error => {
            console.error ('Error fetching current weather data:', error);
             alert('Error fetching current weather data. Please try again');
    });
}
   
function getWeather() {
    fetch(forecastUrl)
     .then(Response => Response.json())
        .then(data => {
             displayHourlyForecast(data.list);
    })
        .catch(error => {
        console.error ('Error fetching hourly forecast data:', error);
        alert('Error fetching hourly forecast data. Please try again');
    });
}

   

function displayWeather(data) {

        const tempDivInfo = document.getElementById('temp-div');
        const weatherInfoDiv = document.getElementById('weather-info');
        const weatherIcon = document.getElementById('weather-icon');
        const hourlyForecastDiv = document.getElementById('hourly-forecast');

        weatherInfoDiv.innerHTML='';
        hourlyForecastDiv.innerHTML='';
        tempDivInfo.innerHTML= '';
    } 

function displayWeather (data) {
        if (data.cod === '404') {
            weatherInfoDiv.innerHTML = '<p>${data.message}</p>';
        } else {
            
            const cityName = data.name;
            const temperature = Math.round(data.main.temp - 273.15);
            const description = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = 'https://openweathermap.org/img/wn/10d@2x.png';

            const temperatureHTML = 
            <p>${temperature}°C</p>
            

             const weatherHTML = 
                <><p>${cityName}</p><p>${description}</p></>
            

            tempDivInfo.innerHTML = temperatureHTML;
            weatherInfoDiv.innerHTML = weatherHTML;
            weatherIcon.scr = iconUrl;
            weatherIcon.alt = description;

            showImage();
        }
    };
function displayHourlyForecast (hourlyData) {

    const hourlyForecastDiv = document.getElementById('hourly-forecast');
    const next24hours = hourlyData.slice (0, 8);

    next24hours.forEach(item =>
         {
            const dateTime = new Date(item.dt * 1000);
            const hour = dateTime.getHours();
            const temperature = Math.round(item.main.temp - 273.15);
            const iconCode = item.weather[0].icon;
            const iconUrl = 'https://openweathermap.org/img/wn/10d@2x.png';
        
            const hourlyItemHtml =`<div class="hourly-item">
            <span>${hour}:00</span>
              <img scr="${iconUrl}" alt="Hourly Weather Icon"></img>
             <span>${temperature}°C</span>
       </div>` ;
            hourlyForecastDiv.innerHTML += hourlyItemHtml;
        });
}

function showImage () {
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.style.display = 'block';
}