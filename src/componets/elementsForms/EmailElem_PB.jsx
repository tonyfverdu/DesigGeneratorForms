import { useState, useEffect } from 'react'
import '../../sass/componentSass/elementsForms/EmailElem_PB.scss'


function EmailElem_PB({ elementID, labelElement, required, disabled = false, response, placeholder, size, setEmail }) {
  const [responseEmail, setResponseEmail] = useState(response[0])
  const [valueOfEmail, setValueOfEmail] = useState("")

  useEffect(() => {
    setEmail(placeholder)
    setValueOfEmail(placeholder)
  }, [])

  function handleChange(ev) {
    ev.preventDefault();
    setValueOfEmail(ev.target.value);
    setEmail(valueOfEmail);
  }


  return (
    <div className="contEmailElement container-fluid d-flex flex-row justify-content-start align-items-center p-1">
      <label htmlFor={elementID} className="form-label labelOfForm d-flex flex-row justify-content-end align-items-center">
        {labelElement}
      </label>
      <input id={elementID} type="email" className="contInputEmail form-control rounded-0" autoComplete="off" required={required}
        disabled={disabled} placeholder={placeholder} size={size} value={valueOfEmail} onChange={(ev) => handleChange(ev)} />
    </div>
  )
}

export default EmailElem_PB;