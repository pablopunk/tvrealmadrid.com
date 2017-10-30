const moment = require('moment')

const translateDate = (date, lang = 'en') => {
  moment.locale(lang)
  return moment(date).format('LLL')
}

module.exports.date = translateDate
