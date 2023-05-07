const createFooter = (data) => {
  const footer = document.createElement('footer')
  footer.classList.add('weather__footer', 'footer-weather')

  const footerHTML = `
    <div class="footer-weather__container">
      <ul class="footer-weather__list">
        <li class="footer-weather__item">
          <p class="footer-weather__title">Влажность</p>
          <p class="footer-weather__text">${data.main.humidity} %</p>
        </li>
        <li class="footer-weather__item">
          <p class="footer-weather__title">Давление</p>
          <p class="footer-weather__text">${data.main.pressure} мм рт. ст.</p>
        </li>
        <li class="footer-weather__item">
          <p class="footer-weather__title">Ветер</p>
          <p class="footer-weather__text">${Math.floor(data.wind.speed)} м/с</p>
        </li>
        <li class="footer-weather__item">
          <p class="footer-weather__title">Облачность</p>
          <p class="footer-weather__text">${data.clouds.all} %</p>
        </li>
      </ul>
    </div>
  `

  footer.innerHTML = footerHTML
  return footer
}

export default createFooter
