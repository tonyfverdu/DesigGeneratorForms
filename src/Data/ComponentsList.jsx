import { useState, useContext } from 'react'
import { MyContext } from '../context/TheContext';

import NewRow from '../componets/TeilRight/NewRow';
import IconEditDelete from '../componets/icons/IconEditDelete';
import NewCol from '../componets/TeilRight/NewCol';
import LabelElem_PB from '../componets/elementsForms/LabelElem_PB';
import TextElem_PB from '../componets/elementsForms/TextElem_PB'
import PhoneElem_PB from '../componets/elementsForms/PhoneElem_PB'
import EmailElem_PB from '../componets/elementsForms/EmailElem_PB'
import NumberElem_PB from '../componets/elementsForms/NumberElem_PB'
import DateElem_PB from '../componets/elementsForms/DateElem_PB'
import AreaTextElem_PB from '../componets/elementsForms/AreaTextElem_PB'
import SelectElement_PB from '../componets/elementsForms/SelectElem_PB'
import CheckboxElem_PB from '../componets/elementsForms/CheckboxElem_PB'
import RadioButtonElem_PB from '../componets/elementsForms/RadioButtonElem_PB'
import RadioButtons_PB from '../componets/elementsForms/RadioButtons_PB'


function ComponentsList() {
  const theContext = useContext(MyContext);
  const [positionElem, setPositionElem] = useState({ colElem: 0, rowElem: 0 })
  const [orderElem, setOrderElem] = useState(0)

  return (
    <div>
      <div className="row container-fluid border border-body rounded mt-2">
        <div className="col container-fluid">
          <div className="containerLayout container mt-1 p-1 bg-body bg-gradiente user-select-none">
            <div className="row my-2">
              <NewRow />
            </div>
            <div className="row p-0 mt-1 bg-light">
              <div className="col-2 d-flex flex-row justify-content-center align-items-center m-0 p-0">
                <NewCol />
                <LabelElem_PB
                  elementID={theContext.pruebaLabelElement.elementID}
                  orderInBlock={"1"}
                  position={positionElem}
                  required={theContext.pruebaLabelElement.required}
                  disabled={theContext.pruebaLabelElement.disabled}
                  response={theContext.pruebaLabelElement.response}
                  placeholder={theContext.pruebaLabelElement.placeholder}
                  size={theContext.pruebaLabelElement.size}
                />
                <IconEditDelete />
              </div>
              <div className="col-4 d-flex flex-row justify-content-center align-items-center m-0 p-0">
                <NewCol />
                <TextElem_PB
                  elementID={theContext.pruebaTextElement.elementID}
                  labelElement={theContext.pruebaTextElement.labelElement}
                  required={theContext.pruebaTextElement.required}
                  disabled={theContext.pruebaTextElement.disabled}
                  response={theContext.pruebaTextElement.response}
                  placeholder={theContext.pruebaTextElement.placeholder}
                  size={theContext.pruebaTextElement.size}
                  setText={theContext.pruebaTextElement.setText}
                />
                <IconEditDelete />
              </div>
              <div className="col d-flex flex-row justify-content-center align-items-center m-0 p-0">
                <NewCol />
                <NumberElem_PB
                  elementID={theContext.pruebaNumberElement.elementID}
                  labelElement={theContext.pruebaNumberElement.labelElement}
                  required={theContext.pruebaNumberElement.required}
                  disabled={theContext.pruebaNumberElement.disabled}
                  response={theContext.pruebaNumberElement.response}
                  placeholder={theContext.pruebaNumberElement.placeholder}
                  size={theContext.pruebaNumberElement.size}
                  setNumber={theContext.pruebaNumberElement.setNumber}
                />
                <IconEditDelete />
              </div>
              <div className="col d-flex flex-row justify-content-center align-items-center m-0 p-0">
                <NewCol />
                <DateElem_PB
                  elementID={theContext.pruebaDateElement.elementID}
                  labelElement={theContext.pruebaDateElement.labelElement}
                  required={theContext.pruebaDateElement.required}
                  disabled={theContext.pruebaDateElement.disabled}
                  response={theContext.pruebaDateElement.response}
                  placeholder={theContext.pruebaDateElement.placeholder}
                  setDate={theContext.pruebaDateElement.setDate}
                />
                <IconEditDelete />
              </div>
            </div>

            <div className="row my-2">
              <NewRow />
            </div>

            <div className="row d-flex flex-row justify-content-start align-items-center m-0 p-0 mt-1 bg-light">
              <div className="" style={{ "width": "auto" }}>
                <NewCol />
              </div>
              <div className="col-3 d-flex flex-row justify-content-center align-items-center m-0 p-0">
                <PhoneElem_PB
                  elementID={theContext.pruebaPhoneElement.elementID}
                  labelElement={theContext.pruebaPhoneElement.labelElement}
                  required={theContext.pruebaPhoneElement.required}
                  disabled={theContext.pruebaPhoneElement.disabled}
                  response={theContext.pruebaPhoneElement.response}
                  placeholder={theContext.pruebaPhoneElement.placeholder}
                  size={theContext.pruebaPhoneElement.size}
                  setPhone={theContext.pruebaPhoneElement.setPhone}
                />
                <IconEditDelete />
              </div>
              <div className="" style={{ "width": "auto" }}>
                <NewCol />
              </div>
              <div className="col-4 d-flex flex-row justify-content-center align-items-center m-0 p-0">
                <EmailElem_PB
                  elementID={theContext.pruebaEmailElement.elementID}
                  labelElement={theContext.pruebaEmailElement.labelElement}
                  required={theContext.pruebaEmailElement.required}
                  disabled={theContext.pruebaEmailElement.disabled}
                  response={theContext.pruebaEmailElement.response}
                  placeholder={theContext.pruebaEmailElement.placeholder}
                  size={theContext.pruebaEmailElement.size}
                  setEmail={theContext.pruebaEmailElement.setEmail}
                />
                <IconEditDelete />
              </div>
              <div className="" style={{ "width": "auto" }}>
                <NewCol />
              </div>
            </div>
            <div className="row my-2">
              <NewRow />
            </div>
            <div className="row d-flex align-items-center p-0 mt-1 bg-light">
              <div className="col-3 d-flex flex-row justify-content-center align-items-start m-0 p-0">
                <NewCol />
                <AreaTextElem_PB
                  elementID={theContext.pruebaAreaTextElement.elementID}
                  labelElement={theContext.pruebaAreaTextElement.labelElement}
                  required={theContext.pruebaAreaTextElement.required}
                  disabled={theContext.pruebaAreaTextElement.disabled}
                  readonly={theContext.pruebaAreaTextElement.readonly}
                  response={theContext.pruebaAreaTextElement.response}
                  placeholder={theContext.pruebaAreaTextElement.placeholder}
                  row={theContext.pruebaAreaTextElement.row}
                  col={theContext.pruebaAreaTextElement.col}
                  setAreaText={theContext.pruebaAreaTextElement.setAreaText}
                />
                <IconEditDelete />
              </div>
              <div className="col-3 d-flex flex-row justify-content-center align-items-center m-0 p-0">
                <NewCol />
                <SelectElement_PB
                  elementID={theContext.pruebaSelectElement.elementID}
                  labelElement={theContext.pruebaSelectElement.labelElement}
                  required={theContext.pruebaSelectElement.required}
                  disabled={theContext.pruebaSelectElement.disabled}
                  response={theContext.pruebaSelectElement.response}
                  optionsValues={theContext.pruebaSelectElement.optionsValues}
                  setSelect={theContext.pruebaSelectElement.setSelect}
                />
                <IconEditDelete />
              </div>
              <div className="col-3 d-flex flex-row justify-content-center align-items-center m-0 p-0">
                <NewCol />
                <CheckboxElem_PB
                  elementID={theContext.pruebaCheckboxElement.elementID}
                  labelElement={theContext.pruebaCheckboxElement.labelElement}
                  required={theContext.pruebaCheckboxElement.required}
                  disabled={theContext.pruebaCheckboxElement.disabled}
                  checked={theContext.pruebaCheckboxElement.checked}
                  response={theContext.pruebaCheckboxElement.response}
                  setCheckbox={theContext.pruebaCheckboxElement.setCheckbox}
                />
                <IconEditDelete />
              </div>
              <div className="col d-flex flex-row justify-content-center align-items-center m-0 p-0">
                <NewCol />
                <RadioButtonElem_PB
                  elementID={theContext.pruebaRadioButtonElement.elementID}
                  labelElement={theContext.pruebaRadioButtonElement.labelElement}
                  required={theContext.pruebaRadioButtonElement.required}
                  disabled={theContext.pruebaRadioButtonElement.disabled}
                  checked={theContext.pruebaRadioButtonElement.checked}
                  response={theContext.pruebaRadioButtonElement.response}
                  setRadioButton={theContext.pruebaRadioButtonElement.setRadioButton}
                />
                <IconEditDelete />
              </div>
            </div>
            <div className="row my-2">
              <NewRow />
            </div>

            <div className="row d-flex flex-row align-items-center align-items-start p-0 mt-1 bg-light">
              <div className="col-3 d-flex flex-row justify-content-center align-items-start m-0 p-0">
                <NewCol />
                <RadioButtons_PB
                  elementID={theContext.pruebaRadioButtons.elementID}
                  legend={theContext.pruebaRadioButtons.legend}
                  name={theContext.pruebaRadioButtons.name}
                  radioButtons={theContext.pruebaRadioButtons.radioButtons}
                />
                <IconEditDelete />
                <NewCol />
              </div>
            </div>
            <div className="row my-2">
              <NewRow />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComponentsList;