import { useState, useEffect } from 'react'
import RadioButtonElem_PB from './RadioButtonElem_PB'
import '../../sass/componentSass/elementsForms/RadioButtons_PB.scss'


function RadioButtons_PB({ elementID, legend, required, disabled = false, name, radioButtons, response, placeholder, setRadioButtons }) {
  const [responseText, setResponseText] = useState(response[0])
  const [valueOfRadioButtons, setValueOfRadioButtons] = useState("")

  useEffect(() => {
    setValueOfRadioButtons(placeholder)
    // setRadioButtons(valueOfRadioButtons)
  }, [])

  function handleChange(ev) {
    ev.preventDefault();
    setValueOfRadioButtons(ev.target.value);
    setRadioButtons(valueOfRadioButtons);
  }

  return (
    <div className="contRadioButtons form-group m-0 p-1
    border border-1 border-secondary form-floating" id={elementID}>
      <fieldset className="container-fluid d-flex flex-column justify-content-start align-items-start">
        <legend className="text-black p-1">{legend}</legend>
        <ul className="list-group list-group-flush contUL p-0 m-0">
          {
            radioButtons.map(radio => {
              return (
                <li key={radio.elementID} className="list-group-item m-0 px-1" >
                  <RadioButtonElem_PB
                    elementID={radio.elementID}
                    labelElement={radio.labelElement}
                    name={name}
                    required={radio.required}
                    disabled={radio.disabled}
                    checked={radio.checked}
                    response={radio.response}
                    setRadioButton={radio.setRadioButton}
                  />
                </li>
              )
            })
          }
        </ul>
      </fieldset>
    </div>
  )
}

export default RadioButtons_PB;