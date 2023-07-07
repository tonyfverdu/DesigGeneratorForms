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


function ShowElements() {
  const theContext = useContext(MyContext);

  switch (theContext.element) {
    case "master":
      return (
        <MasterElem_PB
          elementID={theContext.objComponentShow.elementID}
          placeholder={theContext.objComponentShow.placeholder}
          width={theContext.objComponentShow.dimensions.width}
          disabled={false}
        />
      )
    case "label":
      return (
        <LabelElem_PB
          elementID={theContext.objComponentShow.elementID}
          orderInBlock={theContext.objComponentShow.orderInBlock}
          required={theContext.objComponentShow.required}
          disabled={theContext.objComponentShow.disabled}
          response={theContext.objComponentShow.response}
          placeholder={theContext.objComponentShow.placeholder}
          size={theContext.objComponentShow.size}
          position={theContext.objComponentShow.position}
          borderElement={theContext.objComponentShow.borderElement}
          colorElement={theContext.objComponentShow.colorElement}
          fontSizeElement={theContext.objComponentShow.fontSizeElement}
        />
      )
    case "text":
      return (
        <TextElem_PB
          elementID={theContext.objComponentShow.elementID}
          orderInBlock={theContext.objComponentShow.orderInBlock}
          labelElement={theContext.objComponentShow.labelElement}
          required={theContext.objComponentShow.required}
          disabled={theContext.objComponentShow.disabled}
          response={theContext.objComponentShow.response}
          placeholder={theContext.objComponentShow.placeholder}
          size={theContext.objComponentShow.size}
          position={theContext.objComponentShow.position}
          borderElement={theContext.objComponentShow.borderElement}
          colorElement={theContext.objComponentShow.colorElement}
          fontSizeElement={theContext.objComponentShow.fontSizeElement}
          setText={theContext.objComponentShow.setComponent}
        />
      )
    case "number":
      return (
        <NumberElem_PB
          elementID={theContext.objComponentShow.elementID}
          orderInBlock={theContext.objComponentShow.orderInBlock}
          labelElement={theContext.objComponentShow.labelElement}
          required={theContext.objComponentShow.required}
          disabled={theContext.objComponentShow.disabled}
          response={theContext.objComponentShow.response}
          placeholder={theContext.objComponentShow.placeholder}
          size={theContext.objComponentShow.size}
          position={theContext.objComponentShow.position}
          borderElement={theContext.objComponentShow.borderElement}
          colorElement={theContext.objComponentShow.colorElement}
          fontSizeElement={theContext.objComponentShow.fontSizeElement}
          setNumber={theContext.objComponentShow.setComponent}
        />
      )
    case "date":
      return (
        <DateElem_PB
          elementID={theContext.objComponentShow.elementID}
          orderInBlock={theContext.objComponentShow.orderInBlock}
          labelElement={theContext.objComponentShow.labelElement}
          required={theContext.objComponentShow.required}
          disabled={theContext.objComponentShow.disabled}
          response={theContext.objComponentShow.response}
          placeholder={theContext.objComponentShow.placeholder}
          size={theContext.objComponentShow.size}
          position={theContext.objComponentShow.position}
          borderElement={theContext.objComponentShow.borderElement}
          colorElement={theContext.objComponentShow.colorElement}
          fontSizeElement={theContext.objComponentShow.fontSizeElement}
          setDate={theContext.objComponentShow.setComponent}
        />
      )
    case "phone":
      return (
        <PhoneElem_PB
          elementID={theContext.objComponentShow.elementID}
          orderInBlock={theContext.objComponentShow.orderInBlock}
          labelElement={theContext.objComponentShow.labelElement}
          required={theContext.objComponentShow.required}
          disabled={theContext.objComponentShow.disabled}
          response={theContext.objComponentShow.response}
          placeholder={theContext.objComponentShow.placeholder}
          size={theContext.objComponentShow.size}
          position={theContext.objComponentShow.position}
          borderElement={theContext.objComponentShow.borderElement}
          colorElement={theContext.objComponentShow.colorElement}
          fontSizeElement={theContext.objComponentShow.fontSizeElement}
          setPhone={theContext.objComponentShow.setComponent}
        />
      )
    case "email":
      return (
        <EmailElem_PB
          elementID={theContext.objComponentShow.elementID}
          orderInBlock={theContext.objComponentShow.orderInBlock}
          labelElement={theContext.objComponentShow.labelElement}
          required={theContext.objComponentShow.required}
          disabled={theContext.objComponentShow.disabled}
          response={theContext.objComponentShow.response}
          placeholder={theContext.objComponentShow.placeholder}
          size={theContext.objComponentShow.size}
          position={theContext.objComponentShow.position}
          borderElement={theContext.objComponentShow.borderElement}
          colorElement={theContext.objComponentShow.colorElement}
          fontSizeElement={theContext.objComponentShow.fontSizeElement}
          setEmail={theContext.objComponentShow.setComponent}
        />
      )
    case "textArea":
      return (
        <AreaTextElem_PB
          elementID={theContext.objComponentShow.elementID}
          orderInBlock={theContext.objComponentShow.orderInBlock}
          labelElement={theContext.objComponentShow.labelElement}
          required={theContext.objComponentShow.required}
          disabled={theContext.objComponentShow.disabled}
          readonly={theContext.objComponentShow.readonly}
          response={theContext.objComponentShow.response}
          placeholder={theContext.objComponentShow.placeholder}
          row={theContext.objComponentShow.row}
          col={theContext.objComponentShow.col}
          position={theContext.objComponentShow.position}
          borderElement={theContext.objComponentShow.borderElement}
          colorElement={theContext.objComponentShow.colorElement}
          fontSizeElement={theContext.objComponentShow.fontSizeElement}
          setAreaText={theContext.objComponentShow.setComponent}
        />
      )
    case "select":
      return (
        <SelectElement_PB
          elementID={theContext.objComponentShow.elementID}
          orderInBlock={theContext.objComponentShow.orderInBlock}
          labelElement={theContext.objComponentShow.labelElement}
          required={theContext.objComponentShow.required}
          disabled={theContext.objComponentShow.disabled}
          response={theContext.objComponentShow.response}
          placeholder={theContext.objComponentShow.placeholder}
          size={theContext.objComponentShow.size}
          position={theContext.objComponentShow.position}
          borderElement={theContext.objComponentShow.borderElement}
          colorElement={theContext.objComponentShow.colorElement}
          fontSizeElement={theContext.objComponentShow.fontSizeElement}
          optionsValues={theContext.objComponentShow.optionsValues}
          setSelect={theContext.objComponentShow.setComponent}
        />
      )
    case "checkbox":
      return (
        <CheckboxElem_PB
          elementID={theContext.objComponentShow.elementID}
          orderInBlock={theContext.objComponentShow.orderInBlock}
          labelElement={theContext.objComponentShow.labelElement}
          required={theContext.objComponentShow.required}
          disabled={theContext.objComponentShow.disabled}
          checked={theContext.objComponentShow.checked}
          response={theContext.objComponentShow.response}
          position={theContext.objComponentShow.position}
          borderElement={theContext.objComponentShow.borderElement}
          colorElement={theContext.objComponentShow.colorElement}
          fontSizeElement={theContext.objComponentShow.fontSizeElement}
          setCheckbox={theContext.objComponentShow.setComponent}
        />
      )
    case "radioButtons":
      return (
        <RadioButtons_PB
          elementID={theContext.objComponentShow.elementID}
          orderInBlock={theContext.objComponentShow.orderInBlock}
          legend={theContext.objComponentShow.legend}
          required={theContext.objComponentShow.required}
          disabled={theContext.objComponentShow.disabled}
          name={theContext.objComponentShow.name}
          radioButtons={theContext.objComponentShow.radioButtons}
          response={theContext.objComponentShow.response}
          placeholder={theContext.objComponentShow.placeholder}
          position={theContext.objComponentShow.position}
          setRadioButtons={theContext.objComponentShow.setComponent}
        />
      )
    case "icon":
      return (
        <IconoElem_PB
          elementID={theContext.objComponentShow.elementID}
          orderInBlock={theContext.objComponentShow.orderInBlock}
          required={theContext.objComponentShow.required}
          disabled={theContext.objComponentShow.disabled}
          name={theContext.objComponentShow.name}
          widthImage={theContext.objComponentShow.widthImage}
          position={theContext.objComponentShow.position}
          borderElement={theContext.objComponentShow.borderElement}
          srcURLIcon={theContext.objComponentShow.srcURLIcon}
          nameImage={theContext.objComponentShow.nameImage}
          setIcon={theContext.objComponentShow.setComponent}
        />
      )
    default:
      break;
  }
}

export default ShowElements;