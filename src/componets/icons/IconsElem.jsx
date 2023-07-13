import { useState, useEffect, useContext } from 'react'
import { MyContext } from '../../context/TheContext'

import IconButtonLabel from './IconButtonLabel'
import IconButtonText from './IconButtonText'
import IconButtonNumber from './IconButtonNumber'
import IconButtonDate from './IconButtonDate'
import IconButtonPhone from './IconButtonPhone'
import IconButtonEmail from './IconButtonEmail'
import IconButtonTextArea from './IconButtonTextArea'
import IconButtonSelect from './IconButtonSelect'
import IconButtonCheckbox from './IconButtonCheckbox'
import IconButtonRadioButton from './IconButtonRadioButton'
import IconButtonTable from './IconButtonTable'
import IconButtonIcons from './IconButtonIcons'
import '../../sass/componentSass/icons/IconsElem.scss'


function IconsElem({ height }) {
  const theContext = useContext(MyContext)
  const [elementIcons, setElementIcons] = useState("")
  
  useEffect(() => {
    theContext.setElement(elementIcons)
  }, [elementIcons])

  return (
    <div className="contIcons col d-flex justify-content-center align-items-center p-1" style={{ transform: `scale(${height})` }}>
      <IconButtonLabel />
      <IconButtonText />
      <IconButtonNumber />
      <IconButtonDate />
      <IconButtonPhone />
      <IconButtonEmail />
      <IconButtonTextArea />
      <IconButtonSelect />
      <IconButtonCheckbox />
      <IconButtonRadioButton />
      <IconButtonTable />
      <IconButtonIcons />
    </div>
  )
}

export default IconsElem;