import { useState, useEffect } from 'react'
import '../../sass/componentSass/elementsForms/RadioButtonElem_PB.scss'

function Radiobutton_PB({ elementID, labelElement, name, required, disabled = false, checked = false, response, setRadioButton }) {
  const [responseRadioButton, setResponseRadioButton] = useState(response[0])
  const [valueOfRadioButton, setValueOfRadioButton] = useState(checked)

  useEffect(() => {
    setValueOfRadioButton(checked)
    setRadioButton(checked)
  }, [])

  function handleChange(ev) {
    // ev.preventDefault();
    setValueOfRadioButton(ev.target.checked);
    setRadioButton(ev.target.checked);
  }


  return (
    <div className="contRadioButtonElement form-check form-group container-fluid d-flex flex-row justify-content-start align-items-center m-0 p-1
    border border-1 border-secondary">
      <input id={elementID} type="radio" className="form-check-input contRadioButton" name={name} required={required} disabled={disabled}
        checked={valueOfRadioButton} onChange={(ev) => handleChange(ev)} />
      <label className="form-check-label labelOfForm d-flex flex-row justify-content-end align-items-center" htmlFor={elementID}>
        {labelElement}
      </label>
    </div>
  )
}

export default Radiobutton_PB;