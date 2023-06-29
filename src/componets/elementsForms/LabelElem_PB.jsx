import { useState, useContext, useRef } from 'react'
import { MyContext } from '../../context/TheContext.jsx'
import '../../sass/componentSass/elementsForms/LabelElem_PB.scss'


function LabelElem_PB({ elementID, orderInBlock, required, disabled, response, placeholder, size, position, width }) {
  const [responseLabel, setResponseLabel] = useState(response[0])
  const theContext = useContext(MyContext)
  const elementRef = useRef(null)
  const OrderRef = useRef(null)
  const RowYRef = useRef(null)
  const ColXRef = useRef(null)

  function handleClick(ev) {
    console.log(ev.target)
    console.log('useRef:  ', elementRef.current)
    console.log("*********************************************")
    console.log("Orden: ", OrderRef.current.textContent)
    console.log("X: ", ColXRef.current.textContent)
    console.log("Y: ", RowYRef.current.textContent)
    console.log("*********************************************")
    //  Change OBJComponent

    // const newObjComponentLabel = {
    //   elementID: elementID,
    //   type: "label",
    //   blockOrigen: "Prueba de origen",
    //   orderInBlock: OrderRef.current.textContent,
    //   position: { rowElem: ColXRef.current.textContent, colElem: RowYRef.current.textContent },
    //   dimensions: { width: width, height: "2.4rem" },
    //   labelElement: "",
    //   required: required,
    //   disabled: disabled,
    //   checked: undefined,
    //   response: response,
    //   placeholder: placeholder,
    //   size: size,
    //   optionsValues: [""],
    //   legend: "",
    //   name: "",
    //   valueComponent: "",
    //   setComponent: "",
    //   radioButtons: [
    //     {
    //       elementID: "",
    //       labelElement: "",
    //       name: "",
    //       required: true,
    //       disabled: false,
    //       checked: false,
    //       response: [false],
    //       setRadioButton: null
    //     }
    //   ]
    // }
    theContext.setObjComponentShow({
      ...theContext.objComponentShow, type: "label"
    })
  }

  return (
    <div className="container-fluid d-flex flex-column justify-content-start align-items-center m-0 p-0 border border-dark">
      <div ref={elementRef} className="contLabelElement_PB d-flex flex-row justify-content-center align-items-center m-0 p-1"
        onClick={(ev) => handleClick(ev)} >
        <label id={elementID} className="labelElement d-flex justify-content-center align-items-center m-0 p-0" required={required}
          disabled={disabled} placeholder={placeholder} size={size} >
          {placeholder}
        </label>

        <div className="bubble row container-fluid bg-body m-0 p-0">
          <p className="col text-start fw-bold m-0 p-1" style={{ fontSize: "0.6rem" }}>
            Orden:  <span ref={OrderRef} className="text-danger fw-bolder m-0 p-0" style={{ fontSize: "0.65rem" }}>{orderInBlock}</span>
          </p>
          <p className="col text-center fw-bold m-0 p-1" style={{ fontSize: "0.6rem" }}>
            Pos: x= <span ref={ColXRef} className="text-danger fw-bolder m-0 p-0" style={{ fontSize: "0.65rem" }}>{position.colElem} </span>
            y= <span ref={RowYRef} className="text-danger fw-bolder m-0 p-0" style={{ fontSize: "0.65rem" }}>{position.rowElem}</span>
          </p>
        </div>
      </div>
    </div >
  )
}

export default LabelElem_PB;

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