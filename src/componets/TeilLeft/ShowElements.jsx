import { useContext } from 'react'
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


function ShowElements({ typeElement, componentSelect }) {
  const theContext = useContext(MyContext);

  switch (typeElement) {  // typeElement
    case "master":
      return (
        <MasterElem_PB
          id_Element={componentSelect.id_Element}
          placeholder={componentSelect.placeholder}
          width={componentSelect.dimension.width}
          disabled={false}
        />
      )
    case "label":
      return (
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
    case "text":
      return (
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
    case "number":
      return (
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
          setNumber={componentSelect.setComponent}
        />
      )
    case "date":
      return (
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
          setDate={componentSelect.setComponent}
        />
      )
    case "phone":
      return (
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
          setPhone={componentSelect.setComponent}
        />
      )
    case "email":
      return (
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
          setEmail={componentSelect.setComponent}
        />
      )
    case "textArea":
      return (
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
          setAreaText={componentSelect.setComponent}
        />
      )
    case "select":
      return (
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
          setSelect={componentSelect.setComponent}
        />
      )
    case "checkbox":
      return (
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
          setCheckbox={componentSelect.setComponent}
        />
      )
    case "radioButtons":
      return (
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
          setRadioButtons={componentSelect.setComponent}
        />
      )
    case "icon":
      return (
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
          setIcon={componentSelect.setComponent}
        />
      )
    default:
      break;
  }
}

export default ShowElements;