const months = {
  'January': 'Enero',
  'February': 'Febrero',
  'March': 'Marzo',
  'April': 'Abril',
  'May': 'Mayo',
  'June': 'Junio',
  'July': 'Julio',
  'August': 'Agosto',
  'September': 'Septiembre',
  'October': 'Octubre',
  'November': 'Noviembre',
  'December': 'Diciembre'
}
const translateDate = date => {
  for (const month in months) {
    date = date.replace(month, months[month])
  }
  return date
}

module.exports.date = translateDate
