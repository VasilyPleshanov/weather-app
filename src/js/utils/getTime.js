const getTime = (date) => {
  let time = date.split(' ')[1].split('').slice(0, 5).join('')
  return time
}

export default getTime
