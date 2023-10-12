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


function ShowElements({ valueComp }) {
  const theContext = useContext(MyContext);
  const [elementOut, setElementOut] = useState(null);

  useEffect(() => {
    selectElementShow(valueComp);
  }, []);

  function selectElementShow(parComponent) {
    if (parComponent) {
      const elementMap = {
        master: () => (
          <MasterElem_PB
            comp={parComponent}
          />
        ),
        label: () => (
          <LabelElem_PB
            id_Element={parComponent.id_Element}
            orderInBlock={parComponent.orderInBlock}
            required={parComponent.required}
            disabled={parComponent.disabled}
            response={parComponent.response}
            placeholder={parComponent.placeholder}
            size={parComponent.size}
            position={parComponent.position}
            width={parComponent.dimension.width}
            borderElement={parComponent.borderElement}
            colorElement={parComponent.colorElement}
            fontSizeElement={parComponent.fontSizeElement}
          />
        ),
        text: () => (
          <TextElem_PB
            id_Element={parComponent.id_Element}
            orderInBlock={parComponent.orderInBlock}
            labelElement={parComponent.labelElement}
            required={parComponent.required}
            disabled={parComponent.disabled}
            response={parComponent.response}
            placeholder={parComponent.placeholder}
            size={parComponent.size}
            position={parComponent.position}
            borderElement={parComponent.borderElement}
            colorElement={parComponent.colorElement}
            fontSizeElement={parComponent.fontSizeElement}
            setText={theContext.setText}
          />
        ),
        number: () => (
          <NumberElem_PB
            id_Element={parComponent.id_Element}
            orderInBlock={parComponent.orderInBlock}
            labelElement={parComponent.labelElement}
            required={parComponent.required}
            disabled={parComponent.disabled}
            response={parComponent.response}
            placeholder={parComponent.placeholder}
            size={parComponent.size}
            position={parComponent.position}
            borderElement={parComponent.borderElement}
            colorElement={parComponent.colorElement}
            fontSizeElement={parComponent.fontSizeElement}
            setNumber={theContext.setNumber}
          />
        ),
        date: () => (
          <DateElem_PB
            id_Element={parComponent.id_Element}
            orderInBlock={parComponent.orderInBlock}
            labelElement={parComponent.labelElement}
            required={parComponent.required}
            disabled={parComponent.disabled}
            response={parComponent.response}
            placeholder={parComponent.placeholder}
            size={parComponent.size}
            position={parComponent.position}
            borderElement={parComponent.borderElement}
            colorElement={parComponent.colorElement}
            fontSizeElement={parComponent.fontSizeElement}
            setDate={theContext.setDate}
          />
        ),
        phone: () => (
          <PhoneElem_PB
            id_Element={parComponent.id_Element}
            orderInBlock={parComponent.orderInBlock}
            labelElement={parComponent.labelElement}
            required={parComponent.required}
            disabled={parComponent.disabled}
            response={parComponent.response}
            placeholder={parComponent.placeholder}
            size={parComponent.size}
            position={parComponent.position}
            borderElement={parComponent.borderElement}
            colorElement={parComponent.colorElement}
            fontSizeElement={parComponent.fontSizeElement}
            setPhone={theContext.setPhone}
          />
        ),
        email: () => (
          <EmailElem_PB
            id_Element={parComponent.id_Element}
            orderInBlock={parComponent.orderInBlock}
            labelElement={parComponent.labelElement}
            required={parComponent.required}
            disabled={parComponent.disabled}
            response={parComponent.response}
            placeholder={parComponent.placeholder}
            size={parComponent.size}
            position={parComponent.position}
            borderElement={parComponent.borderElement}
            colorElement={parComponent.colorElement}
            fontSizeElement={parComponent.fontSizeElement}
            setEmail={theContext.setEmail}
          />
        ),
        textarea: () => (
          <AreaTextElem_PB
            id_Element={parComponent.id_Element}
            orderInBlock={parComponent.orderInBlock}
            labelElement={parComponent.labelElement}
            required={parComponent.required}
            disabled={parComponent.disabled}
            readonly={parComponent.readonly}
            response={parComponent.response}
            placeholder={parComponent.placeholder}
            row={parComponent.row}
            col={parComponent.col}
            position={parComponent.position}
            borderElement={parComponent.borderElement}
            colorElement={parComponent.colorElement}
            fontSizeElement={parComponent.fontSizeElement}
            setAreaText={theContext.setTextArea}
          />
        ),
        select: () => (
          <SelectElement_PB
            id_Element={parComponent.id_Element}
            orderInBlock={parComponent.orderInBlock}
            labelElement={parComponent.labelElement}
            required={parComponent.required}
            disabled={parComponent.disabled}
            response={parComponent.response}
            placeholder={parComponent.placeholder}
            size={parComponent.size}
            position={parComponent.position}
            borderElement={parComponent.borderElement}
            colorElement={parComponent.colorElement}
            fontSizeElement={parComponent.fontSizeElement}
            optionsValues={parComponent.optionsValues}
            setSelect={theContext.setSelect}
          />
        ),
        checkbox: () => (
          <CheckboxElem_PB
            id_Element={parComponent.id_Element}
            orderInBlock={parComponent.orderInBlock}
            labelElement={parComponent.labelElement}
            required={parComponent.required}
            disabled={parComponent.disabled}
            checked={parComponent.checked}
            response={parComponent.response}
            position={parComponent.position}
            borderElement={parComponent.borderElement}
            colorElement={parComponent.colorElement}
            fontSizeElement={parComponent.fontSizeElement}
            setCheckbox={theContext.setCheckbox}
          />
        ),
        radioButtons: () => (
          <RadioButtons_PB
            id_Element={parComponent.id_Element}
            orderInBlock={parComponent.orderInBlock}
            legend={parComponent.legend}
            required={parComponent.required}
            disabled={parComponent.disabled}
            name={parComponent.name}
            radioButtons={parComponent.radioButtons}
            response={parComponent.response}
            placeholder={parComponent.placeholder}
            position={parComponent.position}
          // setRadioButtons={parComponent.setComponent}
          />
        ),
        icon: () => (
          <IconoElem_PB
            id_Element={parComponent.id_Element}
            orderInBlock={parComponent.orderInBlock}
            required={parComponent.required}
            disabled={parComponent.disabled}
            name={parComponent.name}
            widthImage={parComponent.widthImage}
            position={parComponent.position}
            borderElement={parComponent.borderElement}
            srcURLIcon={parComponent.srcURLIcon}
            nameImage={parComponent.nameImage}
            setIcon={theContext.setIcon}
          />
        ),
      };

      const setElement = elementMap[parComponent.type_Element];
      if (setElement) {
        setElementOut(setElement);
      }
    } else {
      throw new Error('Error: the argument of the function "selectElementShow" must be a string!!');
    }
  };


  return (
    <div id="accordionShowComp" className="accordion container-fluid graycolor400 d-flex flex-column justify-content-center align-items-center p-1 mx-auto mb-1">
      <div className="accordion-item rounded-0 container-fluid mx-auto graycolor400 border-0 " style={{ marginBottom: "0.3rem" }} >
        <HeaderHead
          idHeading="headingShowComp"
          dataTarget="#collapseShowComp"
          ariaControl="collapseShowComp"
          fontSize="0.65rem"
          title="Show Component: "
          value={valueComp.type_Element}
        />

        <div id="collapseShowComp" className="accordion-collapse collapse ms-0" aria-labelledby="headingShowComp" data-bs-parent="#accordionShowComp">
          <div className="accordion-body p-0 mb-0">
            <div className="row d-flex justify-content-center align-items-center gap-1 m-1" >
              <div className="col d-flex flex-column justify-content-start align-items-start graycolor200 mx-auto"
                style={{ padding: "0.2rem", margin: "0.2rem auto" }} >
                <span className="m-0 border-2 border-danger" style={{ width: "100%", fontSize: "0.6rem" }}>
                  {elementOut}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowElements;
