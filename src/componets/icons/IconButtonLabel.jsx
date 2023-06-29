import { useContext } from 'react';
import { MyContext } from '../../context/TheContext'
import { MdFontDownload } from 'react-icons/md';
import '../../sass/componentSass/icons/IconButton.scss'


function IconButtonLabel() {
  const theContext = useContext(MyContext)

  function handleButton() {
    theContext.setElement("label")

    theContext.setObjComponentShow({
      ...theContext.objComponentShow, elementID: "ID_label_001",
      type: "label", placeholder: "Soy un componente Label", size: 10
    })
  }

  return (
    <div className="col p-0 m-0">
      <button type="button" className="iconButton" onClick={handleButton}>
        <MdFontDownload />
      </button>
    </div>
  )
}

export default IconButtonLabel;