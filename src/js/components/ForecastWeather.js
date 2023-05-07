import createForecastWeatherItems from './ForecastWeatherItems.js'

const createForecastWeather = (data) => {
  const forecastWeather = document.createElement('section')
  forecastWeather.classList.add('weather__forecast', 'forecast-weather')

  const forecastWeatherHTML = `
    <div class="forecast-weather__container">
      <ul class="forecast-weather__list">
        ${createForecastWeatherItems(data)}
      </ul>
    </div>
  `

  forecastWeather.innerHTML = forecastWeatherHTML

  return forecastWeather
}

export default createForecastWeather
