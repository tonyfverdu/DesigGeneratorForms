import { useState, useEffect, useContext } from 'react';
import { MyContext } from '../../context/TheContext.jsx';
import { IconContext } from 'react-icons';
import { MdModeEdit, MdDeleteForever } from 'react-icons/md';

import ShowElements from '../TeilLeft/ShowElements.jsx';
import IconsElem from './IconsElem.jsx';

import FieldText from '../TeilLeft/MenuLeft/FieldText.jsx';
import FieldSelect from '../TeilLeft/MenuLeft/FieldSelect.jsx';
import ButtonX from '../ButtonX';
import ActionButtons from '../TeilLeft/MenuLeft/ActionButtons';
import { TITLES_RCM_LEFT, GROUP_BUTTONS_ACTIONS, TYPE_ELEMENTS2 } from '../../constants/contants.js';
import Popup from 'reactjs-popup';

import '../../sass/componentSass/icons/IconEditDelete.scss';

const IconEditDelete = ({ block, component, handleComponent, deleteComponent, refElementDiv }) => {
  const { tooRead, formObject, setFormObject, arrayOfBlocks, setArrayOfBlocks, blockSelectObject, setBlockSelectObject,
    indexOfBlockInArray, setIndexOfBlockInArray, arrayOfComponentsObject, setArrayOfComponetsObject,
    arrayOfRowsCompsObject, setArrayOfRowsCompsObject,
    componentSelectObject, setComponentSelectObject } = useContext(MyContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [indexInArrayOfComponents, setIndexInArrayOfComponents] = useState(0);
  const [componentSelectLocal, setComponentSelectLocal] = useState(component);

  const styleCircleCSS = {
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    width: "auto",
    height: "auto",
    padding: "0.05rem",
    hover: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      transform: "scale(0.5)",
      transformScale: "0.5"
    },
    backgroundImage: "../../assets/icons/eyeicon.svg",
  };
  const contentStyle = { width: '18%', height: 'auto', marginTop: '1.36rem' };
  const overlayStyle = { width: 'auto', height: 'auto' };

  useEffect(() => {
    setComponentSelectLocal(component);
    // console.log('component: ', component);

    // console.log('blockSelectObject en useEffect de IconEditDelete: ', blockSelectObject);

    // console.log("ver que es esto, arrayOfRowsCompsObject: ", arrayOfRowsCompsObject);

    //const indexEs = blockSelectObject.columns[indexOfBlockInArray].components.indexOf(componentSelectLocal);


    // console.log('blockSelectObject: ', blockSelectObject);
    // console.log('indexOfBlockInArray: ', indexOfBlockInArray);


    // const indexEs = blockSelectObject.columns[indexOfBlockInArray].components.indexOf(componentSelectLocal);
    // setIndexInArrayOfComponents(indexEs);
    // console.log('indexEs: ', indexEs);

    // console.log('blockSelectObject.columns[indexOfBlockInArray].components: ', blockSelectObject.columns[indexOfBlockInArray].components);

    // console.log('componentSelectLocal: ', componentSelectLocal);
    // console.log('component: ', component.title_Element);
  }, [component]);

  // useEffect(() => {
  //   setComponentSelectObject(component);
  //   console.log('componentSelectLocal: ', component);
  // }, [componentSelectLocal]);

  const handleEditComponent = () => {
    // console.log('blockSelectObject: ', blockSelectObject);

    setComponentSelectObject(component);
    handleComponent(component);
    // console.log('componentSelectObject: ', component);
    // setIsModalOpen(true);
  }

  return (
    <div className="contIconsEditDelete d-flex justify-content-around align-items-center flex-column m-0 p-0 rounded-end">
      <Popup
        trigger={
          <button
            type="button"
            className="btn btn-outline-warning d-flex justify-content-center align-items-center border-0 m-0 p-0"
            style={styleCircleCSS}
          >
            <IconContext.Provider value={{ color: "rgba(251, 182, 53, 0.9)", size: "0.9rem", className: "contIconEdit" }}>
              <div className="d-flex flex-row justify-content-center align-items-center"
                onClick={() => handleEditComponent()}
                title="Edit"
              >
                <MdModeEdit />
              </div>
            </IconContext.Provider>
          </button>
        }
        open={isModalOpen}
        position="bottom center"
        contentStyle={contentStyle}
        overlayStyle={overlayStyle}
      >
        {(close) => (
          <>
            <div className="modalPopup">
              <ButtonX toggleHeader={isModalOpen} setToggleHeader={close} />
            </div>
            <div className="content w-full">
              {/* ****     Fields - Components    **** */}
              <ShowDataComponent
                block={block}
                valueComp={componentSelectObject}
                setValueComp={setComponentSelectObject}
              />
              {/* ****     Icons - Components    **** */}
              <ShowElements
                valueComp={componentSelectObject}
              />
              {
                !tooRead &&
                <div className="row p-1">
                  <IconsElem
                    height={"0.8"}
                    valueComp={componentSelectObject}
                    setValueComp={setComponentSelectObject}
                  />
                </div>
              }
            </div>
            <div
              className="w-full d-flex justify-content-end align-items-center mx-auto"
              style={{ padding: "0.05rem", marginBottom: "0.2rem" }}
            >
              <ActionButtons {...GROUP_BUTTONS_ACTIONS} />
            </div>
          </>
        )}
      </Popup>

      <IconContext.Provider value={{ color: "rgba(250, 29, 29, 0.9)", size: "1rem", className: "contIconDelete" }}>
        <div className="d-flex flex-row justify-content-center align-items-center m-0 p-0"
          onClick={() => deleteComponent(refElementDiv)}
          title="Delete"
        >
          <MdDeleteForever />
        </div>
      </IconContext.Provider>

    </div >
  );
};

