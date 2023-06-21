import {useContext} from 'react'
import { MyContext } from '../../context/TheContext'
import { BsTextareaT } from 'react-icons/bs';
import '../../sass/componentSass/icons/IconButton.scss'


function IconButtonTextArea() {
  const theContext = useContext(MyContext)

  function handleButton() {
    theContext.setElement("textArea")
  }

  return (
    <div className="col p-0 m-0">
      <button type="button" className="iconButton" onClick={handleButton}>
        <BsTextareaT />
      </button>
    </div>
  )
}

export default IconButtonTextArea