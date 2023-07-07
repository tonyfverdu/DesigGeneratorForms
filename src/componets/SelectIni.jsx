import { useState, useEffect } from 'react';
import '../sass/componentSass/elementsForms/SelectElem_PB.scss'


function SelectIni({ elementID, labelElement, required, disabled = false, placeholder, optionsValues, colorSelect, fontSizeSelect, setSelect }) {
  const [valueSelect, setValueSelect] = useState("");

  useEffect(() => {
    setValueSelect(optionsValues[0])
    setSelect(valueSelect);
  }, [valueSelect])

  function optionsOfSelet(optionsValues) {
    return (
      optionsValues.map((option, index) => {
        return <option key={index} value={option} className="fw-normal text-dark">{option}</option>
      })
    )
  }

  function handleOnChange(ev) {
    ev.preventDefault();
    setValueSelect(ev.target.value)
    setSelect(valueSelect)
  }

  return (
    <div className="contSelectElement form-floating form-group container-fluid d-flex flex-row justify-content-start align-items-center m-0 p-1">
      <label className="form-label labelOfForm mx-auto pt-2" style={{ color: colorSelect, fontSize: fontSizeSelect }}>
        {labelElement}
      </label>
      <select id={elementID} size="1" required={required} disabled={disabled} aria-label=".form-select-sm"
        className={`form-select-sm contSelect rounded-0 ${disabled ? "selectNotActiv" : "selectActiv border border-secondary"} bg-white `}
        value={valueSelect} autoFocus onChange={(ev) => handleOnChange(ev)} >
        {
          optionsOfSelet(optionsValues)
        }
      </select>
    </div>
  );
}

export default SelectIni;