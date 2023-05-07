const dateOnWeekDay = (date) => {
  const weekDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
  let dateArray = date.split(' ')[0].split('-')

  let monthNumberArray = date.split(' ')[0].split('-')[1].split('')
  let monthNumber = ''
  if (monthNumberArray[0] == '0') {
    monthNumber = monthNumberArray[1]
  } else {
    monthNumber = monthNumberArray.join('')
  }

  let newDate = new Date(dateArray[0], monthNumber - 1, dateArray[2])
  let weekDay = weekDays[newDate.getDay()]

  return weekDay
}

export default dateOnWeekDay
