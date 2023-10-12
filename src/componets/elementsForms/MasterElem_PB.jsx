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
    { color: "success", fontSize: "0.6rem", title: "Order in block::", value: comp.orderInBlock },
  ];
  const [toogleActiv, setToogleActiv] = useState(false);
  const refElement = useRef(null);

  const handleBtnMaster = useCallback(() => {
    setToogleActiv((prevState) => !prevState);
  }, []);

  return (
    <div
      className="container-fluid d-flex flex-row justify-content-center align-items-center m-0 p-0 graycolor300"
      onClick={handleBtnMaster}
    >
      {toogleActiv ? (
        <ListDataElement TitleList="Component Data" fontSize="0.62rem" arrayOfLines={arrayOfList} />
      ) : (
        <div className="contMasterElement_PB container-fluid d-flex flex-row justify-content-start align-items-center m-0">
          <label
            ref={refElement}
            id={comp.id_Element}
            className="buttonMasterElem d-flex flex-row justify-content-start align-items-center m-0 p-1"
            required
            disabled
            value={comp.placeholder}
            data-row="0"
            data-col="0"
            data-width={comp.width}
          >
            {comp.placeholder}
          </label>
        </div>
      )}
    </div>
  );
}

export default MasterElem_PB;


