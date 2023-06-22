import { useState, useEffect, useContext } from 'react'
import { MyContext } from '../context/TheContext.jsx'

import LabelElem_PB from '../componets/elementsForms/LabelElem_PB'
import TextElem_PB from '../componets/elementsForms/TextElem_PB'
import PhoneElem_PB from '../componets/elementsForms/PhoneElem_PB'
import EmailElem_PB from '../componets/elementsForms/EmailElem_PB'
import NumberElem_PB from '../componets/elementsForms/NumberElem_PB'
import DateElem_PB from '../componets/elementsForms/DateElem_PB'
import AreaTextElem_PB from '../componets/elementsForms/AreaTextElem_PB'
import SelectElement_PB from '../componets/elementsForms/SelectElem_PB'
import CheckboxElem_PB from '../componets/elementsForms/CheckboxElem_PB'
import RadioButtonElem_PB from '../componets/elementsForms/RadioButtonElem_PB'


function ShowElements() {
  const [elementShow, setElementShow] = useState({})
  const theContext = useContext(MyContext);

  switch (theContext.objComponent.type) {
    case "label":
      return (
        <LabelElem_PB
          elementID={theContext.objComponent.elementID}
          required={theContext.objComponent.required}
          disabled={theContext.objComponent.disabled}
          response={theContext.objComponent.response}
          placeholder={theContext.objComponent.placeholder}
          size={theContext.objComponent.size}
        />
      )
    case "text":
      return (
        <TextElem_PB
          elementID={theContext.objComponent.elementID}
          labelElement={theContext.objComponent.labelElement}
          required={theContext.objComponent.required}
          disabled={theContext.objComponent.disabled}
          response={theContext.objComponent.response}
          placeholder={theContext.objComponent.placeholder}
          size={theContext.objComponent.size}
          setText={theContext.objComponent.setComponent}
        />
      )
    case "number":
      return (
        <NumberElem_PB
          elementID={theContext.objComponent.elementID}
          labelElement={theContext.objComponent.labelElement}
          required={theContext.objComponent.required}
          disabled={theContext.objComponent.disabled}
          response={theContext.objComponent.response}
          placeholder={theContext.objComponent.placeholder}
          size={theContext.objComponent.size}
          setNumber={theContext.objComponent.setComponent}
        />
      )
    case "date":
      return (
        <DateElem_PB
          elementID={theContext.objComponent.elementID}
          labelElement={theContext.objComponent.labelElement}
          required={theContext.objComponent.required}
          disabled={theContext.objComponent.disabled}
          response={theContext.objComponent.response}
          placeholder={theContext.objComponent.placeholder}
          setDate={theContext.objComponent.setComponent}
        />
      )
    case "phone":
      return (
        <PhoneElem_PB
          elementID={theContext.objComponent.elementID}
          labelElement={theContext.objComponent.labelElement}
          required={theContext.objComponent.required}
          disabled={theContext.objComponent.disabled}
          response={theContext.objComponent.response}
          placeholder={theContext.objComponent.placeholder}
          size={theContext.objComponent.size}
          setPhone={theContext.objComponent.setComponent}
        />
      )
    case "email":
      return (
        <EmailElem_PB
          elementID={theContext.objComponent.elementID}
          labelElement={theContext.objComponent.labelElement}
          required={theContext.objComponent.required}
          disabled={theContext.objComponent.disabled}
          response={theContext.objComponent.response}
          placeholder={theContext.objComponent.placeholder}
          size={theContext.objComponent.size}
          setEmail={theContext.objComponent.setComponent}
        />
      )
    case "textArea":
      return (
        <AreaTextElem_PB
          elementID={theContext.objComponent.elementID}
          labelElement={theContext.objComponent.labelElement}
          required={theContext.objComponent.required}
          disabled={theContext.objComponent.disabled}
          readonly={theContext.objComponent.readonly}
          response={theContext.objComponent.response}
          placeholder={theContext.objComponent.placeholder}
          row={theContext.objComponent.row}
          col={theContext.objComponent.col}
          setAreaText={theContext.objComponent.setComponent}
        />
      )
    case "select":
      return (
        <SelectElement_PB
          elementID={theContext.objComponent.elementID}
          labelElement={theContext.objComponent.labelElement}
          required={theContext.objComponent.required}
          disabled={theContext.objComponent.disabled}
          response={theContext.objComponent.response}
          optionsValues={theContext.objComponent.optionsValues}
          setSelect={theContext.objComponent.setComponent}
        />
      )
    case "checkbox":
      return (
        <CheckboxElem_PB
          elementID={theContext.objComponent.elementID}
          labelElement={theContext.objComponent.labelElement}
          required={theContext.objComponent.required}
          disabled={theContext.objComponent.disabled}
          checked={theContext.objComponent.checked}
          response={theContext.objComponent.response}
          setCheckbox={theContext.objComponent.setComponent}
        />
      )
    case "radioButtons":
      return (
        <div className="contRadioButtons container-fluid form-check p-1">
          <fieldset className="d-flex">
            <legend className="text-black">{theContext.objComponent.legend}</legend>
            <ul className="list-group list-group-flush contUL">
              {
                theContext.objComponent.radioButtons.map(radio => {
                  return (
                    <li key={radio.elementID} className="list-group-item" >
                      <RadioButtonElem_PB
                        elementID={radio.elementID}
                        labelElement={radio.labelElement}
                        name={radio.name}
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
    default:
      break;
  }

}

export default ShowElements;