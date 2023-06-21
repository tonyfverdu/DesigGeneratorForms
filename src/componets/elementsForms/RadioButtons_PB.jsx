import React, {useState} from 'react'
import RadioButtonElem_PB from './RadioButtonElem_PB'
import '../../sass/componentSass/elementsForms/RadioButtons_PB.scss'



function RadioButtons_PB({ elementID, legend, name, radioButtons }) {
  // const numberRadioButtons = radioButtons.length;
  const [arrayRB, setArrayRB] = useState(radioButtons)

  return (
    <div className="contRadioButtons container-fluid form-check p-1">
      <fieldset className="d-flex">
        <legend className="text-black">{legend}</legend>
        <ul className="list-group list-group-flush contUL">
          {
            arrayRB.map(radio => {
              return (
                <li key={radio.elementID} className="list-group-item" >
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