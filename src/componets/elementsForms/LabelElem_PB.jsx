import { useState, useEffect, useContext } from 'react'
import { MyContext } from '../../context/TheContext.jsx'
import '../../sass/componentSass/elementsForms/LabelElem_PB.scss'


function LabelElem_PB({ elementID, required, disabled, response, placeholder, size, setLabel }) {
  // const [responseLabel, setResponseLabel] = useState(response[0])
  const [valueOfLabel, setValueOfLabel] = useState("")
  const theContext = useContext(MyContext)



  useEffect(() => {
    // actComponentValues (theContext.objComponent)
    // setLabel(placeholder)
    setValueOfLabel(placeholder)
  }, [])

  function handleChange(ev) {
    ev.preventDefault();
    setValueOfLabel(ev.target.value);
    setLabel(valueOfText);
  }


  return (
    <div className="contLabelElement_PB container-fluid d-flex flex-row justify-content-around align-items-center p-1">
      <label id={elementID} className="labelElement form-label d-flex justify-content-end align-items-center" required={required}
        disabled={disabled} placeholder={placeholder} size={size} onChange={((ev) => handleChange(ev))}>{valueOfLabel}</label>
    </div>
  )
}

export default LabelElem_PB;