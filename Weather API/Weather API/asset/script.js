const apiKey = '1dfd7e9623cdbaa9ae046282f90ab471';
const weatherButton = document.getElementById('getWeather');
const weatherResult = document.getElementById('weatherResult');

weatherButton.addEventListener('click', () => {
    const cityName = document.getElementById('cityName').value.trim();
    if (!cityName) {
        weatherResult.innerHTML = `<div class="alert alert-warning">Please enter a city name!</div>`;
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) throw new Error('City not found');
            return response.json();
        })
        .then(data => {
            const { name, main, weather } = data;
            const description = weather[0].description;
            const temperature = main.temp;
            weatherResult.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h3>${name}</h3>
                        <p>${description}</p>
                        <p>Temperature: ${temperature}°C</p>
                    </div>
                </div>
            `;
        })
        .catch(error => {
            weatherResult.innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
        });
});
