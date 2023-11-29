import { useState, useEffect, useContext, useRef } from 'react';
import { MyContext } from '../../../context/TheContext.jsx';
import MasterElem_PB from '../../elementsForms/MasterElem_PB.jsx';
import WhiteSpace_PB from '../../elementsForms/WhiteSpace_PB.jsx';
import IconEditDelete from '../../icons/IconEditDelete.jsx';
import '../../../sass/componentSass/TeilRight/Column.scss';


function Column({ block, comp }) {
  const { arrayColumns, setArrayColumns,
    formObject, setFormObject,
    arrayOfBlocks, setArrayOfBlocks,
    blockSelectObject, setBlockSelectObject,

    indexOfBlockInArray, setIndexOfBlockInArray,
    arrayOfComponentsObject, setArrayOfComponetsObject,

    arrayOfRowsCompsObject, setArrayOfRowsCompsObject,
    componentSelectObject, setComponentSelectObject } = useContext(MyContext);

  const [toogleColBefore, setToogleColBefore] = useState(false);
  const [toogleColAfter, setToogleColAfter] = useState(false);
  const [isSpace, setIsSpace] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [componentSelect, setComponentSelect] = useState({});  //  <<===   User-selected Component

  const refElementDiv = useRef(null);

  // useEffect(() => {
  //   console.log('En UseEffect de Column, block: ', block);
    
  // }, [block])

  useEffect(() => {

    setComponentSelect(comp);
  }, [comp]);

  // useEffect(() => {
  //   console.log('En UseEffect, componentSelectObject: ', componentSelectObject);

  // }, [componentSelectObject])

  useEffect(() => {
    if (!toogleColBefore && toogleColAfter) {
      setArrayColumns(prevArrayColumns => [...prevArrayColumns, prevArrayColumns.length]);
    }
  }, [toogleColBefore, toogleColAfter]);


  const addNewCol = (parAfterBefore) => {
    if (!["after", "before"].includes(parAfterBefore)) {
      throw new Error('Error: The argument of the function "addNewCol" must be either "after" or "before"!');
    }
    parAfterBefore === "after" ? setToogleColAfter(!toogleColAfter) : setToogleColBefore(!toogleColBefore);
  };

  const handleComponent = (parComponent) => {
    console.log("entro en handleComponent de Column: parComponent: ", parComponent);
    console.log("En handleComponent, block: ", block);
    setComponentSelect(parComponent);
    setComponentSelectObject(parComponent);
    setIsModalOpen(!isModalOpen);

    // const newArrayOfRowsCompsObject = [...arrayOfRowsCompsObject];
    // const indexEstimate = newArrayOfRowsCompsObject.indexOf(parComponent);
    // newArrayOfRowsCompsObject[indexEstimate] = parComponent;
    // setArrayOfRowsCompsObject(newArrayOfRowsCompsObject);

    // console.log('newArrayOfRowsCompsObject: ', newArrayOfRowsCompsObject);
  };

  const deleteComponent = (parRefElement) => {
    const parent = parRefElement?.current?.parentNode;
    if (parent) {
      parent.removeChild(parRefElement.current);
    }
  };


  return (
    <div ref={refElementDiv} className="container-fluid d-flex flex-row justify-content-start align-items-start p-0 mx-2">
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
        {isSpace ? (
          <WhiteSpace_PB />
        ) : (
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
              block={blockSelectObject}
              handleComponent={handleComponent}
              deleteComponent={deleteComponent}
              refElementDiv={refElementDiv}
            />
          </div>
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
