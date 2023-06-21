import { useContext } from 'react';
import { MyContext } from '../../context/TheContext'
import { MdFontDownload, MdSettingsInputComponent } from 'react-icons/md';
import '../../sass/componentSass/icons/IconButton.scss'

function IconButtonLabel() {
  const theContext = useContext(MyContext)

  // function actComponentValues(parComponent) {
  //   parComponent.elementID = elementID;
  //   parComponent.type = "label";
  //   parComponent.blockOrigen = "blockOrigen";
  //   parComponent.orderInBlock = 1;
  //   parComponent.position = { row: 1, col: 1 };
  //   parComponent.dimensions = { width: 0, height: "2.4rem" };
  //   parComponent.labelElement = "";
  //   parComponent.required = required;
  //   parComponent.disabled = disabled;
  //   parComponent.response = response;
  //   parComponent.placeholder = placeholder;
  //   parComponent.size = size;
  //   parComponent.valueComponent = "";
  //   parComponent.setComponent = "";
  // }
  
  const component = {
    elementID: "ID_0000",
    type: "label",
    blockOrigen: "The first Block",
    orderInBlock: "0",
    position: { row: 0, col: 0 },
    dimensions: { width: 3, height: "2.4rem" },
    labelElement: "",
    required: true,
    disabled: false,
    response: ["Ich war im Vergangenheit ein Label"],
    placeholder: "Jetzt bin ich wieder ein Label",
    size: 15,
    valueComponent: "Ich bin ein Label",
    setComponent: theContext.setLabel
  }

  function handleButton() {
    theContext.setElement("label")
    theContext.setObjComponent(component)
    // actComponentValues (theContext.objComponent)
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