import { useState, useEffect, useContext, useRef } from 'react'
import { MyContext } from '../../context/TheContext.jsx'
import '../../sass/componentSass/elementsForms/TextElem_PB.scss'


function TextElem_PB({ id_Element, orderInBlock, labelElement, required, disabled = false, response, placeholder, size, position,
  borderElement, colorElement, fontSizeElement, text, setText }) {
  const theContext = useContext(MyContext)
  const [responseText, setResponseText] = useState(response[0])
  const [valueOfText, setValueOfText] = useState("")
  const elementRef = useRef(null)
  const OrderRef = useRef(null)
  const RowYRef = useRef(null)
  const ColXRef = useRef(null)

  useEffect(() => {
    setValueOfText(placeholder)
    setText(valueOfText)
  }, [])

  function handleChange(ev) {
    ev.preventDefault();
    setValueOfText(ev.target.value);
    setText(valueOfText);
    console.log("text:  ", text.value)
  }

  function handleClickDataShow(ev) {
    console.log(ev.target)
    //   console.log('useRef:  ', elementRef.current)
    //   console.log("*********************************************")
    //   console.log("Orden: ", OrderRef.current.textContent)
    //   console.log("X: ", ColXRef.current.textContent)
    //   console.log("Y: ", RowYRef.current.textContent)
    //   console.log("*********************************************")

    //   theContext.setObjComponentShow({
    //     ...theContext.objComponentShow, type: "text"
    //   })
  }


  return (
    <div ref={elementRef} className={`contTextElement form-group container-fluid d-flex flex-row justify-content-start align-items-center m-0 p-1
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

      title={`Order: ${orderInBlock}  Position: X = ${position.colElem}  Y = ${position.rowElem}`}

      value={text} onClick={(ev => handleClickDataShow(ev))}>

      <label htmlFor={id_Element} className="form-label labelOfForm d-flex flex-row justify-content-end align-items-center me-2"
        style={{ color: colorElement, fontSize: fontSizeElement }}>
        {labelElement}
      </label>

      <input id={id_Element} type="text" className={`contInputText form-control rounded-0 px-1 py-2 ${disabled ? "textNotActiv" : "textActiv"}`}
        autoComplete="off" required={required} disabled={disabled} placeholder={placeholder} size={size}
        value={valueOfText} onChange={(ev) => handleChange(ev)} />

    </div>
  )
}

export default TextElem_PB;

// function handleClickBubbleShow(ev) {
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

/*
<div className="bubble row container-fluid bg-body m-0 p-0">
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
      </div>
*/
