import { useState, useContext, useRef } from 'react'
import { MyContext } from '../../context/TheContext.jsx'
import '../../sass/componentSass/elementsForms/LabelElem_PB.scss'


function LabelElem_PB({ elementID, orderInBlock, required, disabled, response, placeholder, size, position,
  width, borderElement, colorElement, fontSizeElement }) {
  const theContext = useContext(MyContext)
  const [responseLabel, setResponseLabel] = useState(response[0])
  const elementRef = useRef(null)
  const OrderRef = useRef(null)
  const RowYRef = useRef(null)
  const ColXRef = useRef(null)

  return (
    <div className={`container-fluid d-flex flex-column justify-content-start align-items-center m-0 p-0 
    ${borderElement ? "border border-dark" : "border-0"}`}

      data-bs-toggle="tooltip" data-bs-html="false" data-bs-placement="bottom" data-bs-offset="10,15" data-bs-animation="true"
      data-bs-delay={{ "show": 500, "hide": 100 }}
      data-bs-template={`
      <div className="tooltip" role="tooltip">
        <div className="tooltip-arrow">
        </div>
        <div className="tooltip-inner">
        </div>
      </div>`}
      title={`Order: ${orderInBlock}       Position: X = ${position.colElem}  Y = ${position.rowElem}`}>

      <div ref={elementRef} className="contLabelElement_PB d-flex flex-row justify-content-center align-items-center m-0 p-1" >

        <label id={elementID} className="form-label labelOfForm d-flex flex-row justify-content-end align-items-center fw-bold me-2"
          style={{ color: colorElement, fontSize: fontSizeElement}} required={required} disabled={disabled} placeholder={placeholder} size={size} >
          {placeholder}
        </label>
      </div>

    </div >
  )
}

export default LabelElem_PB;

/*
 <div className="bubble row container-fluid bg-body m-0 p-0">
          <p className="col-6 text-start fw-bold m-0 p-1" style={{ fontSize: "0.6rem" }}>
            Orden:  <span ref={OrderRef} className="text-danger fw-bolder m-0 p-0" >
              {orderInBlock}
            </span>
          </p>
          <p className="col-6 text-center fw-bold m-0 p-1" style={{ fontSize: "0.6rem" }}>
            Pos: x= <span ref={ColXRef} className="text-danger fw-bolder m-0 p-0" style={{ fontSize: "0.65rem" }}>{position.colElem} </span>
            y= <span ref={RowYRef} className="text-danger fw-bolder m-0 p-0" style={{ fontSize: "0.65rem" }}>{position.rowElem}</span>
          </p>
        </div>
*/

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
      ...theContext.objComponentShow, type: "label"
    })
  }
*/

/*
  const objComponentIni = {  //  Object of Component - element
    elementID: "",
    type: "",
    blockOrigen: "",
    orderInBlock: "0",
    position: { rowElem: 0, colElem: 0 },
    dimensions: { width: 0, height: "2.4rem" },
    labelElement: "",
    required: true,
    disabled: false,
    checked: undefined,
    response: [""],
    placeholder: "",
    size: 1,
    row:0, 
    cols:0,
    optionsValues: [""],
    legend: "",
    name: "",
    valueComponent: "",
    setComponent: "",
    radioButtons: [
      {
        elementID: "",
        labelElement: "",
        name: "",
        required: true,
        disabled: false,
        checked: false,
        response: [false],
        setRadioButton: null
      }
    ]
  }
*/