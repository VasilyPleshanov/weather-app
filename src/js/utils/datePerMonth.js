const datePerMonth = (date) => {
  const months = [
    'янв',
    'фев',
    'мар',
    'апр',
    'мая',
    'июн',
    'июл',
    'авг',
    'сен',
    'окт',
    'ноя',
    'дек',
  ]

  let monthNumberArray = date.split(' ')[0].split('-')[1].split('')

  let monthNumber = ''
  if (monthNumberArray[0] == '0') {
    monthNumber = monthNumberArray[1]
  } else {
    monthNumber = monthNumberArray.join('')
  }

  let month = months.filter((elem, index, arr) => {
    if (index + 1 == monthNumber) {
      return true
    }
  })

  return month
}

export default datePerMonth
