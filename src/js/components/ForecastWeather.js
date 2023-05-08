import createForecastWeatherList from './ForecastWeatherList.js'

const createForecastWeather = (data) => {
  const forecastWeather = document.createElement('section')
  forecastWeather.classList.add('weather__forecast', 'forecast-weather')

  const forecastWeatherHTML = `
    <div class="forecast-weather__container">
      ${createForecastWeatherList(data)}
    </div>
  `

  forecastWeather.innerHTML = forecastWeatherHTML

  return forecastWeather
}

export default createForecastWeather
