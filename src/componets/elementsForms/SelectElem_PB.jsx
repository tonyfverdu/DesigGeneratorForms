import { useState, useEffect, useContext, useRef } from "react";
import { MyContext } from '../../context/TheContext.jsx'
import '../../sass/componentSass/elementsForms/SelectElem_PB.scss'


function SelectElement_PB({ id_Element, orderInBlock, labelElement, required, disabled = false, response, placeholder, size, position,
  borderElement, colorElement, fontSizeElement, optionsValues, setSelect }) {
  const theContext = useContext(MyContext)
  const [responseSelect, setResponseSelect] = useState(response[0])
  const [valueOfSelect, setValueOfSelect] = useState("")
  const elementRef = useRef(null)
  const OrderRef = useRef(null)
  const RowYRef = useRef(null)
  const ColXRef = useRef(null)

  useEffect(() => {
    setValueOfSelect(placeholder)
    setSelect(response[0])
  }, [])

  function handleOnChange(ev) {
    ev.preventDefault();
    setValueOfSelect(ev.target.value)
    setSelect(valueOfSelect)
  }


  return (
    <div ref={elementRef} className={`contSelectElement container-fluid form-floating form-group d-flex flex-row 
    justify-content-start align-items-center m-0 p-1 ${borderElement ? "border-1 border-secondary" : "border-0"}`}

      data-bs-toggle="tooltip" data-bs-html="false" data-bs-placement="bottom" data-bs-offset="10,15" data-bs-animation="true"
      data-bs-delay={{ "show": 500, "hide": 100 }}
      data-bs-customClass="bg-danger text-primary"
      data-bs-template={`
      <div className="tooltip" role="tooltip">
        <div className="tooltip-arrow">
        </div>
        <div className="tooltip-inner">
        </div>
      </div>`}
      title={`Order: ${orderInBlock}       Position: X = ${position.colElem}  Y = ${position.rowElem}`}

      style={{ color: colorElement, fontSize: fontSizeElement }} >

      <label htmlFor={id_Element} className="form-label labelOfForm d-flex flex-row justify-content-end align-items-center me-2"
        style={{ color: colorElement, fontSize: fontSizeElement }}>
        {labelElement}
      </label>

      <select id={id_Element} size={size} required={required} disabled={disabled} aria-label=".form-select-sm"
        className={`form-select-sm contSelect rounded-0 ${disabled ? "selectNotActiv" : "selectActiv border border-secondary"} bg-white`}
        value={valueOfSelect} onChange={(ev) => handleOnChange(ev)} >
        <option value="" className="fw-bold text-secondary fs-6">Select</option>
        {
          optionsValues.map((element, index) => <option key={index} value={element} className="fw-normal text-dark">{element}</option>)
        }
      </select>

    </div>
  );
}

export default SelectElement_PB;

/*
  function handleClickBubbleShow(ev) {
    console.log(ev.target)
    console.log('useRef:  ', elementRef.current)
    console.log("*********************************************")
    console.log("Orden: ", OrderRef.current.textContent)
    console.log("X: ", ColXRef.current.textContent)
    console.log("Y: ", RowYRef.current.textContent)
    console.log("*********************************************")

    theContext.setObjComponentShow({
      ...theContext.objComponentShow, type: "text"
    })
  }
*/