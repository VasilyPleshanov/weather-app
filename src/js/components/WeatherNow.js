import createForecastHourlyItems from './ForecastHourlyItems.js'
import firstSymbolToUppercase from '../utils/firstSymbolToUppercase.js'
import getTodaysDate from '../utils/getTodaysDate.js'
import dateOnMonthDay from '../utils/dateOnMonthDay.js'
import datePerMonth from '../utils/datePerMonth.js'
import dateOnWeekDay from '../utils/dateOnWeekDay.js'

const createWeatherNow = (data, forecast) => {
  const weatherNow = document.createElement('section')
  weatherNow.classList.add('weather__now', 'now-weather')

  const weatherNowHTML = `
      <div class="now-weather__container _container">
        <div class="now-weather__wrapper">
          <div class="now-weather__inner">
            <div class="now-weather__temperature-block temperature-block">
              <div class="temperature-block__temperature-item temperature-item">
                <h2 class="temperature-item__temperature">${Math.floor(
                  data.main.temp
                )}</h2>
                <div class="temperature-item__units">
                  <p class="temperature-item__deg">o</p>
                  <p class="temperature-item__unit">C</p>
                </div>
              </div>
              <img class="now-weather__icon" src="${`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}" />
            </div>
            <div class="now-weather__description-block">
              <p class="now-weather__description">${firstSymbolToUppercase(
                data.weather[0].description
              )}</p>
              <div class="now-weather__feeling-block feeling-block">
                <p class="feeling-block__feeling-text">Ощущается как</p>
                <div class="feeling-block__temperature-item temperature-item">
                  <h2 class="temperature-item__temperature">${Math.floor(
                    data.main.feels_like
                  )}</h2>
                  <div class="temperature-item__units">
                    <p class="temperature-item__deg">o</p>
                    <p class="temperature-item__unit">C</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="now-weather__info">
            <div class="now-weather__date-block date-block">
              <p class="date-block__number">${dateOnMonthDay(
                getTodaysDate()
              )}</p>
              <p class="date-block__month">${datePerMonth(getTodaysDate())}</p>
              <p class="date-block__week-day">${dateOnWeekDay(
                getTodaysDate()
              )}</p>
            </div>
            <div class="now-weather__max-min-temperature max-min-temperature">
              <div class="max-min-temperature__max-temperature max-temperature">
                <div class="max-temperature__temperature-item temperature-item">
                  <h2 class="temperature-item__temperature">${Math.floor(
                    data.main.temp_max
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
                    data.main.temp_min
                  )}</h2>
                  <div class="temperature-item__units">
                    <p class="temperature-item__deg">o</p>
                    <p class="temperature-item__unit">C</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="now-weather__forecast-hourly forecast-hourly">
          <ul class="forecast-hourly__list">
            ${createForecastHourlyItems(forecast)}
          </ul>
        </div>
      </div>
    `

  weatherNow.innerHTML = weatherNowHTML

  return weatherNow
}

export default createWeatherNow
