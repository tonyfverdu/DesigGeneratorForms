import { useState, useEffect } from 'react'
import '../../sass/componentSass/elementsForms/PhoneElem_PB.scss'


function PhoneElem_PB({ elementID, labelElement, required, disabled = false, response, placeholder, size, setPhone }) {
  const [responsePhone, setResponsePhone] = useState(response[0])
  const [valueOfPhone, setValueOfPhone] = useState("")

  useEffect(() => {
    setPhone(placeholder)
    setValueOfPhone(placeholder)
  }, [])

  function handleChange(ev) {
    ev.preventDefault();
    setValueOfPhone(ev.target.value);
    setPhone(valueOfPhone);
  }


  return (
    <div className="contPhoneElement container-fluid d-flex flex-row justify-content-start align-items-center p-1">
      <label htmlFor={elementID} className="form-label labelOfForm d-flex flex-row justify-content-end align-items-center">
        {labelElement}
      </label>
      <input id={elementID} type="tel" className="contInputPhone form-control rounded-0" autoComplete="off" required={required}
        disabled={disabled} pattern="[0-9]{2}-[0-9]{3}-[0-9]{4}" placeholder={placeholder} size={size} maxLength="12"
        list="defaultPhones" value={valueOfPhone} onChange={(ev) => handleChange(ev)} />
      <datalist id="defaultPhones">
        <option value="96-111-1111"></option>
        <option value="96-222-2222"></option>
        <option value="91-333-3333"></option>
        <option value="93-444-4444"></option>
      </datalist>
    </div>
  )
}

export default PhoneElem_PB;