import getWeatherData from './API/getWeatherData.js'
import getWeatherForecastData from './API/getWeatherForecastData.js'
import renderWeatherContent from './renderWeatherContent.js'
import createWeatherModal from './components/WeatherModal.js'

const handlerWeatherByGeolocation = () => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  }

  const success = async (pos) => {
    const crd = pos.coords

    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/reverse?lat=${crd.latitude}&lon=${crd.longitude}&lang=ru&apiKey=e0502ac96abf4f3190d9ac7c5a80cb44`
    )
    const result = await response.json()

    const weather = await getWeatherData(result.features[0].properties.city)
    const forecast = await getWeatherForecastData(
      result.features[0].properties.city
    )
    localStorage.setItem(
      'city',
      JSON.stringify(result.features[0].properties.city)
    )
    renderWeatherContent(weather, forecast)
  }

  const error = async (error) => {
    const city = 'Сочи'

    const weather = await getWeatherData(
      JSON.parse(localStorage.getItem('city')) || city
    )
    const forecast = await getWeatherForecastData(
      JSON.parse(localStorage.getItem('city')) || city
    )

    const modal = createWeatherModal(
      'Включите службу определения местоположения для получения метеорологических даных для текущего местоположения'
    )

    renderWeatherContent(weather, forecast)
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
  }

  navigator.geolocation.getCurrentPosition(success, error, options)
}

export default handlerWeatherByGeolocation
