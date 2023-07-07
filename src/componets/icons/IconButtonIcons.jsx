import { useContext } from 'react'
import { MyContext } from '../../context/TheContext'
import { TbIcons } from 'react-icons/tb';
import '../../sass/componentSass/icons/IconButton.scss'


function IconButtonIcons() {
  const theContext = useContext(MyContext)

  function handleButton() {
    theContext.setElement("icon")
    theContext.setObjComponentShow({
      ...theContext.objComponentShow, id_Element: "ID_icon_001",
      type: "icon", srcURLIcon: "../src/assets/iconImages/", nameImage: "iconImage", widthImage: 25,
      dimensions: { width: 4, height: "2.4rem" },
      labelElement: "",
      valueComponent: theContext.icon,
      setComponent: theContext.setIcon
    })
  }

  return (
    <div className="col p-0 m-0">
      <button type="button" className="iconButton" onClick={handleButton}>
        <TbIcons />
      </button>
    </div>
  )
}

export default IconButtonIcons;