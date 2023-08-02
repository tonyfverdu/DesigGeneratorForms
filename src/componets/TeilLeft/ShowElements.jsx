import { useState, useEffect, useContext } from 'react'
import { MyContext } from '../../context/TheContext.jsx'

import HeaderHead from './MenuLeft/HeaderHead.jsx'

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
  const [compLocalSelect, setCompLocalSelect] = useState(componentSelect)

  useEffect(() => {
    selectElementShow(type_Element, componentSelect)
  }, [type_Element])

  useEffect(() => {
    setCompLocalSelect(componentSelect)

    console.log("En Show Element, compLocalSelect:  ", compLocalSelect)
  }, [componentSelect])

  // function selectElementShow(parTypeElement) {
  //   if (typeof parTypeElement === "string") {
  //     switch (type_Element) {
  //       case "master":
  //         setElementOut(
  //           <MasterElem_PB
  //             comp={compLocalSelect}
  //             id_Element={compLocalSelect.id_Element}
  //             placeholder={compLocalSelect.placeholder}
  //             width={compLocalSelect.dimension.width}
  //             disabled={false}
  //           />
  //         )
  //         break;
  //       case "label":
  //         setElementOut(
  //           <LabelElem_PB
  //             id_Element={compLocalSelect.id_Element}
  //             orderInBlock={compLocalSelect.orderInBlock}
  //             required={compLocalSelect.required}
  //             disabled={compLocalSelect.disabled}
  //             response={compLocalSelect.response}
  //             placeholder={compLocalSelect.placeholder}
  //             size={compLocalSelect.size}
  //             position={compLocalSelect.position}
  //             width={compLocalSelect.dimension.width}
  //             borderElement={compLocalSelect.borderElement}
  //             colorElement={compLocalSelect.colorElement}
  //             fontSizeElement={compLocalSelect.fontSizeElement}
  //           />
  //         )
  //         break;
  //       case "text":
  //         setElementOut(
  //           <TextElem_PB
  //             id_Element={compLocalSelect.id_Element}
  //             orderInBlock={compLocalSelect.orderInBlock}
  //             labelElement={compLocalSelect.labelElement}
  //             required={compLocalSelect.required}
  //             disabled={compLocalSelect.disabled}
  //             response={compLocalSelect.response}
  //             placeholder={compLocalSelect.placeholder}
  //             size={compLocalSelect.size}
  //             position={compLocalSelect.position}
  //             borderElement={compLocalSelect.borderElement}
  //             colorElement={compLocalSelect.colorElement}
  //             fontSizeElement={compLocalSelect.fontSizeElement}
  //             setText={theContext.setText}
  //           />
  //         )
  //         break;
  //       case "number":
  //         setElementOut(
  //           <NumberElem_PB
  //             id_Element={compLocalSelect.id_Element}
  //             orderInBlock={compLocalSelect.orderInBlock}
  //             labelElement={compLocalSelect.labelElement}
  //             required={compLocalSelect.required}
  //             disabled={compLocalSelect.disabled}
  //             response={compLocalSelect.response}
  //             placeholder={compLocalSelect.placeholder}
  //             size={compLocalSelect.size}
  //             position={compLocalSelect.position}
  //             borderElement={compLocalSelect.borderElement}
  //             colorElement={compLocalSelect.colorElement}
  //             fontSizeElement={compLocalSelect.fontSizeElement}
  //             setNumber={theContext.setNumber}
  //           />
  //         )
  //         break;
  //       case "date":
  //         setElementOut(
  //           <DateElem_PB
  //             id_Element={compLocalSelect.id_Element}
  //             orderInBlock={compLocalSelect.orderInBlock}
  //             labelElement={compLocalSelect.labelElement}
  //             required={compLocalSelect.required}
  //             disabled={compLocalSelect.disabled}
  //             response={compLocalSelect.response}
  //             placeholder={compLocalSelect.placeholder}
  //             size={compLocalSelect.size}
  //             position={compLocalSelect.position}
  //             borderElement={compLocalSelect.borderElement}
  //             colorElement={compLocalSelect.colorElement}
  //             fontSizeElement={compLocalSelect.fontSizeElement}
  //             setDate={theContext.setDate}
  //           />
  //         )
  //         break;
  //       case "phone":
  //         setElementOut(
  //           <PhoneElem_PB
  //             id_Element={compLocalSelect.id_Element}
  //             orderInBlock={compLocalSelect.orderInBlock}
  //             labelElement={compLocalSelect.labelElement}
  //             required={compLocalSelect.required}
  //             disabled={compLocalSelect.disabled}
  //             response={compLocalSelect.response}
  //             placeholder={compLocalSelect.placeholder}
  //             size={compLocalSelect.size}
  //             position={compLocalSelect.position}
  //             borderElement={compLocalSelect.borderElement}
  //             colorElement={compLocalSelect.colorElement}
  //             fontSizeElement={compLocalSelect.fontSizeElement}
  //             setPhone={theContext.setPhone}
  //           />
  //         )
  //         break;
  //       case "email":
  //         setElementOut(
  //           <EmailElem_PB
  //             id_Element={compLocalSelect.id_Element}
  //             orderInBlock={compLocalSelect.orderInBlock}
  //             labelElement={compLocalSelect.labelElement}
  //             required={compLocalSelect.required}
  //             disabled={compLocalSelect.disabled}
  //             response={compLocalSelect.response}
  //             placeholder={compLocalSelect.placeholder}
  //             size={compLocalSelect.size}
  //             position={compLocalSelect.position}
  //             borderElement={compLocalSelect.borderElement}
  //             colorElement={compLocalSelect.colorElement}
  //             fontSizeElement={compLocalSelect.fontSizeElement}
  //             setEmail={theContext.setEmail}
  //           />
  //         )
  //         break;
  //       case "textArea":
  //         setElementOut(
  //           <AreaTextElem_PB
  //             id_Element={compLocalSelect.id_Element}
  //             orderInBlock={compLocalSelect.orderInBlock}
  //             labelElement={compLocalSelect.labelElement}
  //             required={compLocalSelect.required}
  //             disabled={compLocalSelect.disabled}
  //             readonly={compLocalSelect.readonly}
  //             response={compLocalSelect.response}
  //             placeholder={compLocalSelect.placeholder}
  //             row={compLocalSelect.row}
  //             col={compLocalSelect.col}
  //             position={compLocalSelect.position}
  //             borderElement={compLocalSelect.borderElement}
  //             colorElement={compLocalSelect.colorElement}
  //             fontSizeElement={compLocalSelect.fontSizeElement}
  //             setAreaText={theContext.setTextArea}
  //           />
  //         )
  //         break;
  //       case "select":
  //         setElementOut(
  //           <SelectElement_PB
  //             id_Element={compLocalSelect.id_Element}
  //             orderInBlock={compLocalSelect.orderInBlock}
  //             labelElement={compLocalSelect.labelElement}
  //             required={compLocalSelect.required}
  //             disabled={compLocalSelect.disabled}
  //             response={compLocalSelect.response}
  //             placeholder={compLocalSelect.placeholder}
  //             size={compLocalSelect.size}
  //             position={compLocalSelect.position}
  //             borderElement={compLocalSelect.borderElement}
  //             colorElement={compLocalSelect.colorElement}
  //             fontSizeElement={compLocalSelect.fontSizeElement}
  //             optionsValues={compLocalSelect.optionsValues}
  //             setSelect={theContext.setSelect}
  //           />
  //         )
  //         break;
  //       case "checkbox":
  //         setElementOut(
  //           <CheckboxElem_PB
  //             id_Element={compLocalSelect.id_Element}
  //             orderInBlock={compLocalSelect.orderInBlock}
  //             labelElement={compLocalSelect.labelElement}
  //             required={compLocalSelect.required}
  //             disabled={compLocalSelect.disabled}
  //             checked={compLocalSelect.checked}
  //             response={compLocalSelect.response}
  //             position={compLocalSelect.position}
  //             borderElement={compLocalSelect.borderElement}
  //             colorElement={compLocalSelect.colorElement}
  //             fontSizeElement={compLocalSelect.fontSizeElement}
  //             setCheckbox={theContext.setCheckbox}
  //           />
  //         )
  //         break;
  //       case "radioButtons":
  //         setElementOut(
  //           <RadioButtons_PB
  //             id_Element={compLocalSelect.id_Element}
  //             orderInBlock={compLocalSelect.orderInBlock}
  //             legend={compLocalSelect.legend}
  //             required={compLocalSelect.required}
  //             disabled={compLocalSelect.disabled}
  //             name={compLocalSelect.name}
  //             radioButtons={compLocalSelect.radioButtons}
  //             response={compLocalSelect.response}
  //             placeholder={compLocalSelect.placeholder}
  //             position={compLocalSelect.position}
  //           // setRadioButtons={componentSelect.setComponent}
  //           />
  //         )
  //         break;
  //       case "icon":
  //         setElementOut(
  //           <IconoElem_PB
  //             id_Element={compLocalSelect.id_Element}
  //             orderInBlock={compLocalSelect.orderInBlock}
  //             required={compLocalSelect.required}
  //             disabled={compLocalSelect.disabled}
  //             name={compLocalSelect.name}
  //             widthImage={compLocalSelect.widthImage}
  //             position={compLocalSelect.position}
  //             borderElement={compLocalSelect.borderElement}
  //             srcURLIcon={compLocalSelect.srcURLIcon}
  //             nameImage={compLocalSelect.nameImage}
  //             setIcon={theContext.setIcon}
  //           />
  //         )
  //         break;
  //       default:
  //         break;
  //     }
  //   } else {
  //     console.error('Error:  the argument of the function "selectElementShow" must be a string!!')
  //   }
  // }

  function selectElementShow(parTypeElement, compLocalSelect) {
    if (typeof parTypeElement === "string") {
      switch (type_Element) {
        case "master":
          setElementOut(
            <MasterElem_PB
              comp={compLocalSelect}
              id_Element={compLocalSelect.id_Element}
              placeholder={compLocalSelect.placeholder}
              width={compLocalSelect.dimension.width}
              disabled={false}
            />
          )
          break;
        case "label":
          setElementOut(
            <LabelElem_PB
              id_Element={compLocalSelect.id_Element}
              orderInBlock={compLocalSelect.orderInBlock}
              required={compLocalSelect.required}
              disabled={compLocalSelect.disabled}
              response={compLocalSelect.response}
              placeholder={compLocalSelect.placeholder}
              size={compLocalSelect.size}
              position={compLocalSelect.position}
              width={compLocalSelect.dimension.width}
              borderElement={compLocalSelect.borderElement}
              colorElement={compLocalSelect.colorElement}
              fontSizeElement={compLocalSelect.fontSizeElement}
            />
          )
          break;
        case "text":
          setElementOut(
            <TextElem_PB
              id_Element={compLocalSelect.id_Element}
              orderInBlock={compLocalSelect.orderInBlock}
              labelElement={compLocalSelect.labelElement}
              required={compLocalSelect.required}
              disabled={compLocalSelect.disabled}
              response={compLocalSelect.response}
              placeholder={compLocalSelect.placeholder}
              size={compLocalSelect.size}
              position={compLocalSelect.position}
              borderElement={compLocalSelect.borderElement}
              colorElement={compLocalSelect.colorElement}
              fontSizeElement={compLocalSelect.fontSizeElement}
              setText={theContext.setText}
            />
          )
          break;
        case "number":
          setElementOut(
            <NumberElem_PB
              id_Element={compLocalSelect.id_Element}
              orderInBlock={compLocalSelect.orderInBlock}
              labelElement={compLocalSelect.labelElement}
              required={compLocalSelect.required}
              disabled={compLocalSelect.disabled}
              response={compLocalSelect.response}
              placeholder={compLocalSelect.placeholder}
              size={compLocalSelect.size}
              position={compLocalSelect.position}
              borderElement={compLocalSelect.borderElement}
              colorElement={compLocalSelect.colorElement}
              fontSizeElement={compLocalSelect.fontSizeElement}
              setNumber={theContext.setNumber}
            />
          )
          break;
        case "date":
          setElementOut(
            <DateElem_PB
              id_Element={compLocalSelect.id_Element}
              orderInBlock={compLocalSelect.orderInBlock}
              labelElement={compLocalSelect.labelElement}
              required={compLocalSelect.required}
              disabled={compLocalSelect.disabled}
              response={compLocalSelect.response}
              placeholder={compLocalSelect.placeholder}
              size={compLocalSelect.size}
              position={compLocalSelect.position}
              borderElement={compLocalSelect.borderElement}
              colorElement={compLocalSelect.colorElement}
              fontSizeElement={compLocalSelect.fontSizeElement}
              setDate={theContext.setDate}
            />
          )
          break;
        case "phone":
          setElementOut(
            <PhoneElem_PB
              id_Element={compLocalSelect.id_Element}
              orderInBlock={compLocalSelect.orderInBlock}
              labelElement={compLocalSelect.labelElement}
              required={compLocalSelect.required}
              disabled={compLocalSelect.disabled}
              response={compLocalSelect.response}
              placeholder={compLocalSelect.placeholder}
              size={compLocalSelect.size}
              position={compLocalSelect.position}
              borderElement={compLocalSelect.borderElement}
              colorElement={compLocalSelect.colorElement}
              fontSizeElement={compLocalSelect.fontSizeElement}
              setPhone={theContext.setPhone}
            />
          )
          break;
        case "email":
          setElementOut(
            <EmailElem_PB
              id_Element={compLocalSelect.id_Element}
              orderInBlock={compLocalSelect.orderInBlock}
              labelElement={compLocalSelect.labelElement}
              required={compLocalSelect.required}
              disabled={compLocalSelect.disabled}
              response={compLocalSelect.response}
              placeholder={compLocalSelect.placeholder}
              size={compLocalSelect.size}
              position={compLocalSelect.position}
              borderElement={compLocalSelect.borderElement}
              colorElement={compLocalSelect.colorElement}
              fontSizeElement={compLocalSelect.fontSizeElement}
              setEmail={theContext.setEmail}
            />
          )
          break;
        case "textArea":
          setElementOut(
            <AreaTextElem_PB
              id_Element={compLocalSelect.id_Element}
              orderInBlock={compLocalSelect.orderInBlock}
              labelElement={compLocalSelect.labelElement}
              required={compLocalSelect.required}
              disabled={compLocalSelect.disabled}
              readonly={compLocalSelect.readonly}
              response={compLocalSelect.response}
              placeholder={compLocalSelect.placeholder}
              row={compLocalSelect.row}
              col={compLocalSelect.col}
              position={compLocalSelect.position}
              borderElement={compLocalSelect.borderElement}
              colorElement={compLocalSelect.colorElement}
              fontSizeElement={compLocalSelect.fontSizeElement}
              setAreaText={theContext.setTextArea}
            />
          )
          break;
        case "select":
          setElementOut(
            <SelectElement_PB
              id_Element={compLocalSelect.id_Element}
              orderInBlock={compLocalSelect.orderInBlock}
              labelElement={compLocalSelect.labelElement}
              required={compLocalSelect.required}
              disabled={compLocalSelect.disabled}
              response={compLocalSelect.response}
              placeholder={compLocalSelect.placeholder}
              size={compLocalSelect.size}
              position={compLocalSelect.position}
              borderElement={compLocalSelect.borderElement}
              colorElement={compLocalSelect.colorElement}
              fontSizeElement={compLocalSelect.fontSizeElement}
              optionsValues={compLocalSelect.optionsValues}
              setSelect={theContext.setSelect}
            />
          )
          break;
        case "checkbox":
          setElementOut(
            <CheckboxElem_PB
              id_Element={compLocalSelect.id_Element}
              orderInBlock={compLocalSelect.orderInBlock}
              labelElement={compLocalSelect.labelElement}
              required={compLocalSelect.required}
              disabled={compLocalSelect.disabled}
              checked={compLocalSelect.checked}
              response={compLocalSelect.response}
              position={compLocalSelect.position}
              borderElement={compLocalSelect.borderElement}
              colorElement={compLocalSelect.colorElement}
              fontSizeElement={compLocalSelect.fontSizeElement}
              setCheckbox={theContext.setCheckbox}
            />
          )
          break;
        case "radioButtons":
          setElementOut(
            <RadioButtons_PB
              id_Element={compLocalSelect.id_Element}
              orderInBlock={compLocalSelect.orderInBlock}
              legend={compLocalSelect.legend}
              required={compLocalSelect.required}
              disabled={compLocalSelect.disabled}
              name={compLocalSelect.name}
              radioButtons={compLocalSelect.radioButtons}
              response={compLocalSelect.response}
              placeholder={compLocalSelect.placeholder}
              position={compLocalSelect.position}
            // setRadioButtons={componentSelect.setComponent}
            />
          )
          break;
        case "icon":
          setElementOut(
            <IconoElem_PB
              id_Element={compLocalSelect.id_Element}
              orderInBlock={compLocalSelect.orderInBlock}
              required={compLocalSelect.required}
              disabled={compLocalSelect.disabled}
              name={compLocalSelect.name}
              widthImage={compLocalSelect.widthImage}
              position={compLocalSelect.position}
              borderElement={compLocalSelect.borderElement}
              srcURLIcon={compLocalSelect.srcURLIcon}
              nameImage={compLocalSelect.nameImage}
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



  return (
    <div id="accordionShowComp" className="accordion container-fluid graycolor400 d-flex flex-column justify-content-center align-items-center p-1 mx-auto mb-1">
      <div className="accordion-item rounded-0 container-fluid mx-auto graycolor400 border-0 " style={{ marginBottom: "0.3rem" }} >
        <HeaderHead
          idHeading={"headingShowComp"}
          dataTarget={"#collapseShowComp"}
          ariaControl={"collapseShowComp"}
          fontSize={"0.75rem"}
          title={"Show Component: "}
          value={type_Element}
        />

        <div id="collapseShowComp" className="accordion-collapse collapse ms-0" aria-labelledby="headingShowComp" data-bs-parent="#accordionShowComp">
          <div className="accordion-body p-0 mb-0">
            <div className="row d-flex justify-content-center align-items-center gap-1 m-1" >
              <div className="col-12 d-flex flex-column justify-content-start align-items-start graycolor400 mx-auto"
                style={{ padding: "0.2rem", margin: "0.2rem auto" }} >
                <span className="m-0" style={{ width: "100%", fontSize: "0.6rem" }}>
                  {
                    elementOut
                  }
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ShowElements;
