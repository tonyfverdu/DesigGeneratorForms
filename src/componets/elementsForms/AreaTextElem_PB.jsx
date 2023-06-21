import { useState, useEffect } from 'react'
import '../../sass/componentSass/elementsForms/AreaTextElem_PB.scss'


function AreaTextElem_PB({ elementID, labelElement, required, disabled = false, readonly, response, placeholder, row, cols, setAreaText }) {
  const [responseAreaText, setResponseAreaText] = useState(response[0])
  const [valueOfAreaText, setValueOfAreaText] = useState("")

  useEffect(() => {
    setValueOfAreaText(placeholder)
    setAreaText(valueOfAreaText)
  }, [])


  function handleChange(ev) {
    ev.preventDefault();
    setValueOfAreaText(ev.target.value);
    setAreaText(valueOfAreaText)
  }


  return (
    <div className="contAreaTextElement container-fluid d-flex flex-row justify-content-start align-items-center form-floating p-1">
      <label htmlFor={elementID} className="labelOfForm form-label d-flex flex-row justify-content-end align-items-center">{labelElement}</label>
      <textarea id={elementID}
        className={`form-control ${disabled ? "areaTextNotActiv" : "areaTextActiv"}`} required={required} disabled={disabled} 
        autoComplete="off" readOnly={readonly} placeholder={placeholder}
        rows={row} cols={cols} value={valueOfAreaText} onChange={(ev) => handleChange(ev)}></textarea>
    </div>
  )
}

export default AreaTextElem_PB;