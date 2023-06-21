import {useContext} from 'react'
import { MyContext } from '../../context/TheContext'
import { BsCalendarDate } from 'react-icons/bs';
import '../../sass/componentSass/icons/IconButton.scss'

function IconButtonDate() {
  const theContext = useContext(MyContext)

  function handleButton() {
    theContext.setElement("date")
  }

  return (
    <div className="col p-0 m-0">
      <button type="button" className="iconButton" onClick={handleButton}>
        <BsCalendarDate />
      </button>
    </div>
  )
}

export default IconButtonDate