const dateOnMonthDay = (date) => {
  let numberArray = date.split(' ')[0].split('-')[2].split('')

  let monthDay = ''
  if (numberArray[0] == '0') {
    monthDay = numberArray[1]
  } else {
    monthDay = numberArray.join('')
  }

  return monthDay
}

export default dateOnMonthDay
