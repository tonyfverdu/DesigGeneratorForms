import {useContext} from 'react'
import { MyContext } from '../../context/TheContext'
import { MdFormatListBulleted } from 'react-icons/md';
import '../../sass/componentSass/icons/IconButton.scss'


function IconButtonSelect() {
  const theContext = useContext(MyContext)

  function handleButton() {
    theContext.setElement("select")
  }

  return (
    <div className="col p-0 m-0">
      <button type="button" className="iconButton" onClick={handleButton}>
        <MdFormatListBulleted />
      </button>
    </div>
  )
}

export default IconButtonSelect;