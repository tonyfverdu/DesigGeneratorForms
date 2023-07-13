import { useState, useEffect, useContext } from 'react'
import { MyContext } from '../../context/TheContext.jsx'

import MasterElem_PB from '../elementsForms/MasterElem_PB.jsx'
import LabelElem_PB from '../elementsForms/LabelElem_PB.jsx'
import TextElem_PB from '../elementsForms/TextElem_PB.jsx'
import PhoneElem_PB from '../elementsForms/PhoneElem_PB.jsx'
import EmailElem_PB from '../elementsForms/EmailElem_PB.jsx'
import NumberElem_PB from '../elementsForms/NumberElem_PB.jsx'
import DateElem_PB from '../elementsForms/DateElem_PB.jsx'
import AreaTextElem_PB from '../elementsForms/AreaTextElem_PB.jsx'
import SelectElement_PB from '../elementsForms/SelectElem_PB.jsx'
import CheckboxElem_PB from '../elementsForms/CheckboxElem_PB.jsx'
// import RadioButtonElem_PB from '../elementsForms/RadioButtonElem_PB.jsx'
import RadioButtons_PB from '../elementsForms/RadioButtons_PB.jsx'
import IconoElem_PB from '../elementsForms/IconoElem_PB.jsx'


function ShowElements({ type_Element, componentSelect }) {
  const theContext = useContext(MyContext);
  const [elementOut, setElementOut] = useState(null)

  function selectElementShow(parTypeElement) {
    if (typeof parTypeElement === "string") {
      switch (type_Element) {
        case "master":
          setElementOut(
            <MasterElem_PB
              id_Element={componentSelect.id_Element}
              placeholder={componentSelect.placeholder}
              width={componentSelect.dimension.width}
              disabled={false}
            />
          )
          break;
        case "label":
          setElementOut(
            <LabelElem_PB
              id_Element={componentSelect.id_Element}
              orderInBlock={componentSelect.orderInBlock}
              required={componentSelect.required}
              disabled={componentSelect.disabled}
              response={componentSelect.response}
              placeholder={componentSelect.placeholder}
              size={componentSelect.size}
              position={componentSelect.position}
              width={componentSelect.dimension.width}
              borderElement={componentSelect.borderElement}
              colorElement={componentSelect.colorElement}
              fontSizeElement={componentSelect.fontSizeElement}
            />
          )
          break;
        case "text":
          setElementOut(
            <TextElem_PB
              id_Element={componentSelect.id_Element}
              orderInBlock={componentSelect.orderInBlock}
              labelElement={componentSelect.labelElement}
              required={componentSelect.required}
              disabled={componentSelect.disabled}
              response={componentSelect.response}
              placeholder={componentSelect.placeholder}
              size={componentSelect.size}
              position={componentSelect.position}
              borderElement={componentSelect.borderElement}
              colorElement={componentSelect.colorElement}
              fontSizeElement={componentSelect.fontSizeElement}
              setText={theContext.setText}
            />
          )
          break;
        case "number":
          setElementOut(
            <NumberElem_PB
              id_Element={componentSelect.id_Element}
              orderInBlock={componentSelect.orderInBlock}
              labelElement={componentSelect.labelElement}
              required={componentSelect.required}
              disabled={componentSelect.disabled}
              response={componentSelect.response}
              placeholder={componentSelect.placeholder}
              size={componentSelect.size}
              position={componentSelect.position}
              borderElement={componentSelect.borderElement}
              colorElement={componentSelect.colorElement}
              fontSizeElement={componentSelect.fontSizeElement}
              setNumber={theContext.setNumber}
            />
          )
          break;
        case "date":
          setElementOut(
            <DateElem_PB
              id_Element={componentSelect.id_Element}
              orderInBlock={componentSelect.orderInBlock}
              labelElement={componentSelect.labelElement}
              required={componentSelect.required}
              disabled={componentSelect.disabled}
              response={componentSelect.response}
              placeholder={componentSelect.placeholder}
              size={componentSelect.size}
              position={componentSelect.position}
              borderElement={componentSelect.borderElement}
              colorElement={componentSelect.colorElement}
              fontSizeElement={componentSelect.fontSizeElement}
              setDate={theContext.setDate}
            />
          )
          break;
        case "phone":
          setElementOut(
            <PhoneElem_PB
              id_Element={componentSelect.id_Element}
              orderInBlock={componentSelect.orderInBlock}
              labelElement={componentSelect.labelElement}
              required={componentSelect.required}
              disabled={componentSelect.disabled}
              response={componentSelect.response}
              placeholder={componentSelect.placeholder}
              size={componentSelect.size}
              position={componentSelect.position}
              borderElement={componentSelect.borderElement}
              colorElement={componentSelect.colorElement}
              fontSizeElement={componentSelect.fontSizeElement}
              setPhone={theContext.setPhone}
            />
          )
          break;
        case "email":
          setElementOut(
            <EmailElem_PB
              id_Element={componentSelect.id_Element}
              orderInBlock={componentSelect.orderInBlock}
              labelElement={componentSelect.labelElement}
              required={componentSelect.required}
              disabled={componentSelect.disabled}
              response={componentSelect.response}
              placeholder={componentSelect.placeholder}
              size={componentSelect.size}
              position={componentSelect.position}
              borderElement={componentSelect.borderElement}
              colorElement={componentSelect.colorElement}
              fontSizeElement={componentSelect.fontSizeElement}
              setEmail={theContext.setEmail}
            />
          )
          break;
        case "textArea":
          setElementOut(
            <AreaTextElem_PB
              id_Element={componentSelect.id_Element}
              orderInBlock={componentSelect.orderInBlock}
              labelElement={componentSelect.labelElement}
              required={componentSelect.required}
              disabled={componentSelect.disabled}
              readonly={componentSelect.readonly}
              response={componentSelect.response}
              placeholder={componentSelect.placeholder}
              row={componentSelect.row}
              col={componentSelect.col}
              position={componentSelect.position}
              borderElement={componentSelect.borderElement}
              colorElement={componentSelect.colorElement}
              fontSizeElement={componentSelect.fontSizeElement}
              setAreaText={theContext.setTextArea}
            />
          )
          break;
        case "select":
          setElementOut(
            <SelectElement_PB
              id_Element={componentSelect.id_Element}
              orderInBlock={componentSelect.orderInBlock}
              labelElement={componentSelect.labelElement}
              required={componentSelect.required}
              disabled={componentSelect.disabled}
              response={componentSelect.response}
              placeholder={componentSelect.placeholder}
              size={componentSelect.size}
              position={componentSelect.position}
              borderElement={componentSelect.borderElement}
              colorElement={componentSelect.colorElement}
              fontSizeElement={componentSelect.fontSizeElement}
              optionsValues={componentSelect.optionsValues}
              setSelect={theContext.setSelect}
            />
          )
          break;
        case "checkbox":
          setElementOut(
            <CheckboxElem_PB
              id_Element={componentSelect.id_Element}
              orderInBlock={componentSelect.orderInBlock}
              labelElement={componentSelect.labelElement}
              required={componentSelect.required}
              disabled={componentSelect.disabled}
              checked={componentSelect.checked}
              response={componentSelect.response}
              position={componentSelect.position}
              borderElement={componentSelect.borderElement}
              colorElement={componentSelect.colorElement}
              fontSizeElement={componentSelect.fontSizeElement}
              setCheckbox={theContext.setCheckbox}
            />
          )
          break;
        case "radioButtons":
          setElementOut(
            <RadioButtons_PB
              id_Element={componentSelect.id_Element}
              orderInBlock={componentSelect.orderInBlock}
              legend={componentSelect.legend}
              required={componentSelect.required}
              disabled={componentSelect.disabled}
              name={componentSelect.name}
              radioButtons={componentSelect.radioButtons}
              response={componentSelect.response}
              placeholder={componentSelect.placeholder}
              position={componentSelect.position}
            // setRadioButtons={componentSelect.setComponent}
            />
          )
          break;
        case "icon":
          setElementOut(
            <IconoElem_PB
              id_Element={componentSelect.id_Element}
              orderInBlock={componentSelect.orderInBlock}
              required={componentSelect.required}
              disabled={componentSelect.disabled}
              name={componentSelect.name}
              widthImage={componentSelect.widthImage}
              position={componentSelect.position}
              borderElement={componentSelect.borderElement}
              srcURLIcon={componentSelect.srcURLIcon}
              nameImage={componentSelect.nameImage}
              setIcon={theContext.setIcon}
            />
          )
          break;
        default:
          break;
      }
    } else {
      console.error('Error:  the argument of the function "selectElementShow" must be a string!!')
    }
  }

  useEffect(() => {
    selectElementShow(type_Element)
  }, [type_Element])

  return (
    <div className="container-fluid d-flex flex-row justify-content-between align-items-center gap-1">
      <div className="row">
        <h6 className="col-2 text-primary fw-bold pt-2 me-1" style={{ fontSize: "0.8rem" }}>
          {type_Element}
        </h6>
        <div className="col-12 graycolor400 ms-2" style={{ fontSize: "0.8rem" }}>
          {
            elementOut
          }
        </div>
      </div>
    </div>
  )
}

export default ShowElements;
