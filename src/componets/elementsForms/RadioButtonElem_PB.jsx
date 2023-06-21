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
    <div className="contRadioButtonElement form-check">
      <input id={elementID} type="radio" className="form-check-input contRadioButton p-1" name={name} required={required} disabled={disabled}
        checked={valueOfRadioButton} onChange={(ev) => handleChange(ev)} />
      <label className="form-check-label labelOfForm" htmlFor={elementID}>
        {labelElement}
      </label>
    </div>
  )
}

export default Radiobutton_PB;