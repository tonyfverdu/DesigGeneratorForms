import React from 'react'
import RadioButtonElem_PB from './RadioButtonElem_PB'
import '../../sass/componentSass/elementsForms/RadioButtons_PB.scss'


function RadioButtons_PB({ elementID, legend, name, radioButtons }) {
  return (
    <div className="contRadioButtons form-group d-flex flex-column justify-content-start align-items-start m-0 p-1
    border border-1 border-secondary form-floating" id={elementID}>
      <fieldset className="d-flex flex-column justify-content-start align-items-start ">
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