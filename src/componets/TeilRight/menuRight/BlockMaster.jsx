import { useState, useEffect, useContext, useCallback } from 'react';
import { MyContext } from '../../../context/TheContext.jsx';
import LabelElem_PB from '../../elementsForms/LabelElem_PB.jsx';
import Column from './Column.jsx';
import ColAddLine from './ColAddLine.jsx';

import { FaEye } from 'react-icons/fa';
import '../../../sass/componentSass/ButtonIcon.scss';
import Popup from 'reactjs-popup';
import { TITLES_RCM_LEFT } from '../../../constants/contants.js';
import HeaderHead from '../../TeilLeft/MenuLeft/HeaderHead.jsx';
import FieldText from '../../TeilLeft/MenuLeft/FieldText.jsx';
import FieldTextArea from '../../TeilLeft/MenuLeft/FieldTextArea.jsx';
import FieldSelectAdd from '../../TeilLeft/MenuLeft/FieldSelectAdd.jsx';
import FieldSelect from '../../TeilLeft/MenuLeft/FieldSelect.jsx';
import compByBlock from '../../../functions/compByBlock.js';

import '../../../sass/componentSass/TeilRight/Row.scss'


function BlockMaster({ form, block, index }) {
  const theContext = useContext(MyContext);

  const [columnsOfBlock, setColumnsOfBlock] = useState([])  //  <<=  Objetos columnas del bloque: block
  const [arrayOfCompByColumn, setArrayOfCompByColumn] = useState([])

  useEffect(() => {
    setColumnsOfBlock(block.columns);
    // comp_Colum(columnsOfBlock)

    // console.log("columnsOfBlock:  ", columnsOfBlock)
    // setArrayColumn((block.columns.components))

    // console.log("columnsOfBlock:  ", columnsOfBlock);

    // comp_Colum(columnsOfBlock)
    // console.log("compOfColumn:  ", compOfColumn)
  }, [block]);

  function comp_Colum(parArrayColumn) {
    console.log("parArrayColumn:  ", parArrayColumn)
    if (Array.isArray(parArrayColumn)) {
      setArrayOfCompByColumn(parArrayColumn.map((col, i) => {
        return col.components[i]
      }))
    } else {
      console.log('Error:  The argument of the function "compOfColum" must be an array!!')
      setArrayOfCompByColumn(null)
    }
  }

  const styleCircleCSS = {
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    width: "auto",
    height: "auto",
    padding: "0.1rem",
    hover: { backgroundColor: "rgba(0, 0, 0, 0.5)", transform: "scale(0.5)", transformScale: "0.5" },
    backgroundImage: "../../assets/icons/eyeicon.svg",
  }


  return (
    <>
      <div id={`heading_${index}`} className="accordion-header" >
        <button className="accordion-button graycolor400 h6 fw-bold collapsed py-1 m-0" type="button" data-bs-toggle="collapse"
          data-bs-target={`#collapse_${index}`} aria-expanded="false" aria-controls={`collapse_${index}`}>
          <div className='row container-fluid d-flex flex-row justify-content-between align-items-center m-0 p-0'>
            <span className="col-11 h6 fw-bold">{block.title_Block}</span>
            <span className="col-1 d-flex flex-row justify-content-end align-items-center">
              <ButtonIcon2
                styleCircleCSS={styleCircleCSS}
                iconComponent={<FaEye />}
                block={block}
              />
            </span>
          </div>
        </button>
      </div>

      <div id={`collapse_${index}`} className="accordion-collapse collapse p-0 mx-auto" aria-labelledby={`heading_${index}`} >
        <div className="accordion-body p-0 mx-2" >
          <div className="row shadow-sm graycolor500" >
            <div className="col-3">
              <LabelElem_PB
                id_Element={block.id_Block}
                orderInBlock={index}
                required={true}
                disabled={false}
                response={[""]}
                placeholder={block.label_Block}
                size={30}
                position={{ rowElem: 0, colElem: 0 }}
                width={3}
                borderElement={false}
                colorElement={"rgb(9, 9, 9)"}
                fontSizeElement={"0.7rem"}
              />
            </div>
          </div>

          {/* //  Rows *************************************************************************************************/}
          {
            columnsOfBlock !== undefined
              ?
              columnsOfBlock.map((col, index) => {
                return (
                  <>
                    {
                      !theContext.tooRead &&

                      <div key={index} className="row p-0 my-1 graycolor100 shadow-sm" >
                        <ColAddLine
                          form={form}
                          block={block}
                          numRow={index}
                        />
                      </div>
                    }

                    <div key={index} className="row p-1 mb-1 graycolor100 shadow-sm" >
                      {col.components.map((comp, i) => {
                        return (
                          <div key={i} className={`col-${comp.dimension.width + ""} d-grip p-0 m-0`} style={{ width: "auto" }}>
                            <Column
                              comp={comp}
                            />
                          </div>
                        )
                      })
                      }
                    </div >
                  </>
                )
              })
              :
              <p className="display-6 text-center text-danger">Error</p>
          }
          {
            !theContext.tooRead &&

            < div className="row p-0 my-1 graycolor100 shadow-sm" >
              {/* <ColAddLine
                form={form}
                block={block}
                numRow={columnsOfBlock.length}
              /> */}
            </div>
          }
        </div >
      </div >
    </>
  )
}