export default IconEditDelete;

const ShowDataComponent = ({ block, valueComp, setValueComp }) => {
  const { tooRead,
    formObject, setFormObject,
    arrayOfBlocks, setArrayOfBlocks,
    blockSelectObject, setBlockSelectObject,

    indexOfBlockInArray, setIndexOfBlockInArray,
    arrayOfComponentsObject, setArrayOfComponetsObject,

    arrayOfRowsCompsObject, setArrayOfRowsCompsObject,
    componentSelectObject, setComponentSelectObject } = useContext(MyContext);
  const [compSelectLocal, setCompSelectLocal] = useState(valueComp);

  // useEffect(() => {
  //   setCompSelectLocal(valueComp);
  // }, [valueComp]);

  useEffect(() => {
    // console.log("entro aqui en useEffect que cambia el objeto componente del contexto, compSelectLocal: ", compSelectLocal);
    // console.log("En ShowDataComponent, blockSelectObject: ", blockSelectObject);

    setComponentSelectObject(compSelectLocal);

    const newArrayOfRowsCompsObject = [...arrayOfRowsCompsObject];
    // const indexEstimate = newArrayOfRowsCompsObject.indexOf(compSelectLocal);
    // newArrayOfRowsCompsObject[indexEstimate] = compSelectLocal;
    // setArrayOfRowsCompsObject(newArrayOfRowsCompsObject);

    // console.log('newArrayOfRowsCompsObject: ', newArrayOfRowsCompsObject);
  }, [compSelectLocal]);

  useEffect(() => {
    if (tooRead) {
      // console.log("entro en tooRead, tooRead:  ", tooRead); // "entro aqui"
      setCompSelectLocal(componentSelectObject);
    }

  }, [tooRead]);

  function handleChangeTYPECOMP(ev) {
    ev.preventDefault();
    const { value } = ev.target;

    setCompSelectLocal({ ...compSelectLocal, type_Element: value });
    // setValueComp({ ...valueComp, type_Element: value });
  };
  function handleChangeTITLECOMP(ev) {
    ev.preventDefault();
    const { value } = ev.target;

    setCompSelectLocal({ ...compSelectLocal, title_Element: value });
    // setValueComp({ ...valueComp, title_Element: value });
  };

  // Define the static JSX element outside the return statement
  const fieldSelect_Type = (
    <FieldSelect
      title={TITLES_RCM_LEFT.COMPONENT_TYPE}
      value={compSelectLocal.type_Element}
      fontSize="0.5rem"
      arrayValues={TYPE_ELEMENTS2}
      action={handleChangeTYPECOMP}
    />
  );
  const fieldText_Title = (
    <FieldText
      title={TITLES_RCM_LEFT.COMPONENT_TITLE}
      value={compSelectLocal.title_Element}
      fontSize="0.5rem"
      action={handleChangeTITLECOMP}
    />
  );


  return (
    <div id="accordionComp" className="accordion container-fluid graycolor400 d-flex flex-column justify-content-center align-items-center p-0 mx-auto">
      <div className="accordion-body p-0 mb-0 mx-auto">
        <div className="row d-flex justify-content-center align-items-center gap-1 mb-0">
          <div className="col-3 d-flex flex-column justify-content-start align-items-center p-1 bg-body"
            style={{ margin: "auto 0.08rem" }}
          >
            {fieldSelect_Type}
          </div>
          <div className="col d-flex flex-column justify-content-start align-items-start p-1 bg-body">
            {fieldText_Title}
          </div>
        </div>
      </div>
    </div>

  );
};
