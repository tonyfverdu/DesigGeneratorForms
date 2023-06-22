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
    <div className="contSelectElement form-floating form-group container-fluid d-flex flex-row justify-content-start align-items-center m-0 p-1
    border border-1 border-secondary">
      <label htmlFor={elementID} className="form-label labelOfForm d-flex flex-row justify-content-end align-items-center">{labelElement}</label>
      <select id={elementID} className={`form-select-sm contSelect rounded-0 ${disabled ? "selectNotActiv border border-dark": "selectActiv"} bg-white `}
        size="1" required={required} disabled={disabled} aria-label=".form-select-sm" value={valueOfSelect} onChange={(ev) => handleOnChange(ev)} >
        <option value="" className="fw-bold text-secondary fs-6">Select option</option>
        {
          optionsValues.map((element, index) => <option key={index} value={element} className="fw-normal text-dark">{element}</option>)
        }
      </select>
    </div>
  );
}

export default SelectElement_PB;

/*
rounded-0
*/