import { useState, useEffect, useContext, useRef } from 'react'
import { MyContext } from '../../context/TheContext.jsx'
import currentDate from '../../functions/currentDate'
import changeFormatDate from '../../functions/changeFormatDate'
import '../../sass/componentSass/elementsForms/DateElem_PB.scss'


function DateElem_PB({ elementID, orderInBlock, labelElement, required, disabled = false, response, placeholder, size, position,
  borderElement, colorElement, fontSizeElement, setDate }) {
  const theContext = useContext(MyContext)
  const [responseDate, setResponseDate] = useState(response[0])
  const [valueOfDate, setValueOfDate] = useState(currentDate().Date_DD_MM_YY)
  const elementRef = useRef(null)
  const OrderRef = useRef(null)
  const RowYRef = useRef(null)
  const ColXRef = useRef(null)

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
    <div ref={elementRef} className={`contDateElement form-group container-fluid d-flex flex-row justify-content-start align-items-center m-0 p-1
    ${borderElement ? "border-1 border-secondary" : "border-0"}`}

      data-bs-toggle="tooltip" data-bs-html="false" data-bs-placement="bottom" data-bs-offset="10,15" data-bs-animation="true"
      data-bs-delay={{ "show": 500, "hide": 100 }}
      data-bs-customClass="bg-danger text-primary"
      data-bs-template={`
    <div className="tooltip" role="tooltip">
      <div className="tooltip-arrow">
      </div>
      <div className="tooltip-inner">
      </div>
    </div>`}
      title={`Order: ${orderInBlock}       Position: X = ${position.colElem}  Y = ${position.rowElem}`} >

      <label htmlFor={elementID} className="form-label labelOfForm d-flex flex-row justify-content-end align-items-center me-1"
        style={{ color: colorElement, fontSize: fontSizeElement }} >
        {labelElement}
      </label>

      <input id={elementID} type="date" className={`contInputDate form-control text-center rounded-0 ${disabled ? "NotActiv" : "Activ"}`}
        required={required} disabled={disabled} placeholder={placeholder} size={size} value={valueOfDate} onChange={(ev) => handleChange(ev)} />
    </div>
  )
}

export default DateElem_PB;