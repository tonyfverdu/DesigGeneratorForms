import { useState, useContext, useEffect, useCallback } from 'react';
import { MyContext } from '../../../context/TheContext.jsx';
import HeaderHead from './HeaderHead.jsx';
import FieldText from './FieldText.jsx';
import FieldTextArea from './FieldTextArea.jsx';
import FieldSelect from './FieldSelect.jsx';
import FieldSelectAdd from './FieldSelectAdd.jsx';
import { TITLES_RCM_LEFT } from '../../../constants/contants.js';
import compByBlock from '../../../functions/compByBlock.js';

function DataBlockMenu({ setFormSelect, setArrayBlocks, blockSelect, setBlockSelect, rowSelect, setRowSelect,
  valueArrays, setValueArrays, valueComp, setValueComp }) {
  const theContext = useContext(MyContext);

  const [arrayComponents, setArrayOfComponents] = useState([]);
  const [compSelectObj, setCompSelectObj] = useState({}); // Initial value can be an empty object
  const [indexRowSelect, setIndexRowSelect] = useState(0);
  const [arrayOrders, setArrayOrders] = useState([]);
  const [parChangeBlock, setParChangeBlock] = useState("");

  const handleChange = useCallback((ev, blockKey) => {
    ev.preventDefault();
    const newValue = ev.target.value;

    setParChangeBlock(blockKey);
    setBlockSelect(prevBlockSelect => ({ ...prevBlockSelect, [blockKey]: newValue }));
  }, []);

  useEffect(() => {
    const newArrayComp = compByBlock(blockSelect);
    setArrayOfComponents(newArrayComp);
    setRowSelect(blockSelect.columns[0])
    setCompSelectObj(rowSelect.components[0]);
  }, [blockSelect, rowSelect, valueComp]);

  useEffect(() => {
    if (theContext.tooRead) {
      const newArray = valueArrays.map(value => {
        if (value.id_Block === blockSelect.id_Block) {
          return {
            ...value,
            title_Block: parChangeBlock === "title_Block" ? blockSelect.title_Block : value.title_Block,
            id_Block: parChangeBlock === "id_Block" ? blockSelect.id_Block : value.id_Block,
            label_Block: parChangeBlock === "label_Block" ? blockSelect.label_Block : value.label_Block,
            description_Block: parChangeBlock === "description_Block" ? blockSelect.description_Block : value.description_Block,
            ordenDisplay_Block: parChangeBlock === "ordenDisplay_Block" ? blockSelect.ordenDisplay_Block : value.ordenDisplay_Block,
            components: parChangeBlock === "components_Block" ? blockSelect.columns : value.components
          };
        }
        return value;
      });

      setValueArrays(newArray);
      setArrayBlocks(newArray);
      setFormSelect(prevFormSelect => ({ ...prevFormSelect, blocks: newArray }));
      cambioArray();
    }
  }, [theContext.tooRead, parChangeBlock]);

  const handleComponentSelect = useCallback((ev) => {
    ev.preventDefault();
    const newValue = ev.target.value;

    const selectedComponent = arrayComponents.find(comp => comp.title_Element === newValue);
    if (selectedComponent) {
      setParChangeBlock("components_Block");
      setValueComp(selectedComponent);
    }
  }, [arrayComponents]);

  const handleRowSelect = useCallback((ev) => {
    ev.preventDefault();
    const rowValue = 'Row: ' + ev.target.value;

    const newRowSelectObject = blockSelect.columns.find(row => row.orderColInBlock === rowValue);

    if (newRowSelectObject) {
      const newIndexRowSelect = blockSelect.columns.indexOf(newRowSelectObject);
      setIndexRowSelect(newIndexRowSelect);
      setRowSelect(newRowSelectObject);
    }
  }, [blockSelect.columns, setRowSelect]);

  const cambioArray = useCallback(() => {
    const newArray = valueArrays.map(value => {
      if (value.id_Block === blockSelect.id_Block) {
        return {
          ...value,
          title_Block: parChangeBlock === "title_Block" ? blockSelect.title_Block : value.title_Block,
          id_Block: parChangeBlock === "id_Block" ? blockSelect.id_Block : value.id_Block,
          label_Block: parChangeBlock === "label_Block" ? blockSelect.label_Block : value.label_Block,
          description_Block: parChangeBlock === "description_Block" ? blockSelect.description_Block : value.description_Block,
          ordenDisplay_Block: parChangeBlock === "ordenDisplay_Block" ? blockSelect.ordenDisplay_Block : value.ordenDisplay_Block,
          components: parChangeBlock === "components_Block" ? blockSelect.columns : value.components
        };
      }
      return value;
    });

    setValueArrays(newArray);
    setArrayBlocks(newArray);
    setFormSelect(prevFormSelect => ({ ...prevFormSelect, blocks: newArray }));
    // setFormSelect(prevFormSelect => {
    //   prevFormSelect.blocks = newArray;
    //   return prevFormSelect;
    // });
  }, [parChangeBlock, blockSelect, valueArrays, setFormSelect, setArrayBlocks]);

  // Move static elements outside the component's return statement => Define static JSX elements outside the return statement
  const fieldText1 = (
    <FieldText
      title={TITLES_RCM_LEFT.BLOCK_TITLE}
      value={blockSelect.title_Block}
      fontSize="0.6rem"
      action={(ev) => handleChange(ev, "title_Block")}
    />
  );
  const fieldText2 = (
    <FieldText
      title={TITLES_RCM_LEFT.BLOCK_ID_TITLE}
      value={blockSelect.id_Block}
      fontSize="0.6rem"
      action={(ev) => handleChange(ev, "id_Block")}
    />
  );
  const fieldText3 = (
    <FieldText
      title={TITLES_RCM_LEFT.BLOCK_LABEL}
      value={blockSelect.label_Block}
      fontSize="0.6rem"
      action={(ev) => handleChange(ev, "label_Block")}
    />
  );
  const fieldTextArea = (
    <FieldTextArea
      title={TITLES_RCM_LEFT.BLOCK_DESCRIPTION}
      value={blockSelect.description_Block}
      fontSize="0.6rem"
      action={(ev) => handleChange(ev, "description_Block")}
    />
  );
  const fieldSelect1 = (
    <FieldSelect
      title={TITLES_RCM_LEFT.BLOCK_ORDER_DISPLAY}
      value={blockSelect.ordenDisplay_Block}
      fontSize="0.6rem"
      arrayValues={arrayOrders}
      action={(ev) => handleChange(ev, "ordenDisplay_Block")}
    />
  );

  return (
    <div id="accordionBlock" className="accordion container-fluid graycolor400 d-flex flex-column justify-content-center align-items-center p-1 mx-auto mb-1">
      <div className="accordion-item rounded-0 container-fluid mx-auto graycolor400 border-0" style={{ marginBottom: "0.3rem" }} >
        <HeaderHead
          idHeading="headingBlock"
          dataTarget="#collapseBlock"
          ariaControl="collapseBlock"
          fontSize="0.62rem"
          title={TITLES_RCM_LEFT.BLOCK_HEAD}
          value={blockSelect.title_Block}
        />

        <div id="collapseBlock" className="accordion-collapse collapse ms-0" aria-labelledby="headingBlock" data-bs-parent="#accordionBlock">
          <div className="accordion-body p-0 mb-0">
            <div className="row d-flex justify-content-center align-items-center gap-1 m-1" >
              <div className="col-5 d-flex flex-column justify-content-start align-items-start m-0 p-1 bg-body" >
                {fieldText1}
              </div>

              <div className="col d-flex flex-column justify-content-start align-items-start m-0 p-1 bg-body" >
                {fieldText2}
              </div>

            </div>

            <div className="row d-flex justify-content-center align-items-center gap-1 m-1" >
              <div className="col-12 d-flex flex-row justify-content-start align-items-start m-0 p-1 bg-body">
                {fieldText3}
              </div>
            </div>

            <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
              <div className="col-12 d-flex flex-column justify-content-start align-items-start m-0 p-1 bg-body">
                {fieldTextArea}
              </div>
            </div>

            <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
              <div className="col-12 d-flex flex-column justify-content-center align-items-start m-0 p-1 bg-body" >
                <FieldSelectAdd
                  title="Rows"
                  type="rows"
                  value={blockSelect.columns}
                  fontSize="0.6rem"
                  fontSizeButton="0.64rem"
                  tooRead={theContext.tooRead}
                  action={handleRowSelect}
                />
              </div>
            </div>

            <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
              <div className="col d-flex flex-column justify-content-start align-items-center m-0 p-1 bg-body" style={{ height: "3.6rem" }} >
                <FieldSelectAdd
                  title={TITLES_RCM_LEFT.BLOCK_COMPONENTS}
                  type="components"
                  value={rowSelect.components}
                  fontSize="0.6rem"
                  fontSizeButton="0.64rem"
                  tooRead={theContext.tooRead}
                  action={handleComponentSelect}
                />
              </div>
              <div className="col-3 d-flex flex-column justify-content-start align-items-center m-0 p-1 bg-body" style={{ height: "3.6rem" }} >
                {fieldSelect1}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataBlockMenu;

/*
    This code snippet defines a React functional component called DataBlockMenu. 
    
    It takes in several props and uses React hooks like useState, useEffect, useContext, and useCallback 
    to manage state and perform side effects.

    The component renders a form-like structure with various input fields and selects. The values of these 
    fields are controlled by the component's state variables, which are updated when the user interacts with 
    the form elements.

    The component also contains several event handlers that update the state variables based on user input.

    Overall, this component is responsible for rendering a menu for managing data blocks and their properties.
*/
