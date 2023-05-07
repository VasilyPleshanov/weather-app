import firstSymbolToUppercase from '../utils/firstSymbolToUppercase.js'
import dateOnMonthDay from '../utils/dateOnMonthDay.js'
import datePerMonth from '../utils/datePerMonth.js'
import dateOnWeekDay from '../utils/dateOnWeekDay.js'

const createForecastWeatherItems = (data) => {
  let forecastWeatherItems = ''

  const createForecastWeatherItem = (data, index) => {
    const forecastWeatherItem = `
      <li class="forecast-weather__item">
        <div class="forecast-weather__day">
          <p class="forecast-weather__week-day">${dateOnWeekDay(
            data.list[index].dt_txt
          )}</p>
          <p class="forecast-weather__date">${dateOnMonthDay(
            data.list[index].dt_txt
          )} ${datePerMonth(data.list[index].dt_txt)}</p>
        </div>
        <img class="forecast-weather__icon" src="${`https://openweathermap.org/img/w/${data.list[index].weather[0].icon}.png`}" />
        <div class="forecast-weather__max-min-temperature max-min-temperature">
          <div class="max-min-temperature__max-temperature max-temperature">
            <div class="max-temperature__temperature-item temperature-item">
              <h2 class="temperature-item__temperature">${Math.floor(
                data.list[index].main.temp_max
              )}</h2>
              <div class="temperature-item__units">
                <p class="temperature-item__deg">o</p>
                <p class="temperature-item__unit">C</p>
              </div>
            </div>
          </div>
          <span>/</span>
          <div class="max-min-temperature__max-temperature min-temperature">
            <div class="min-temperature__temperature-item temperature-item">
              <h2 class="temperature-item__temperature">${Math.floor(
                data.list[index].main.temp_min
              )}</h2>
              <div class="temperature-item__units">
                <p class="temperature-item__deg">o</p>
                <p class="temperature-item__unit">C</p>
              </div>
            </div>
          </div>
        </div>
        <p class="forecast-weather__description">${firstSymbolToUppercase(
          data.list[index].weather[0].description
        )}</p>
      </li>
     `

    return forecastWeatherItem
  }

  data.list.forEach((item, index) => {
    if (index === 9 || index === 17 || index === 25 || index === 33) {
      forecastWeatherItems += createForecastWeatherItem(data, index)
    }
  })

  return forecastWeatherItems
}

export default createForecastWeatherItems
