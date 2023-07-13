import { useState, useEffect, useContext } from 'react';
import { MyContext } from '../context/TheContext';
import '../sass/componentSass/SelectIni.scss'


function SelectIni({ id_Element, labelElement, required, disabled = false, placeholder, optionsValues, colorSelect, fontSizeSelect, setSelect }) {
  const theContext = useContext(MyContext)
  const [valueSelect, setValueSelect] = useState("");

  // useEffect(() => {
  //   setSelect(valueSelect);
  //   console.log("Value Select:  ", valueSelect)
  // }, [valueSelect])

  function optionsOfSelect(optionsValues) {
    return (
      optionsValues.map((option, index) => {
        return <option key={index} value={option} className="fw-normal text-dark">{option}</option>
      })
    )
  }

  function handleOnChange(ev) {
    ev.preventDefault();
    setValueSelect(ev.target.value)
    // console.log("Value Select:  ", valueSelect)
    // theContext.setFormObject(valueSelect)
  }

  return (
    <div className="form-group container-fluid d-flex flex-row justify-content-start align-items-center m-0 p-1" >
      <label htmlForm={id_Element} className="labelOfSelectIni fw-bold text-center form-label mx-1"
        style={{ color: colorSelect, fontSize: fontSizeSelect }} >
        {labelElement}
      </label>
      <select id={id_Element} size="1" required={required} disabled={disabled} aria-label=".form-select-sm"
        className={`form-select-sm contSelect container bg-white fw-bold p-1 my-1 text-danger 
        ${disabled ? "selectIniNotActiv" : "selectIniActiv border border-secondary"}`}
        value={valueSelect} autoFocus onChange={(ev) => handleOnChange(ev)}
        style={{ color: "rgb(9, 9, 9)", fontSize: "0.6rem" }} >

        <option value="select" className="fw-bold text-secondary text-center text-danger"
          style={{ fontSize: "0.65rem" }}>
          Select
        </option>
        {
          optionsOfSelect(optionsValues)
        }
      </select>
    </div>
  );
}

export default SelectIni;