import { useContext } from "react";
import { MyContext } from "../../../context/TheContext";

function FieldSelect({ title, value, fontSize, arrayValues, action }) {
  const theContext = useContext(MyContext)

  return (
    <>
      <span className="ms-1 p-1 fw-bold"
        style={{ fontSize: fontSize, textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
        {title}
      </span>
      {
        theContext.tooRead ?
          <span className="ms-1 p-1 fw-normal" style={{ fontSize: fontSize }} >
            {value}
          </span>
          :
          <select size="1" required={true} aria-label=".form-select-sm" className="contSelect rounded-0 container border border-secondary 
                        bg-white fw-bold p-1 my-1 mx-1 text-danger" style={{ fontSize: fontSize }}
            value={value} onChange={action} >
              
            <option value="" className="fw-bold text-secondary text-danger" style={{ fontSize: fontSize }}>
              Select
            </option>
            {
              Array.isArray(arrayValues) &&
              arrayValues.map((elem, index) => <option key={index} className="fw-normal text-dark" >{elem}</option>)
            }
          </select>
      }
    </>
  )
}

export default FieldSelect;