export default BlockMaster;

function ButtonIcon2({ styleCircleCSS, iconComponent, block }) {
  const theContext = useContext(MyContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [infoBlock, setInfoBlock] = useState("");

  useEffect(() => {
    setInfoBlock(JSON.stringify(block, null, 2))
  }, [isModalOpen]);

  const handleButtonPopup = () => {
    setIsModalOpen(prevValue => !prevValue);
  };

  return (
    <Popup
      trigger={
        <button
          type="button"
          className="buttonIcon btn btn-outline-secondary d-flex justify-content-center align-items-center rounded-circle"
          style={styleCircleCSS}
          onClick={handleButtonPopup}
        >
          <span className="d-flex flex-row justify-content-center align-items-center p-1 m-1">
            {iconComponent}
          </span>
        </button>
      }
      className='modal-content'
      position="bottom center"
      nested
      modal
    >
      {close => (
        <div className="modal">
          <button className="close" onClick={close}>
            X
          </button>
        </div>
      )}
      <div className='content w-full border-1 border-danger'>

        {/* <DataBlockMenu
          setFormSelect={setFormMenuForm}

          arrayBlocks={valueArrays}
          setArrayBlocks={setValueArrays}
          blockSelect={blockSelect}
          setBlockSelect={setBlockSelect}

          rowSelect={rowSelect}
          setRowSelect={setRowSelect}

          valueArrays={valueArrays}
          setValueArrays={setValueArrays}
          valueComp={valueComp}
          setValueComp={setValueComp}
        /> */}
        <InfoBlock
          infoBlock={infoBlock}
        />
      </div>
    </Popup>
  );
}

const InfoBlock = ({ infoBlock }) => {
  const [blockSelect, setBlockSelect] = useState({});
  const [parChangeBlock, setParChangeBlock] = useState("");
  const [indexRowSelect, setIndexRowSelect] = useState(0);
  const [rowSelect, setRowSelect] = useState({});
  const [arrayComponents, setArrayOfComponents] = useState([]);
  const [arrayOrders, setArrayOrders] = useState([]);
  const [valueComp, setValueComp] = useState({});
  const [compSelectObj, setCompSelectObj] = useState({}); // Initial value can be an empty object

  useEffect(() => {
    setBlockSelect(JSON.parse(infoBlock));

    const newArrayComp = compByBlock(JSON.parse(infoBlock));
    setArrayOfComponents(newArrayComp);
    setRowSelect(JSON.parse(infoBlock).columns[0])
    setCompSelectObj(JSON.parse(infoBlock).columns[0].components[0]);
  }, [infoBlock]);

  const handleChange = useCallback((ev, blockKey) => {
    ev.preventDefault();
    const newValue = ev.target.value;

    setParChangeBlock(blockKey);
    setBlockSelect(prevBlockSelect => ({ ...prevBlockSelect, [blockKey]: newValue }));
  }, []);
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
  const handleComponentSelect = useCallback((ev) => {
    ev.preventDefault();
    const newValue = ev.target.value;

    const selectedComponent = arrayComponents.find(comp => comp.title_Element === newValue);
    if (selectedComponent) {
      setParChangeBlock("components_Block");
      setValueComp(selectedComponent);
    } else {
      throw new Error('Error: There is not the elements in the array of the function "handleComponentSelect"');
    }
  }, [arrayComponents]);

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
          title="Block: "
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
  )
}

/*
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

*/
