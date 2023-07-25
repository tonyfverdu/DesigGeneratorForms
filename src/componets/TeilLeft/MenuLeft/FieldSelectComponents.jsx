import { useContext } from "react";
import { MyContext } from "../../../context/TheContext";

function FieldSelectComponents({ title, value, fontSize, arrayValues, action }) {
  const theContext = useContext(MyContext)

  return (
    <>
      <span className="ms-1 p-1 fw-bold"
        style={{ fontSize: fontSize, textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
        {title}
      </span>

      <select id="id_select_components" size="1" required aria-label=".form-select-sm"
        className="contSelect col rounded-0 border border-secondary bg-white fw-bold p-1 my-1 mx-1 text-danger"
        onChange={action}
        style={{ color: "rgb(9, 9, 9)", fontSize: fontSize, width: "100%" }} >

        <option value="select" className="fw-bold text-center text-danger"
          style={{ fontSize: fontSize }} >
          Select
        </option>
        {
          Array.isArray(arrayValues) &&
          arrayValues.map(comp => {
            return (
              <option key={comp.id_Component} className="fw-normal text-dark" value={comp.title} >
                {comp.title}
              </option>
            )
          })
        }
      </select >
    </>
  )
}

export default FieldSelectComponents;