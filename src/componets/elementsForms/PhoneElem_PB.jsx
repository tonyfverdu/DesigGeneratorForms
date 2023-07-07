import { useState, useEffect, useContext, useRef } from 'react'
import { MyContext } from '../../context/TheContext.jsx'
import '../../sass/componentSass/elementsForms/PhoneElem_PB.scss'


function PhoneElem_PB({ elementID, orderInBlock, labelElement, required, disabled = false, response, placeholder, size, position,
  borderElement, colorElement, fontSizeElement, setPhone }) {
  const theContext = useContext(MyContext)
  const [responsePhone, setResponsePhone] = useState(response[0])
  const [valueOfPhone, setValueOfPhone] = useState("")
  const elementRef = useRef(null)
  const OrderRef = useRef(null)
  const RowYRef = useRef(null)
  const ColXRef = useRef(null)

  useEffect(() => {
    setValueOfPhone(placeholder)
    setPhone(valueOfPhone)
  }, [])

  function handleChange(ev) {
    ev.preventDefault();
    setValueOfPhone(ev.target.value);
    setPhone(valueOfPhone);
  }


  return (
    <div ref={elementRef} className={`contPhoneElement form-group container-fluid d-flex flex-row justify-content-start align-items-center m-0 p-1
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

      <label htmlFor={elementID} className="form-label labelOfForm d-flex flex-row justify-content-end align-items-center me-2"
        style={{ color: colorElement, fontSize: fontSizeElement }}>
        {labelElement}
      </label>

      <input id={elementID} type="tel" className={`contInputPhone form-control rounded-0 ${disabled ? "phoneNotActiv" : "phoneActiv"}`}
        autoComplete="off" required={required} disabled={disabled} pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}" placeholder={placeholder} size={size}
        maxLength="12" list="defaultPhones" value={valueOfPhone} onChange={(ev) => handleChange(ev)} />
      <datalist id="defaultPhones">
        <option value="96-1111-1111"></option>
        <option value="96-2222-2222"></option>
        <option value="91-3332-3333"></option>
        <option value="93-4442-4444"></option>
      </datalist>

    </div>
  )
}

export default PhoneElem_PB;

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
      ...theContext.objComponentShow, type: "phone"
    })
  }

*/

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