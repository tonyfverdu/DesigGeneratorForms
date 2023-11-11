import { useState, useEffect, useContext, useRef } from 'react';
import { MyContext } from '../../../context/TheContext.jsx';
import MasterElem_PB from '../../elementsForms/MasterElem_PB.jsx';
import WhiteSpace_PB from '../../elementsForms/WhiteSpace_PB.jsx';
import IconEditDelete from '../../icons/IconEditDelete.jsx';
import '../../../sass/componentSass/TeilRight/Column.scss';


function Column({ comp }) {
  const { arrayColumns, setArrayColumns,  } = useContext(MyContext);
  const [toogleColBefore, setToogleColBefore] = useState(false);
  const [toogleColAfter, setToogleColAfter] = useState(false);
  const [isSpace, setIsSpace] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [componentSelect, setComponentSelect] = useState({});  //  <<===   User-selected Component

  useEffect(() => {
    setComponentSelect(comp);
  }, [comp]);
  
  const refElementDiv = useRef(null);

  const addNewCol = (parAfterBefore) => {
    if (!["after", "before"].includes(parAfterBefore)) {
      throw new Error('Error: The argument of the function "addNewCol" must be either "after" or "before"!');
    }
    parAfterBefore === "after" ? setToogleColAfter(!toogleColAfter) : setToogleColBefore(!toogleColBefore);
  };

  const handleComponent = (parComponent) => {
    console.log('editComponent: ', parComponent);
    setComponentSelect(parComponent);
    setIsModalOpen(!isModalOpen);
  };

  const deleteComponent = (parRefElement) => {
    const parent = parRefElement?.current?.parentNode;
    if (parent) {
      parent.removeChild(parRefElement.current);
    }
  };

  useEffect(() => {
    if (!toogleColBefore && toogleColAfter) {
      setArrayColumns(prevArrayColumns => [...prevArrayColumns, prevArrayColumns.length]);
    }
  }, [toogleColBefore, toogleColAfter]);

  return (
    <div ref={refElementDiv} className="container-fluid d-flex flex-row justify-content-start align-items-start p-0 mx-2 border border-primary">
      {toogleColBefore && <Column comp={comp} />}
      <div className="d-flex flex-column justify-content-between align-items-center p-0 ms-1" style={{ height: "2.6rem" }}>
        <CircleButton isButton="before" addNewCol={addNewCol} parToogleCol={toogleColBefore} />
        <button
          type="button"
          className={`btn btn-outline-success circleCol ${!isSpace ? "circleColSpace" : "circleColMinus"} d-flex flex-row justify-content-center align-items-center mx-auto fw-bold text-white p-0`}
          style={{ fontSize: "0.6rem" }}
          onClick={() => setIsSpace(!isSpace)}
        >
          S
        </button>
      </div>
      <div className="mx-1 p-0" >
        {!isSpace ? (
          <div className="d-flex flex-row justify-content-center align-items-center p-0 mx-auto">
            <MasterElem_PB
              comp={comp}
              id_Element={comp.id_Element}
              type_Element={comp.type_Element}
              placeholder={comp.placeholder}
              width={comp.dimension.width}
              disabled={comp.disabled}
            />
            
            <IconEditDelete
              component={componentSelect}
              handleComponent={handleComponent}
              deleteComponent={deleteComponent}
              refElementDiv={refElementDiv}
            />
          </div>
        ) : (
          <WhiteSpace_PB />
        )}
      </div>
      <CircleButton
        isButton="after"
        addNewCol={addNewCol}
        parToogleCol={toogleColAfter}
      />
      {toogleColAfter && <Column comp={comp} />}
    </div>
  );
};

export default Column;

export function CircleButton({ isButton, addNewCol, parToogleCol }) {
  const buttonClass = `circleCol ${parToogleCol ? "circleColMinus" : "circleColPlus"} d-flex flex-row justify-content-center align-items-center p-0`;
  const buttonText = !parToogleCol ? "+" : "-";

  const handleClick = () => addNewCol(isButton);

  return (
    <button
      type="button"
      className={buttonClass}
      onClick={handleClick}
    >
      <span className="fw-bolder mx-auto text-dark text-center">
        {buttonText}
      </span>
    </button>
  );
};
