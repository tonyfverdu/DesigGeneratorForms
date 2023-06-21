import { useContext } from 'react'
import { MyContext } from '../../context/TheContext'
import { MdCheckBox } from 'react-icons/md';
import '../../sass/componentSass/icons/IconButton.scss'


function IconButtonCheckbox() {
  const theContext = useContext(MyContext)

  function handleButton() {
    theContext.setElement("checkbox")
  }

  return (
    <div className="col p-0 m-0">
      <button type="button" className="iconButton" onClick={handleButton}>
        <MdCheckBox />
      </button>
    </div>
  )
}

export default IconButtonCheckbox;