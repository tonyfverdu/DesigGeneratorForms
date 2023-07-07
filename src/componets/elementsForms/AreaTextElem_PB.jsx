import { useState, useEffect, useContext, useRef } from 'react'
import { MyContext } from '../../context/TheContext.jsx'
import '../../sass/componentSass/elementsForms/AreaTextElem_PB.scss'


function AreaTextElem_PB({ elementID, orderInBlock, labelElement, required, disabled = false, readonly, response, placeholder, row, cols,
  position, borderElement, colorElement, fontSizeElement, setAreaText }) {
  const theContext = useContext(MyContext)
  const [responseAreaText, setResponseAreaText] = useState(response[0])
  const [valueOfAreaText, setValueOfAreaText] = useState("")
  const elementRef = useRef(null)
  const OrderRef = useRef(null)
  const RowYRef = useRef(null)
  const ColXRef = useRef(null)


  useEffect(() => {
    setValueOfAreaText(placeholder)
    setAreaText(valueOfAreaText)
  }, [])

  function handleChange(ev) {
    ev.preventDefault();
    setValueOfAreaText(ev.target.value);
    setAreaText(valueOfAreaText)
  }

  return (
    <div ref={elementRef} className={`contAreaTextElement form-group container-fluid d-flex flex-column justify-content-start 
    align-items-start m-0 p-1 form-floating
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

      <label htmlFor={elementID} className="form-check-label labelOfForm d-flex flex-row justify-content-start align-items-center mb-1"
        style={{ color: colorElement, fontSize: fontSizeElement }}>
        {labelElement}
      </label>

      <textarea id={elementID}
        className={`contAreaText form-control ${disabled ? "areaTextNotActiv" : "areaTextActiv"}`} required={required} autoComplete="off"
        readOnly={readonly} placeholder={placeholder} rows={row} cols={cols} value={valueOfAreaText}
        onChange={(ev) => handleChange(ev)}></textarea>
    </div>
  )
}

export default AreaTextElem_PB;