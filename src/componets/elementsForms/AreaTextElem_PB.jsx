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
    <div className="contAreaTextElement form-group container-fluid d-flex flex-column justify-content-start align-items-start m-0 p-1
    border border-1 border-secondary form-floating">
      <label htmlFor={elementID} className="form-check-label labelOfForm d-flex flex-row justify-content-end align-items-center">{labelElement}</label>
      <textarea id={elementID}
        className={`form-control p-0 ${disabled ? "areaTextNotActiv" : "areaTextActiv"}`} required={required} disabled={disabled} 
        autoComplete="off" readOnly={readonly} placeholder={placeholder}
        rows={row} cols={cols} value={valueOfAreaText} onChange={(ev) => handleChange(ev)}></textarea>
    </div>
  )
}

export default AreaTextElem_PB;