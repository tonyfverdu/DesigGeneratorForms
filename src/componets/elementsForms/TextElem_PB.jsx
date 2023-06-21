import { useState, useEffect } from 'react'
import '../../sass/componentSass/elementsForms/TextElem_PB.scss'


function TextElem_PB({ elementID, labelElement, required, disabled = false, response, placeholder, size, setText }) {
  const [responseText, setResponseText] = useState(response[0])
  const [valueOfText, setValueOfText] = useState("")

  useEffect(() => {
    setText(placeholder)
    setValueOfText(placeholder)
  }, [])

  function handleChange(ev) {
    ev.preventDefault();
    setValueOfText(ev.target.value);
    setText(valueOfText);
  }

  return (
    <div className="contTextElement form-group container-fluid d-flex flex-row justify-content-start align-items-center p-1">  
      <label htmlFor={elementID} className="form-label labelOfForm d-flex flex-row justify-content-end align-items-center">
        {labelElement}
      </label>
      <input id={elementID} type="text" className="contInputText form-control rounded-0" autoComplete="off" required={required}
        disabled={disabled} placeholder={placeholder} size={size} value={valueOfText} onChange={(ev) => handleChange(ev)} />
    </div>
  )
}

export default TextElem_PB;
