import { useState, useEffect, useContext, useRef } from 'react'
import { MyContext } from '../../context/TheContext.jsx'
import '../../sass/componentSass/elementsForms/NumberElem_PB.scss'


function NumberElem_PB({ id_Element, orderInBlock, labelElement, required, disabled = false, response, placeholder, size, position,
  borderElement, colorElement, fontSizeElement, setNumber }) {
  const theContext = useContext(MyContext)
  const [responseNumber, setResponseNumber] = useState(response[0])
  const [valueOfNumber, setValueOfNumber] = useState(0)
  const elementRef = useRef(null)
  const OrderRef = useRef(null)
  const RowYRef = useRef(null)
  const ColXRef = useRef(null)

  useEffect(() => {
    setValueOfNumber(placeholder)
    setNumber(valueOfNumber)
  }, [])

  function handleChange(ev) {
    ev.preventDefault();
    setValueOfNumber(ev.target.value);
    setNumber(valueOfNumber);
  }

  // function handleClickDataShow(ev) {
  //   console.log(ev.target)
  //   console.log('useRef:  ', elementRef.current)
  //   console.log("*********************************************")
  //   console.log("Orden: ", OrderRef.current.textContent)
  //   console.log("X: ", ColXRef.current.textContent)
  //   console.log("Y: ", RowYRef.current.textContent)
  //   console.log("*********************************************")

  //   theContext.setObjComponentShow({
  //     ...theContext.objComponentShow, type: "text"
  //   })
  // }

  return (
    <div ref={elementRef} className={`contNumberElement form-group container-fluid d-flex flex-row justify-content-start align-items-center m-0 p-1
    ${borderElement ? "border-1 border-secondary" : "border-0"}`}

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
      title={`Order: ${orderInBlock}       Position: X = ${position.colElem}  Y = ${position.rowElem}`} >

      <label htmlFor={id_Element} className="form-label labelOfForm d-flex flex-row justify-content-end align-items-center me-1"
        style={{ color: colorElement, fontSize: fontSizeElement }} >
        {labelElement}
      </label>

      <input id={id_Element} type="number" className={`contInputNumber form-control rounded-0 ${disabled ? "numberNotActiv" : "numberActiv"}`}
        required={required} disabled={disabled} placeholder={placeholder} size={size} min="0" max={Math.pow(10, size) - 1}
        value={valueOfNumber} onChange={(ev) => handleChange(ev)} />

    </div>
  )
}

export default NumberElem_PB;

  // function handleClickBubbleShow(ev) {
  //   console.log(ev.target)
  //   console.log('useRef:  ', elementRef.current)
  //   console.log("*********************************************")
  //   console.log("Orden: ", OrderRef.current.textContent)
  //   console.log("X: ", ColXRef.current.textContent)
  //   console.log("Y: ", RowYRef.current.textContent)
  //   console.log("*********************************************")

  //   theContext.setObjComponentShow({
  //     ...theContext.objComponentShow, type: "number"
  //   })
  // }

  {/* <div className="bubble row container-fluid bg-body m-0 p-0">
        <p className="col text-start fw-bold m-0 p-1" style={{ fontSize: "0.6rem" }}>
          Orden:  <span ref={OrderRef} className="text-danger fw-bolder m-0 p-0" >
            {orderInBlock}
          </span>
        </p>
        <p className="col text-center fw-bold m-0 p-1" style={{ fontSize: "0.6rem" }}>
          Pos: x= <span ref={ColXRef} className="text-danger fw-bolder m-0 p-0" style={{ fontSize: "0.65rem" }}>
            {position.colElem}
          </span>
          y= <span ref={RowYRef} className="text-danger fw-bolder m-0 p-0" style={{ fontSize: "0.65rem" }}>
            {position.rowElem}
          </span>
        </p>
      </div> */}
