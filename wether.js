
// async function getWeatherData(city) {
//     // Simulated API call for weather data based on the provided city
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     return {
//         city: city,
//         temperature: Math.floor(Math.random() * 30) + 10,
//         humidity: Math.floor(Math.random() * 80) + 20,
//         conditions: ['Clear', 'Cloudy', 'Rainy', 'Snowy'][Math.floor(Math.random() * 4)],
//     };
// }

// async function fetchWeatherData(city) {
//     try {
//         const data = await getWeatherData(city);
//         return data;
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//         throw error;
//     }
// }

// function getWeatherEmoji(condition) {
//     const emojiMap = {
        // 'Clear': '☀️',
//         'Cloudy': '☁️',
//         'Rainy': '🌧️',
//         'Snowy': '❄️',
//     };
//     return emojiMap[condition] || '';
// }

// function updateDashboard(weatherData) {
//     const weatherInfoElement = document.getElementById('weather-info');
//     weatherInfoElement.innerHTML = `
//         <h2>Weather Details for ${weatherData.city}</h2>
//         <p>Temperature: ${weatherData.temperature}°C</p>
//         <p>Humidity: ${weatherData.humidity}%</p>
//         <p>Conditions: ${weatherData.conditions} ${getWeatherEmoji(weatherData.conditions)}</p>
//     `;
// }

// async function startMonitoring(city) {
//     try {
//         const weatherData = await fetchWeatherData(city);
//         updateDashboard(weatherData);
//     } catch (error) {
//         console.error('Monitoring stopped due to error:', error);
//     }
// }

// const weatherForm = document.getElementById('weather-form');
// weatherForm.addEventListener('submit', function (event) {
//     event.preventDefault();
//     const cityInput = document.getElementById('city');
//     const city = cityInput.value;
//     startMonitoring(city);
//     cityInput.value = ''; // Clear the input field
// });


let apiKey="4aa434fd2e9e36b10a1584ba6c060ee7";
let apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox=document.querySelector(".search input"); //& select search's input
let searchBtn=document.querySelector(".search button"); //& when we click on search button it shold send city info into checkwether fn
let weatherIcon =document.querySelector(".weather-icon")

// * adding async function

async function checkWether(city) //& add city name in fn
{
    let response=await fetch(apiUrl + city + `&appid=${apiKey}`); //& adding city to fetch the cities
    var data=await response.json() //& this data will have all info of city banglore

    console.log(data);
    //& it will select element innerhtml return text return in element
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp +"°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";

    //^ checking and changing the image according to wether so in data(api-key) its present in wether index 0 in main == wether(cloudy,rainy ....etc) so have to change img accordingly
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="./clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="./clear.png"
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="./rain.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="./drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="./mist.png"
    }
}
    searchBtn.addEventListener("click", ()=>
    {
    //^ searchBox.value will give city name return in i/p fild and pass this city name in async fn and it will be fetched
    checkWether(searchBox.value); //& at the time of calling checkWether fn we have to pass city name 
    
    })
