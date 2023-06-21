import { useState, useEffect } from 'react'
import '../../sass/componentSass/elementsForms/CheckboxElem_PB.scss'


function CheckboxElem_PB({ elementID, labelElement, required, disabled = false, checked = false, response, setCheckbox }) {
  const [responseCheckbox, setResponseCheckbox] = useState(response[0])
  const [valueOfCheckbox, setValueOfCheckbox] = useState(checked)

  useEffect(() => {
    setValueOfCheckbox(checked)
    setCheckbox(checked)
  }, [])

  function handleChange(ev) {
    // ev.preventDefault();
    setValueOfCheckbox(ev.target.checked);
    setCheckbox(ev.target.checked);
    
  }

  return (
    <div className="contCheckboxElement form-check p-1">
      {/* <fieldset> */}
      {/* <legend>Choose your monster's features:</legend> */}
      <input id={elementID} type="checkbox" className="form-check-input contCheckbox p-1" required={required} disabled={disabled}
        checked={valueOfCheckbox} onChange={(ev) => handleChange(ev)} />
      <label className="form-check-label labelOfForm" htmlFor={elementID}>
        {labelElement}
      </label>
      {/* </fieldset> */}
    </div>
  )
}

export default CheckboxElem_PB;

/*
<div className="contCheckboxElement container-fluid d-flex flex-row justify-content-around align-items-center p-1">

     <input id={elementID} type="checkbox" className="form-check-input" required={required} disabled={disabled}
        checked={checked} value={valueOfCheckbox} onChange={(ev) => handleChange(ev)} />
*/