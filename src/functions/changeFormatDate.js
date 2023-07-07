function changeFormatDate(parDateYYYYMMDD) {
  let dateChangeFormat = {
    year: "",
    month: "",
    day: "",
    newFormatDateDDMMYYYY: ""
  }

  if (typeof parDateYYYYMMDD === 'string') {
    dateChangeFormat.year = parDateYYYYMMDD.slice(0, 4)
    dateChangeFormat.month = parDateYYYYMMDD.slice(5, 7)
    dateChangeFormat.day = parDateYYYYMMDD.slice(-2)

    dateChangeFormat.newFormatDateDDMMYYYY = dateChangeFormat.day + "-" + dateChangeFormat.month + "-" + dateChangeFormat.year 
  } else {
    console.error('The parameter of the function "changeFormatDate" must be a string format data!!')
    dateChangeFormat = null
  }
  return dateChangeFormat.newFormatDateDDMMYYYY
}

export default changeFormatDate;