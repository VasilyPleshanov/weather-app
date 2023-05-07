import getTime from '../utils/getTime.js'

const createForecastHourlyItems = (forecast) => {
  let forecastHourlyItems = ''

  const createForecastHourlyItem = (forecast, index) => {
    const forecastHourlyItem = `
      <li class="forecast-hourly__item">
        <p class="forecast-hourly__time">${getTime(
          forecast.list[index].dt_txt
        )}</p>
        <img class="forecast-hourly__icon" src="${`https://openweathermap.org/img/w/${forecast.list[index].weather[0].icon}.png`}" />
        <div class="forecast-hourly__temperature forecast-hourly-temperature">
          <div class="feeling-block__temperature-item temperature-item">
            <h2 class="temperature-item__temperature">${Math.floor(
              forecast.list[index].main.temp
            )}</h2>
            <div class="temperature-item__units">
              <p class="temperature-item__deg">o</p>
              <p class="temperature-item__unit">C</p>
            </div>
          </div>
        </div>
      </li>
     `

    return forecastHourlyItem
  }

  forecast.list.forEach((item, index) => {
    if (index > 7) return
    forecastHourlyItems += createForecastHourlyItem(forecast, index)
  })

  return forecastHourlyItems
}

export default createForecastHourlyItems
