import { useState, useEffect, useContext, useRef } from 'react'
import { MyContext } from '../../context/TheContext.jsx'
import RadioButtonElem_PB from './RadioButtonElem_PB'
import '../../sass/componentSass/elementsForms/RadioButtons_PB.scss'


function RadioButtons_PB({ id_Element, legend, required, disabled = false, name, radioButtons, response, placeholder, setRadioButtons }) {
  const theContext = useContext(MyContext)
  const [responseText, setResponseText] = useState(response[0])
  const [valueOfRadioButtons, setValueOfRadioButtons] = useState("")
  const elementRef = useRef(null)
  const OrderRef = useRef(null)
  const RowYRef = useRef(null)
  const ColXRef = useRef(null)

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
    <div ref={elementRef} id={id_Element} className="contRadioButtons form-group m-0 p-1
    border border-1 border-secondary form-floating"

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
        
      <fieldset className="container-fluid d-flex flex-column justify-content-start align-items-start">
        <legend className="text-black p-1">{legend}</legend>
        <ul className="list-group list-group-flush contUL p-0 m-0">
          {
            radioButtons.map(radio => {
              return (
                <li key={radio.id_Element} className="list-group-item m-0 px-1" >
                  <RadioButtonElem_PB
                    id_Element={radio.id_Element}
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