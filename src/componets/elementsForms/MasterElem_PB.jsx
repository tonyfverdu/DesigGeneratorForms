import { useState, useRef, useCallback } from 'react'
import ListDataElement from './ListDataElement.jsx'
import '../../sass/componentSass/elementsForms/MasterElem_PB.scss'


function MasterElem_PB({ comp }) {
  const arrayOfList = [
    { color: "primary", fontSize: "0.6rem", title: "Id:", value: comp.id_Element },
    { color: "success", fontSize: "0.6rem", title: "Title:", value: comp.title_Element },
    { color: "primary", fontSize: "0.6rem", title: "Type of element:", value: comp.type_Element },
    { color: "success", fontSize: "0.6rem", title: "Label:", value: comp.label_Element },
    { color: "primary", fontSize: "0.6rem", title: "Placeholder:", value: comp.placeholder },
    { color: "success", fontSize: "0.6rem", title: "Order in block:", value: comp.orderInBlock },
  ];

  const [toogleActiv, setToogleActiv] = useState(false);
  const refElement = useRef(null);

  const handleBtnChangeActiv = () => setToogleActiv(prevState => !prevState);

  const renderDataElement = () => (
    <ListDataElement
      TitleList="Component Data"
      fontSize="0.6rem"
      arrayOfLines={arrayOfList}
    />
  );

  const renderLabelElement = () => {
    const labelProps = {
      ref: refElement,
      id: comp.id_Element,
      className: "buttonMasterElem d-flex flex-row justify-content-start align-items-center m-0 p-1",
      required: true,
      disabled: false,
      value: comp.placeholder,
      "data-row": "0",
      "data-col": "0",
      "data-width": comp.width
    };
    const containerProps = {
      className: "contMasterElement_PB container-fluid d-flex flex-row justify-content-start align-items-center m-0 p-0"
    };

    return (
      <div {...containerProps}>
        <label {...labelProps}>
          {comp.placeholder}
        </label>
      </div>
    );
  };

  return (
    <div
      className="container-fluid d-flex flex-row justify-content-center align-items-center m-0 p-0 graycolor300"
      onClick={handleBtnChangeActiv}
    >
      {toogleActiv ? renderDataElement() : renderLabelElement()}
    </div>
  );
}

export default MasterElem_PB;





