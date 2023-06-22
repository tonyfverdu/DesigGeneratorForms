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

function IconsElem() {
  const [elementIcons, setElementIcons] = useState("")
  const theContext = useContext(MyContext)

  useEffect(() => {
    theContext.setElement(elementIcons)
  }, [elementIcons])

  return (
    <div className="contIcons col-12 p-1">
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