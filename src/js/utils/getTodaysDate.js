const getTodaysDate = () => {
  let todayDate = new Date()
  let formattedDate = todayDate.toISOString().split('').splice(0, 10).join('')
  return formattedDate
}

export default getTodaysDate
