import {useContext} from 'react'
import { MyContext } from '../../context/TheContext'
import { MdEmail } from 'react-icons/md';
import '../../sass/componentSass/icons/IconButton.scss'


function IconButtonEmail() {
  const theContext = useContext(MyContext)

  function handleButton() {
    theContext.setElement("email")
  }

  return (
    <div className="col p-0 m-0">
      <button type="button" className="iconButton" onClick={handleButton}>
        <MdEmail />
      </button>
    </div>
  )
}

export default IconButtonEmail;