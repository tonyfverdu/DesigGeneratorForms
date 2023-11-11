import { useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { MyContext } from '../context/TheContext.jsx';
import ButtonX from './ButtonX.jsx';
import DataFormMenu from './TeilLeft/MenuLeft/DataFormMenu.jsx';
import HeaderHead from "./TeilLeft/MenuLeft/HeaderHead.jsx";
import FieldText from './TeilLeft/MenuLeft/FieldText.jsx';
import FieldData from './TeilLeft/MenuLeft/FieldData.jsx';
import FieldTextArea from './TeilLeft/MenuLeft/FieldTextArea.jsx';
import FieldSelect from './TeilLeft/MenuLeft/FieldSelect.jsx';
import FieldSelectAdd from './TeilLeft/MenuLeft/FieldSelectAdd.jsx';
import ActionButtons from './TeilLeft/MenuLeft/ActionButtons.jsx';
import { TITLES_RCM_LEFT, GROUP_BUTTONS_ACTIONS } from '../constants/contants.js';

import Popup from 'reactjs-popup';

function ButtonIconForm({ iconComponent }) {
  const { setBlockSelectObject } = useContext(MyContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const styleCircleCSS = {
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    width: "auto",
    height: "auto",
    padding: "0.1rem",
    hover: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      transform: "scale(0.9)",
      transformScale: "1.1"
    },
    backgroundImage: "../../assets/icons/eyeicon.svg"
  };

  return (
    <Popup
      trigger={
        <button
          type="button"
          className="buttonIcon btn btn-outline-secondary d-flex justify-content-center align-items-center rounded-circle"
          style={styleCircleCSS}
        >
          <span className="d-flex flex-row justify-content-center align-items-center p-1 m-1">
            {iconComponent}
          </span>
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <>
          <div className="modalPopup">
            <ButtonX toggleHeader={isModalOpen} setToggleHeader={close} />
          </div>
          <div className="content w-full">
            {/* <DataFormMenu
              formSelectLocal={formSelectLocal}
              setFormSelectLocal={setFormSelectLocal}
              setBlockSelect={theContext.setBlockSelectObject}
            /> */}
            <ShowIconFormMenu />
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
  );
}

export default ButtonIconForm;

const ShowIconFormMenu = () => {
  const { formObject, setFormObject, arrayOfBlocks, setArrayOfBlocks, blockSelectObject, setBlockSelectObject, masterBlock } = useContext(MyContext);

  // State variables of component
  const [newArrayLocalBlocks, setNewArrayLocalBlocks] = useState(formObject.blocks);
  const [indexBlockSelect, setIndexBlockSelect] = useState(0);
  const [newBlock, setNewBlock] = useState({});

  const arrayValues = useMemo(() => ["YES", "NOT"], []);

  //  UseEffects Hooks
  useEffect(() => {
    setNewBlock(masterBlock);
    setNewArrayLocalBlocks(formObject.blocks);
    setIndexBlockSelect(0);
  }, []);

  useEffect(() => {
    setBlockSelectObject(arrayOfBlocks[indexBlockSelect]);
  }, [indexBlockSelect]);

  useEffect(() => {
    setFormObject(prevFormSelect => ({ ...prevFormSelect, blocks: newArrayLocalBlocks }));
  }, [newArrayLocalBlocks]);

  //  Funtions handlers of form objects
  const handleChange = useCallback((ev, fieldName) => {
    ev.preventDefault();
    const { value: newValue } = ev.target;

    setFormObject(prevFormSelect => ({ ...prevFormSelect, [fieldName]: newValue }));
  }, [setFormObject]);

  const handleBlockSelect = useCallback((ev) => {
    ev.preventDefault();
    const newValue = ev.target.value;

    const newBlockSelectObject = formObject.blocks.find(block => block.title_Block === newValue);
    setBlockSelectObject(newBlockSelectObject);

    const newIndexInArrayBlocks = formObject.blocks.findIndex(block => block.title_Block === newValue);
    if (newIndexInArrayBlocks !== -1) {
      setIndexBlockSelect(newIndexInArrayBlocks);
    } else {
      throw new Error("Block not found");
    }
  }, [formObject.blocks]);

  const handleAddBlock = useCallback((ev) => {
    ev.preventDefault();
    setNewBlock(prevNewBlock => ({ ...prevNewBlock, title_Block: ev.target.value }));
  }, [setNewBlock]);

  const handleClickAddBlock = useCallback((ev) => {
    ev.preventDefault();
    setNewArrayLocalBlocks(prevArrayLocalBlocks => [...prevArrayLocalBlocks, newBlock]);

    setArrayOfBlocks(prevArrayOfBlocks => [...prevArrayOfBlocks, newBlock]);
  }, [newBlock]);

  //  Fields of the form
  const headerHeadFormTitle = (
    <HeaderHead
      idHeading="headingForm"
      dataTarget="#collapseForm"
      ariaControl="collapseForm"
      fontSize="0.62rem"
      title={TITLES_RCM_LEFT.FORM_HEAD}
      value={formObject.title_Form}
    />
  );
  const fieldTextTitleForm = (
    <FieldText
      title={TITLES_RCM_LEFT.FORM_TITLE}
      value={formObject.title_Form}
      fontSize="0.6rem"
      action={(ev) => handleChange(ev, "title_Form")}
    />
  );
  const fieldTextIDForm = (
    <FieldText
      title={TITLES_RCM_LEFT.FORM_ID_TITLE}
      value={formObject.id_Form}
      fontSize="0.6rem"
      action={(ev) => handleChange(ev, "id_Form")}
    />
  );
  const fieldDataCreationForm = (
    <FieldData
      title={TITLES_RCM_LEFT.FORM_DATE_CREATION}
      value={formObject.creation_date_Form}
      fontSize="0.6rem"
      action={(ev) => handleChange(ev, "creation_date_Form")}
    />
  );
  const fieldTextVersionForm = (
    <FieldText
      title={TITLES_RCM_LEFT.FORM_VERSION}
      value={formObject.version_Form}
      fontSize="0.6rem"
      action={(ev) => handleChange(ev, "version_Form")}
    />
  );
  const fieldSelectReadonlyForm = (
    <FieldSelect
      title={TITLES_RCM_LEFT.FORM_READONLY}
      value={(formObject.readonly_Form + '').toUpperCase()}
      fontSize="0.6rem"
      arrayValues={arrayValues}
      action={(ev) => handleChange(ev, "readonly_Form")}
    />
  );
  const fieldTextAreaDescriptionForm = (
    <FieldTextArea
      title={TITLES_RCM_LEFT.FORM_DESCRIPTION}
      value={formObject.description_Form}
      fontSize="0.6rem"
      action={(ev) => handleChange(ev, "description_Form")}
    />
  );
  const fieldSelectAddBlock = (
    <FieldSelectAdd
      title={TITLES_RCM_LEFT.FORM_BLOCKS}
      type="blocks"
      value={formObject.blocks}
      fontSize="0.6rem"
      fontSizeButton="0.64rem"
      action={handleBlockSelect}
      actionAddButton={handleAddBlock}
      actionClickAdd={handleClickAddBlock}
    />
  );

  return (
    <div id="accordionForm" className="accordion container-fluid graycolor400 d-flex flex-column justify-content-center align-items-center p-1 mx-auto mb-1">
      <div className="accordion-item rounded-0 container-fluid w-auto mx-auto graycolor400 border-0 "
        style={{ marginBottom: "0.3rem" }} >
        {headerHeadFormTitle}
        <div id="collapseForm" className="accordion-collapse collapse ms-0" aria-labelledby="headingForm" data-bs-parent="#accordionForm">
          <div className="accordion-body p-0 mb-0">
            <div className="row d-flex justify-content-center align-items-center gap-1 m-1" >
              <div className="col-12 d-flex flex-row justify-content-start align-items-start m-0 p-1 bg-body">
                {fieldTextTitleForm}
              </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center gap-1 m-1">
              <div className="col-12 d-flex flex-row justify-content-start align-items-start m-0 p-1 bg-body">
                {fieldTextIDForm}
              </div>
            </div>

            <div className="row d-flex justify-content-between align-items-center gap-1 m-1">
              <div className="col-4 d-flex flex-column justify-content-start align-items-center m-0 p-1 bg-body" style={{ height: "3.6rem" }}>
                {fieldDataCreationForm}
              </div>

              <div className="col-4 d-flex flex-column justify-content-start align-items-center m-0 py-1 px-0 bg-body" style={{ height: "3.6rem" }}>
                {fieldTextVersionForm}
              </div>

              <div className="col d-flex flex-column justify-content-start align-items-center m-0 p-1 bg-body" style={{ height: "3.6rem" }}>
                {fieldSelectReadonlyForm}
              </div>
            </div>

            <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
              <div className="col-12 d-flex flex-column justify-content-start align-items-start m-0 p-1 bg-body">
                {fieldTextAreaDescriptionForm}
              </div>
            </div>

            <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
              <div className="col-12 d-flex flex-column justify-content-center align-items-start m-0 p-1 bg-body" >
                {fieldSelectAddBlock}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
