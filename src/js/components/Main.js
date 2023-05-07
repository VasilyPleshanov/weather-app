import createWeatherNow from './WeatherNow.js'
import createForecastWeather from './ForecastWeather.js'

const createMain = (data, forecast) => {
  const main = document.createElement('main')
  main.classList.add('weather__main')

  const weatherNow = createWeatherNow(data, forecast)
  const forecastWeather = createForecastWeather(forecast)

  main.append(weatherNow, forecastWeather)

  return main
}

export default createMain
