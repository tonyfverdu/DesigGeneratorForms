import { useState, useEffect, useContext, useRef } from 'react'
import { MyContext } from '../../context/TheContext.jsx'


function IconoElem_PB({ id_Element, orderInBlock, required, disabled = false, widthImage, position,
  borderElement, srcURLIcon, nameImage, setIcon }) {
  const theContext = useContext(MyContext)
  const [valueOfIcon, setValueOfIcon] = useState("")
  const elementRef = useRef(null)
  const OrderRef = useRef(null)
  const RowYRef = useRef(null)
  const ColXRef = useRef(null)

  useEffect(() => {
    setValueOfIcon(nameImage)
    setIcon(valueOfIcon)
  }, [])

  function handleClickDataShow(ev) {
    console.log(ev.target)
    console.log('useRef:  ', elementRef.current)
    console.log("*********************************************")
    console.log("Orden: ", OrderRef.current.textContent)
    console.log("X: ", ColXRef.current.textContent)
    console.log("Y: ", RowYRef.current.textContent)
    console.log("*********************************************")

    theContext.setObjComponentShow({
      ...theContext.objComponentShow, type: "icon"
    })
  }


  return (
    <div ref={elementRef} className={`w-${widthImage} container-fluid d-flex flex-row justify-content-center align-items-center m-0 p-1
    ${borderElement ? "border-1 border-dark rounded-circle" : "border-0"}`}

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
      onClick={(ev => handleClickDataShow(ev))}>

      <img id={id_Element} src={`${srcURLIcon}${nameImage}.svg`} className="icon img-thumbnail rounded-circle mx-auto d-block" required={required}
        disabled={disabled} alt={`Icon image:  ${nameImage}`} />

    </div>
  )
}

export default IconoElem_PB;

//  ../src/assets/iconImages/