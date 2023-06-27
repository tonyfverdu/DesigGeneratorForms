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


function IconsElem({height}) {
  const [elementIcons, setElementIcons] = useState("")
  const theContext = useContext(MyContext)

  useEffect(() => {
    theContext.setElement(elementIcons)
    // console.log("theContext.element: ", theContext.element)
  }, [elementIcons])

  return (
    <div className="contIcons col p-2" style={{transform: `scale(${height})`}}>
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