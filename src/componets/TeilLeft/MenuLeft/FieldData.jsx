import { useContext } from "react";
import { MyContext } from "../../../context/TheContext";

function FieldData({ title, value, fontSize,  action }) {
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
          <input type="date" className="contInputDate form-control text-center rounded-0" required={true}
            placeholder={"01/01/2023"} size={5}
            value={value} onChange={action} />
      }
    </>
  )
}

export default FieldData;