import { useState, useContext } from 'react'
import { MyContext } from '../../context/TheContext.jsx'
import '../../sass/componentSass/elementsForms/LabelElem_PB.scss'


function LabelElem_PB({ elementID, required, disabled, response, placeholder, size }) {
  const [responseLabel, setResponseLabel] = useState(response[0])
  const theContext = useContext(MyContext)


  return (
    <div className="contLabelElement_PB container-fluid d-flex flex-row justify-content-center align-items-center m-0 p-1 
    border border-1 border-secondary" >
      <label id={elementID} className="labelElement form-label d-flex justify-content-center align-items-center" required={required}
        disabled={disabled} placeholder={placeholder} size={size} >
        {placeholder}
      </label>
    </div>
  )
}

export default LabelElem_PB;