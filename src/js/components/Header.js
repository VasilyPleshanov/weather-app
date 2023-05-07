import handlerWeatherByGeolocation from '../handlerWeatherByGeolocation.js'
import renderWeatherContent from '../renderWeatherContent.js'
import createWeatherModal from './WeatherModal.js'
import getWeatherData from '../API/getWeatherData.js'
import getWeatherForecastData from '../API/getWeatherForecastData.js'

const createHeader = (data) => {
  const header = document.createElement('header')
  header.classList.add('weather__header', 'header-weather')

  const headerHTML = `
    <div class="header-weather__container">
      <div class="header-weather__city city-weather">
        <h1 class="city-weather__name">${data.name}</h1>
        <div class="city-weather__inner">
        
          <form class="search">
            <input class="search__input">
            <input class="search__btn" type="submit" value="OK"/>
            <p class="search__error"><p/>
          </form>
          
          <button class="city-weather__change"><i class="fa-solid fa-magnifying-glass"></i></button>
          <button class="city-weather__location"><i class="fa-solid fa-location-arrow"></i></i><span>Мое местоположение</span></button>
        </div>
      </div>
    </div>
  `

  header.innerHTML = headerHTML

  const search = header.querySelector('.search')
  const input = header.querySelector('.search__input')
  const changeBtn = header.querySelector('.city-weather__change')
  const locationBtn = header.querySelector('.city-weather__location')
  const cityName = header.querySelector('.city-weather__name')

  locationBtn.addEventListener('click', () => {
    handlerWeatherByGeolocation()
  })

  changeBtn.addEventListener('click', () => {
    search.classList.add('_show')
    changeBtn.classList.add('_hide')
    cityName.classList.add('_hide')
    locationBtn.classList.add('_hide')
    setTimeout(() => {
      input.focus()
    }, 0)
  })

  search.addEventListener('submit', async (event) => {
    event.preventDefault()
    if (!input.value) return
    try {
      const weather = await getWeatherData(input.value.trimEnd())
      const forecast = await getWeatherForecastData(input.value.trimEnd())

      if (weather.message) {
        const modal = createWeatherModal('Город не найден, попробуйте снова')
        document.querySelector('.weather').append(modal)

        setTimeout(() => {
          modal.classList.add('show')
        }, 500)
        setTimeout(() => {
          modal.classList.remove('show')
        }, 5000)
        setTimeout(() => {
          modal.remove()
        }, 6000)
      } else {
        localStorage.setItem('city', JSON.stringify(input.value.trimEnd()))
        renderWeatherContent(weather, forecast)
      }
    } catch (error) {}
  })

  window.onclick = (e) => {
    if (
      e.target.classList.contains('search__input') ||
      e.target.classList.contains('search__btn') ||
      e.target.classList.contains('search__error') ||
      e.target.classList.contains('city-weather__location') ||
      e.target.classList.contains('city-weather__change') ||
      e.target.parentNode.classList.contains('city-weather__change')
    ) {
      return
    } else {
      search.classList.remove('_show')
      changeBtn.classList.remove('_hide')
      cityName.classList.remove('_hide')
      locationBtn.classList.remove('_hide')
      input.value = ''
    }
  }

  return header
}

export default createHeader
