import createHeader from './components/Header.js'
import createMain from './components/Main.js'
import createFooter from './components/Footer.js'

const renderWeatherContent = (weather, forecast) => {
  document.querySelector('#root').innerHTML = ''

  const weatherApp = document.createElement('div')
  weatherApp.classList.add('weather')

  const header = createHeader(weather)
  const main = createMain(weather, forecast)
  const footer = createFooter(weather)

  weatherApp.append(header, main, footer)

  document.querySelector('#root').append(weatherApp)
}

export default renderWeatherContent
