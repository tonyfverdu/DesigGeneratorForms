import { useState, useEffect } from 'react'
import '../../sass/componentSass/elementsForms/NumberElem_PB.scss'

function NumberElem_PB({ elementID, labelElement, required, disabled = false, response, placeholder, size, setNumber }) {
  const [responseNumber, setResponseNumber] = useState(response[0])
  const [valueOfNumber, setValueOfNumber] = useState(0)

  useEffect(() => {
    setNumber(placeholder)
    setValueOfNumber(placeholder)
  }, [])

  function handleChange(ev) {
    ev.preventDefault();
    setValueOfNumber(ev.target.value);
    setNumber(valueOfNumber);
  }

  return (
    <div className="contNumberElement container-fluid d-flex flex-row justify-content-start align-items-center p-1">
      <label htmlFor={elementID} className="labelOfForm form-label d-flex flex-row justify-content-end align-items-center">{labelElement}</label>
      <input id={elementID} type="number" className="contInputNumber form-control text-center fs-6" required={required} disabled={disabled} placeholder={placeholder} size={size}
        min="0" max={Math.pow(10, size) - 1} value={valueOfNumber} onChange={(ev) => handleChange(ev)} />
    </div>
  )
}

export default NumberElem_PB;