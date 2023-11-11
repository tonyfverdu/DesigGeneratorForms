import { useState, useEffect, useContext, useCallback } from 'react';
import { MyContext } from '../context/TheContext.jsx';
import HeaderHead from './TeilLeft/MenuLeft/HeaderHead.jsx';
import FieldText from './TeilLeft/MenuLeft/FieldText.jsx';
import FieldTextArea from './TeilLeft/MenuLeft/FieldTextArea.jsx';
import FieldSelectAdd from './TeilLeft/MenuLeft/FieldSelectAdd.jsx';
import FieldSelect from './TeilLeft/MenuLeft/FieldSelect.jsx';
import { TITLES_RCM_LEFT } from '../constants/contants.js';
import compByBlock from '../functions/compByBlock.js';

const InfoBlock = ({ valueComp, setValueComp }) => {
  // const { formObject, setFormObject, arrayOfBlocks, setArrayOfBlocks, blockSelectObject, setBlockSelectObject,
  //   setArrayOfRowsCompsObject, setArrayOfComponetsObject, tooRead } = useContext(MyContext);
    const theContext = useContext(MyContext);
    const [compLocal, setCompLocal] = useState(valueComp);
  
    useEffect(() => {
      setCompLocal(valueComp);
    }, [valueComp])
  
    function handleChangeTYPECOMP(ev) {
      ev.preventDefault();
      const newValue = ev.target.value;
  
      setCompLocal({ ...compLocal, type_Element: newValue });
      setValueComp({ ...compLocal, type_Element: newValue });
    }
    function handleChangeTITLECOMP(ev) {
      ev.preventDefault();
      const newValue = ev.target.value;
  
      setCompLocal({ ...compLocal, title_Element: newValue });
      setValueComp({ ...compLocal, type_Element: newValue });
    }
    function handleChangeIDCOMP(ev) {
      ev.preventDefault()
      const newValue = ev.target.value
  
      setCompLocal({ ...compLocal, id_Element: newValue })
    }
    function handleChangeORDERINLOCK(ev) {
      ev.preventDefault()
      const newValue = ev.target.value
  
      setCompLocal({ ...compLocal, orderInBlock: newValue })
    }
    function handleChangeLABELCOMP(ev) {
      ev.preventDefault()
      const newValue = ev.target.value
  
      setCompLocal({ ...compLocal, label_Element: newValue })
    }
    function handleChangeSIZECOMP(ev) {
      ev.preventDefault()
      const newValue = ev.target.value
  
      setCompLocal({ ...compLocal, size: newValue })
    }
    function handleChangePLACEHOLDERCOMP(ev) {
      ev.preventDefault()
      const newValue = ev.target.value
  
      setCompLocal({ ...compLocal, placeholder: newValue })
    }
    function handleChangeREQUIREDCOMP(ev) {
      ev.preventDefault()
      const newValue = ev.target.value
  
      setCompLocal({ ...compLocal, required: newValue })
    }
    function handleChangeDISABLEDCOMP(ev) {
      ev.preventDefault()
      const newValue = ev.target.value
  
      setCompLocal({ ...compLocal, disabled: newValue })
    }
    function handleChangeBORDERCOMP(ev) {
      ev.preventDefault()
      const newValue = ev.target.value
  
      setCompLocal({ ...compLocal, borderElement: newValue })
    }
    function handleChangeCOLORCOMP(ev) {
      ev.preventDefault()
      const newValue = ev.target.value
  
      setCompLocal({ ...compLocal, colorElement: newValue })
    }
    function handleChangeFSCOMP(ev) {
      ev.preventDefault()
      const newValue = ev.target.value
  
      setCompLocal({ ...compLocal, fontSizeElement: newValue })
    }
  
    // Define the static JSX element outside the return statement
    const fieldSelect_Type = (
      <FieldSelect
        title={TITLES_RCM_LEFT.COMPONENT_TYPE}
        value={valueComp.type_Element}
        fontSize="0.5rem"
        arrayValues={TYPE_ELEMENTS2}
        action={handleChangeTYPECOMP}
      />
    );
    const fieldText_Title = (
      <FieldText
        title={TITLES_RCM_LEFT.COMPONENT_TITLE}
        value={valueComp.title_Element}
        fontSize="0.5rem"
        action={handleChangeTITLECOMP}
      />
    );
    const fieldText_ID = (
      <FieldText
        title={TITLES_RCM_LEFT.COMPONENT_ID}
        value={valueComp.id_Element}
        fontSize="0.5rem"
        action={handleChangeIDCOMP}
      />
    );
    const fieldText_Label = (
      <FieldText
        title={TITLES_RCM_LEFT.COMPONENT_LABEL}
        value={valueComp.label_Element}
        fontSize="0.5rem"
        action={handleChangeLABELCOMP}
      />
    );
    const fieldNumber_Size = (
      <FieldNumber
        title={TITLES_RCM_LEFT.COMPONENT_SIZE}
        value={valueComp.size}
        fontSize="0.5rem"
        action={handleChangeSIZECOMP}
      />
    );
    const fieldText_Placeholder = (
      <FieldText
        title={TITLES_RCM_LEFT.COMPONENT_PLACEHOLDER}
        value={valueComp.placeholder}
        fontSize="0.5rem"
        action={handleChangePLACEHOLDERCOMP}
      />
    );
    const fieldSelectComponentRequired = (
      <FieldSelect
        title={TITLES_RCM_LEFT.COMPONENT_REQUIRED_ASK}
        value={valueComp.required + ""}
        fontSize="0.5rem"
        arrayValues={["True", "False"]}
        action={handleChangeREQUIREDCOMP}
      />
    );
    const fieldSelectComponentDisabled = (
      <FieldSelect
        title={TITLES_RCM_LEFT.COMPONENT_DISABLED_ASK}
        value={valueComp.disabled + ""}
        fontSize="0.5rem"
        arrayValues={["True", "False"]}
        action={handleChangeDISABLEDCOMP}
      />
    );
    const fieldSelectComponentBorder = (
      <FieldSelect
        title={TITLES_RCM_LEFT.COMPONENT_BORDER}
        value={valueComp.borderElement + ""}
        fontSize="0.5rem"
        arrayValues={["YES", "NOT"]}
        action={handleChangeBORDERCOMP}
      />
    );
    const fieldSelectComponentColor = (
      <FieldSelectColors
        title={TITLES_RCM_LEFT.COMPONENT_COLOR}
        value={valueComp.colorElement}
        fontSize="0.5rem"
        arrayValues={COLOR_COMPONENTS}
        action={handleChangeCOLORCOMP}
      />
    );
    const fieldText_Size = (
      <FieldText
        title={TITLES_RCM_LEFT.COMPONENT_FONT_SIZE}
        value={valueComp.fontSizeElement}
        fontSize="0.5rem"
        action={handleChangeFSCOMP}
      />
    );
    const field_Position = (
      <PositionFielsComp
        title={TITLES_RCM_LEFT.COMPONENT_POSITION}
        titleField1={TITLES_RCM_LEFT.COMPONENT_POSITION_ROW}
        titleField2={TITLES_RCM_LEFT.COMPONENT_POSITION_COLUMN}
        value={valueComp.position}
        // value1Field1={valueComp.position.rowElem}
        // value1Field2={valueComp.position.colElem}
        value1Field1={0}
        value1Field2={0}
        fontSize="0.55rem"
        fontSize2="0.5rem"
        action1={handleChangeORDERINLOCK}
        action2={handleChangeORDERINLOCK}
      />
    );
    const field_Dimension = (
      <PositionFielsComp
        title={TITLES_RCM_LEFT.COMPONENT_DIMENSION}
        titleField1={TITLES_RCM_LEFT.COMPONENT_DIMENSION_WIDTH}
        titleField2={TITLES_RCM_LEFT.COMPONENT_DIMENSION_HEIGHT}
        value={valueComp.dimension}
        // value1Field1={valueComp.dimension.width}
        // value1Field2={valueComp.dimension.height}
        value1Field1={0}
        value1Field2={0}
        fontSize="0.55rem"
        fontSize2="0.5rem"
        action1={handleChangeORDERINLOCK}
        action2={handleChangeORDERINLOCK}
      />
    );
  
  
    return (
      <div id="accordionComp" className="accordion container-fluid graycolor400 d-flex flex-column justify-content-center align-items-center p-1 mx-auto mb-1">
        <div className="accordion-item rounded-0 container-fluid mx-auto graycolor400 border-0" style={{ marginBottom: "0.3rem" }} >
          <HeaderHead
            idHeading="headingComp"
            dataTarget="#collapseComp"
            ariaControl="collapseComp"
            fontSize="0.62rem"
            title={TITLES_RCM_LEFT.COMPONENT_HEAD}
            value={valueComp.title_Element}
          />
  
          <div id="collapseComp" className="accordion-collapse collapse m-0" aria-labelledby="headingComp" data-bs-parent="#accordionComp">
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
  
              <div className="row d-flex justify-content-center align-items-center">
                <div className={`col d-flex ${theContext.tooRead ? "flex-row" : "flex-column"} justify-content-start align-items-start m-0 mt-1 p-1 bg-body `}>
                  {fieldText_ID}
                </div>
              </div>
  
              <div className="row d-flex justify-content-center align-items-center gap-1 mb-0" >
                <div className="col-8 d-flex flex-row justify-content-start align-items-start m-0 mt-1 p-1 bg-body">
                  {fieldText_Label}
                </div>
  
                <div className={`col d-flex $flex-column justify-content-start align-items-center m-0 mt-1 p-0 px-0 bg-body `}>
                  {fieldNumber_Size}
                </div>
              </div>
  
              <div className="row d-flex justify-content-center align-items-center mb-0">
                <div className="col d-flex flex-row justify-content-start align-items-start mx-0 mt-1 p-1 bg-body">
                  {fieldText_Placeholder}
                </div>
              </div>
  
              <div className="row d-flex justify-content-center align-items-center gap-1 mb-0" >
                <div className={`col-6 d-flex ${theContext.tooRead ? "flex-row" : "flex-column"} justify-content-center align-items-center m-0 mt-1 me-2 p-1 bg-body`} >
                  {fieldSelectComponentRequired}
                </div>
  
                <div className={`col d-flex ${theContext.tooRead ? "flex-row" : "flex-column"} justify-content-center align-items-center m-0 mt-1 p-1 bg-body`} >
                  {fieldSelectComponentDisabled}
                </div>
              </div>
  
              <div className="row d-flex justify-content-center align-items-center gap-1 mb-0" >
                <div className={`col d-flex ${theContext.tooRead ? "flex-row align-items-center" : "flex-column align-items-start"} justify-content-start m-0 mt-1 p-1 bg-body`}>
                  {fieldSelectComponentBorder}
                </div>
  
                <div className={`col d-flex ${theContext.tooRead ? "flex-row align-items-center" : "flex-column align-items-start"} justify-content-start align-items-center m-0 mt-1 p-1 bg-body`}>
                  {fieldSelectComponentColor}
                </div>
  
                <div className={`col-${theContext.tooRead ? '4' : '3'} d-flex ${theContext.tooRead ? "flex-row" : "flex-column"} justify-content-start align-items-center m-0 ms-4 mt-1 p-1 bg-body`}>
                  {fieldText_Size}
                </div>
              </div>
  
              <div className="row d-flex justify-content-center align-items-center gap-1 mb-0" >
                <div className="col-6 d-flex flex-column justify-content-start align-items-center m-0 mt-1 p-0 bg-body" >
                  {field_Position}
                </div>
  
                <div className="col d-flex flex-column justify-content-start align-items-center m-0 mt-1 p-0 bg-body">
                  {field_Dimension}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default InfoBlock;

/*
  //  State variables
  const [blockSelectLocal, setBlockSelectLocal] = useState(blockSelect);
  const [indexBlockSelect, setIndexBlockSelect] = useState(0);
  const [parChangeBlock, setParChangeBlock] = useState("");

  const [newArrayLocalBlocks, setNewArrayLocalBlocks] = useState(formObject.blocks);

  const [indexRowSelect, setIndexRowSelect] = useState(0);
  const [compSelectObj, setCompSelectObj] = useState({});
  const [arrayOrders, setArrayOrders] = useState([]);
  const [orderOfComponent, setOrderOfComponent] = useState(0);
  const [arrayCompsByRow, setArrayOfCompsByRow] = useState([]);
  const [arrayComponentsLocal, setArrayComponentsLocal] = useState([]);

  //  UseEffect is used internally by the component implementation to determine whether the component 
  //  should be used for the effect
  useEffect(() => {
    setBlockSelectLocal(blockSelect);
    setBlockSelectObject(blockSelect);

    const newIndexSelect = formObject.blocks.findIndex(block => block.id_Block === blockSelect.id_Block);
    setIndexBlockSelect(newIndexSelect);

    setParChangeBlock("");

    setNewArrayLocalBlocks(formObject.blocks);

    // setRowSelect(blockSelect.columns[0]);
    setArrayOfCompsByRow(blockSelect.columns[0].components);
    setCompSelectObj(blockSelect.columns[0].components[0]);

    const newArrayComp = compByBlock(blockSelect);  //  <<==  All components of the block
    setArrayComponentsLocal(newArrayComp);
    setArrayOfComponetsObject(newArrayComp);
    setOrderOfComponent(blockSelect.columns[0].components[0].orderInBlock);

     // setRowSelect(blockSelect.columns[0]);
     setArrayOfCompsByRow(blockSelect.columns[0].components);
     setCompSelectObj(blockSelect.columns[0].components[0]);

    setArrayOrders(newArrayComp.map((_, index) => index));
  }, [formObject.blocks, blockSelect]);

  //  Functions that should be called when the block is selected
  const handleChange = useCallback((ev, blockKey) => {
    ev.preventDefault();
    const { value: newValue } = ev.target;
    setParChangeBlock(blockKey);

    // 1.- Update block. Update blockSelectLocal, blockSelect, and blockSelectObject using a single spread operator
    const newBlockSelectLocal = { ...blockSelectLocal, [blockKey]: newValue };
    setBlockSelectLocal(newBlockSelectLocal);
    setBlockSelect(newBlockSelectLocal);
    setBlockSelectObject(newBlockSelectLocal);

    // 2.- Update array of blocks. Update the array of blocks by directly modifying the block at the index
    const newArrayBlocks = [...arrayOfBlocks];
    const updatedArrayBlocks = newArrayBlocks.map((block, index) => (index === indexBlockSelect ? newBlockSelectLocal : block));
    // updatedArrayBlocks[indexBlockSelect] = newBlockSelectLocal;

    setNewArrayLocalBlocks(updatedArrayBlocks);
    setArrayOfBlocks(updatedArrayBlocks);

    // 3.- Update array of componets of block select local
    // const updateArrayComponents = newBlockSelectLocal.columns.map(col => col.map(comp => comp));
    // console.log('updateArrayComponents:  ', updateArrayComponents);

    // 3.- Update formObject
    setFormObject({ ...formObject, blocks: updatedArrayBlocks });
  }, [setParChangeBlock, blockSelectLocal, arrayOfBlocks, indexBlockSelect, setNewArrayLocalBlocks, setArrayOfBlocks, setFormObject]);

  const handleRowSelect = useCallback((ev) => {
    ev.preventDefault();
    const { value: rowValue } = ev.target;

    const newRowSelectObject = blockSelect.columns.find(row => "Row: " + row.orderColInBlock === rowValue);

    if (newRowSelectObject) {
      const newIndexRowSelect = blockSelectObject.columns.indexOf(newRowSelectObject);

      if (newIndexRowSelect > -1) {
        const { orderColInBlock, components } = newRowSelectObject;

        setIndexRowSelect(orderColInBlock);
        //setRowSelect(orderColInBlock);

        setArrayComponentsLocal(components);
        setArrayOfRowsCompsObject(components);

        setArrayOfComponetsObject(compByBlock(blockSelect));
      } else {
        throw new Error("Error: The newIndexRowSelect is: " + newIndexRowSelect);
      }
    } else {
      throw new Error('Error: There are no elements in the array of the function "handleRowSelect"');
    }
  }, [blockSelect, blockSelectObject, setArrayComponentsLocal, setIndexRowSelect, setArrayOfRowsCompsObject, setArrayOfComponetsObject, compByBlock]);

  const handleComponentSelect = useCallback((ev) => {
    ev.preventDefault();
    const { value: newValue } = ev.target;

    const selectedComponent = arrayComponentsLocal.find(comp => comp.title_Element === newValue);
    if (!selectedComponent) {
      throw new Error(`Error: The selected component with value "${newValue}" does not exist in the array of components.`);
    }

    setParChangeBlock("components_Block");
    // setValueComp(selectedComponent);
    setCompSelectObj(selectedComponent);
    setOrderOfComponent(selectedComponent.orderInBlock);
  }, [arrayComponentsLocal]);

  //  Fields of DataBlock
  const headerMenuBlock = (
    <HeaderHead
      idHeading="headingBlock"
      dataTarget="#collapseBlock"
      ariaControl="collapseBlock"
      fontSize="0.62rem"
      title={TITLES_RCM_LEFT.BLOCK_HEAD}
      value={blockSelect.title_Block}
    />
  );
  const fieldTextBlockTitle = (
    <FieldText
      title={TITLES_RCM_LEFT.BLOCK_TITLE}
      value={blockSelect.title_Block}
      fontSize="0.6rem"
      action={(ev) => handleChange(ev, "title_Block")}
    />
  );
  const fieldTextBlockID = (
    <FieldText
      title={TITLES_RCM_LEFT.BLOCK_ID_TITLE}
      value={blockSelect.id_Block}
      fontSize="0.6rem"
      action={(ev) => handleChange(ev, "id_Block")}
    />
  );
  const fieldTextBlockLabel = (
    <FieldText
      title={TITLES_RCM_LEFT.BLOCK_LABEL}
      value={blockSelect.label_Block}
      fontSize="0.6rem"
      action={(ev) => handleChange(ev, "label_Block")}
    />
  );
  const fieldTextAreaBlockDescription = (
    <FieldTextArea
      title={TITLES_RCM_LEFT.BLOCK_DESCRIPTION}
      value={blockSelect.description_Block}
      fontSize="0.6rem"
      action={(ev) => handleChange(ev, "description_Block")}
    />
  );
  const fieldSelectRowsAdd = (
    <FieldSelectAdd
      title="Rows"
      type="rows"
      value={blockSelect.columns}
      fontSize="0.6rem"
      fontSizeButton="0.64rem"
      action={handleRowSelect}
    />
  );
  const fieldSelectBlockComponents = (
    <FieldSelectAdd
      title={TITLES_RCM_LEFT.BLOCK_COMPONENTS}
      type="components"
      value={arrayComponentsLocal}
      fontSize="0.6rem"
      fontSizeButton="0.62rem"
      action={handleComponentSelect}
    />
  );
  const fieldSelectBlockOrders = () => {
    if (tooRead) {
      return (
        <FieldText
          title={TITLES_RCM_LEFT.BLOCK_TITLE}
          value={compSelectObj.orderInBlock}
          fontSize="0.6rem"
          action={(ev) => handleChange(ev, "title_Block")}
        />
      );
    } else {
      return (
        <FieldSelect
          title={TITLES_RCM_LEFT.BLOCK_ORDER_DISPLAY}
          value={blockSelect.ordenDisplay_Block}
          fontSize="0.6rem"
          arrayValues={arrayOrders}
          action={(ev) => handleChange(ev, "ordenDisplay_Block")}
        />
      );
    }
  };
*/

