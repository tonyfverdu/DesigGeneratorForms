import { useContext } from 'react';
import { MyContext } from '../../../context/TheContext.jsx';
import { TbZoomInAreaFilled } from "react-icons/tb";

function FieldSelectColors({ title, value, fontSize, arrayValues, action }) {
  const theContext = useContext(MyContext);

  return (
    <>
      <span id="id_span_componets" className="ms-1 p-1 fw-bold"
        style={{ fontSize: fontSize, textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
        {title}
      </span>

      {
        theContext.tooRead ?
          <span className="ms-0 p-1 fw-normal" style={{ fontSize: "0.6rem" }} >{value}</span>
          :
          <select id="id_select_color" size="1" required disabled={false}
            className="contSelect rounded-0 container border border-secondary bg-white fw-bold py-1 pe-4 my-1 mx-0 text-danger"
            value={value} onChange={action}
            style={{ color: "rgb(9, 9, 9)", fontSize: fontSize }} >

            <option value="select" className="fw-bold text-secondary text-center text-danger"
              style={{ fontSize: fontSize }}>
              Select
            </option>

            {
              Array.isArray(arrayValues) &&
              arrayValues.map(color => <option key={color.code} value={color.color} className="fw-bolder graycolor400"
                style={{ fontSize: "0.58rem", color: `${color.code}` }}>
                {color.color}
              </option>)
            }
          </select>
      }

    </>

  )
}

export default FieldSelectColors;