import { useState, useEffect } from 'react'
import currentDate from '../../functions/currentDate'
import changeFormatDate from '../../functions/changeFormatDate'
import '../../sass/componentSass/elementsForms/DateElem_PB.scss'


function DateElem_PB({ elementID, labelElement, required, disabled, response, placeholder, setDate }) {
  const [responseDate, setResponseDate] = useState(response[0])
  const [valueOfDate, setValueOfDate] = useState(currentDate().Date_DD_MM_YY)

  useEffect(() => {
    // console.log('Heute is:  ', currentDate().Date_DD_MM_YY, " und die Uhr ist:  ", currentDate().Time_HH_MM_SS)
    setDate(placeholder)
    setValueOfDate(placeholder)
  }, [])

  function handleChange(ev) {
    ev.preventDefault();
    // const newDateWithFormat = changeFormatDate(ev.target.value)
    // setValueOfDate(newDateWithFormat);
    setValueOfDate(ev.target.value)
    setDate(valueOfDate);
  }

  return (
    <div className="contDateElement form-group container-fluid d-flex flex-row justify-content-start align-items-center m-0 p-1
    border border-1 border-secondary">
      <label htmlFor={elementID} className="form-label labelOfForm d-flex flex-row justify-content-end align-items-center">{labelElement}</label>
      <input id={elementID} type="date" className="contInputDate form-control text-center rounded-0" required={required} 
      disabled={disabled} placeholder={placeholder} value={valueOfDate} onChange={(ev) => handleChange(ev)} />
    </div>
  )
}

export default DateElem_PB;