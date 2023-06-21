import { useContext } from 'react'
import { MyContext } from '../../context/TheContext'
import { MdRadioButtonChecked } from 'react-icons/md';
import '../../sass/componentSass/icons/IconButton.scss'


function IconButtonRadioButton() {
  const theContext = useContext(MyContext)

  function handleButton() {
    theContext.setElement("radioButtons")
  }

  return (
    <div className="col p-0 m-0">
      <button type="button" className="iconButton" onClick={handleButton}>
        <MdRadioButtonChecked />
      </button>
    </div>
  )
}

export default IconButtonRadioButton;