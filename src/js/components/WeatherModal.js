const createWeatherModal = (text) => {
  const weatherModal = document.createElement('div')
  weatherModal.classList.add('weather__modal', 'modal-weather')

  const weatherModalHTML = `
    <p class="modal-weather__text">${text}</p>
  `

  weatherModal.innerHTML = weatherModalHTML

  return weatherModal
}

export default createWeatherModal
