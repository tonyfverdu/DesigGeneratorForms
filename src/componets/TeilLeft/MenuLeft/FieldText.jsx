import { useContext } from "react";
import { MyContext } from "../../../context/TheContext";

function FieldText({ title, value, fontSize, action }) {
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
          <input type="text" className="contInputText form-control me-3 rounded-0 text-start" autoComplete="off" required={true}
            value={value} onChange={ev=>action(ev)}
          />
      }
    </>
  )
}

export default FieldText;

//  value={value} 