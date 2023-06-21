import { useState, useEffect } from "react";
import '../../sass/componentSass/elementsForms/SelectElem_PB.scss'


function SelectElement_PB({ elementID, labelElement, required, disabled = false, response, optionsValues, setSelect }) {
  const [responseSelect, setResponseSelect] = useState(response[0])
  const [valueOfSelect, setValueOfSelect] = useState(response[0])

  useEffect(() => {
    setSelect(response[0])
    setValueOfSelect(response[0])
  }, [])

  function handleOnChange(ev) {
    ev.preventDefault();
    setValueOfSelect(ev.target.value)
    setSelect(setValueOfSelect)
  }

  return (
    <div className="contSelectElement form-floating container-fluid d-flex flex-row justify-content-start align-items-center p-1">
      <label htmlFor={elementID} className="labelOfForm form-label d-flex flex-row justify-content-end align-items-center">{labelElement}</label>
      <select id={elementID} className={`form-select-sm contSelect ${disabled ? "selectActiv" : "selectNotActiv"} p-1 bg-white border border-dark `}
        size="1" required={required} disabled={disabled} aria-label=".form-select-sm" value={valueOfSelect} onChange={(ev) => handleOnChange(ev)} >
        <option value="" className="fw-bold text-secondary fs-6">Select option</option>
        {
          optionsValues.map((element, index) => <option key={index} value={element} className="fw-normal text-dark fs-6">{element}</option>)
        }
      </select>
    </div>
  );
}

export default SelectElement_PB;

/*
rounded-0
*/