import { useContext } from "react";
import { MyContext } from "../../../context/TheContext";

function FieldSelect({ title, value, fontSize, arrayValues, action }) {
  const theContext = useContext(MyContext);

  const renderOptions = (parValue) => {
    if (!Array.isArray(parValue)) {
      throw new Error('Error: The argument of the function "renderOptions" must be an array!!');
    }
    return arrayValues.map((elem, index) => <option key={index} className="fw-normal text-dark">{elem}</option>)
  };

  const renderValue = (parValue) => {
    if (theContext.tooRead) {
      return (
        <span className="ms-1 p-1 fw-normal" style={{ fontSize: fontSize }}>
          {parValue}
        </span>
      );
    } else {
      return (
        <select size="1" required={true} aria-label=".form-select-sm" className="contSelect rounded-0 container border border-secondary bg-white fw-bold p-1 my-1 mx-1 text-danger" style={{ fontSize: fontSize }} value={value} onChange={action}>
          <option value="" className="fw-bold text-secondary text-danger" style={{ fontSize: fontSize }}>
            Select
          </option>
          {renderOptions(arrayValues)}
        </select>
      );
    }
  };

  return (
    <>
      <span className="ms-1 p-1 fw-bold" style={{ fontSize: fontSize, textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }}>
        {title}
      </span>
      {renderValue(value)}
    </>
  );
}

export default FieldSelect;