const months = {
  Jan: 'Enero',
  Feb: 'Febrero',
  Mar: 'Marzo',
  Apr: 'Abril',
  May: 'Mayo',
  Jun: 'Junio',
  Jul: 'Julio',
  Aug: 'Agosto',
  Sep: 'Septiembre',
  Oct: 'Octubre',
  Nov: 'Noviembre',
  Dec: 'Diciembre'
}
const translateDate = date => {
  for (const month in months) {
    date = date.replace(month, months[month])
  }
  return date
}

module.exports.date = translateDate
