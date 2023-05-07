const getWeatherForecastData = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=1a8b3272acee1362eaa9611b0e1ba92f&lang=ru&units=metric&cnt=40`
    )
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}

export default getWeatherForecastData
