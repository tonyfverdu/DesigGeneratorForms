import {useContext} from 'react'
import { MyContext } from '../../context/TheContext'
import { MdPhone } from 'react-icons/md';
import '../../sass/componentSass/icons/IconButton.scss'


function IconButtonPhone() {
  const theContext = useContext(MyContext)

  function handleButton() {
    theContext.setElement("phone")
  }

  return (
    <div className="col p-0 m-0">
      <button type="button" className="iconButton" onClick={handleButton}>
        <MdPhone />
      </button>
    </div>
  )
}

export default IconButtonPhone;