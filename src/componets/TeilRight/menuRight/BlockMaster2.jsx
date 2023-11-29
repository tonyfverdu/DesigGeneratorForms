import { useState, useEffect, useContext, useRef, useCallback, Fragment } from 'react';
import { MyContext } from '../../../context/TheContext.jsx';
import LabelElem_PB from '../../elementsForms/LabelElem_PB.jsx';
import Column from './Column.jsx';
import ColAddLine from './ColAddLine.jsx';
import ButtonIconBlock from '../../ButtonIconBlock.jsx';
import { FaEye } from 'react-icons/fa';
import '../../../sass/componentSass/TeilRight/Row.scss'


function BlockMaster({ block, index }) {
  const colClassName = "w-auto d-flex justify-content-start align-items-center";
  const CSS_LineColumn = "w-100 d-grid p-0 my-1 graycolor100 shadow-sm";

  const { formObject, setFormObject, arrayOfBlocks, setArrayOfBlocks, blockSelectObject, setBlockSelectObject, 
    arrayOfColumnsOfBlock, setArrayColumnsOfBlock,
    tooRead } = useContext(MyContext);

  const [blockSelectObjectLocal, setBlockSelectObjectLocal] = useState({});
  const [arrayOfColumnsLocal, setArrayOfColumnsLocal] = useState(arrayOfBlocks[0].columns);

  // const [columnsOfBlock, setColumnsOfBlock] = useState([]);

  const referenceLine = useRef(null);

  useEffect(() => {
    setBlockSelectObject(block);
    setBlockSelectObjectLocal(block);

    setArrayColumnsOfBlock(block.columns);
    setArrayOfColumnsLocal(block.columns);

    // const indexOfBlock = arrayOfBlocks.findIndex((b) => b.id_Block === block.id_Block);
    // // console.log('indexOfBlock: ' + indexOfBlock);

    if (referenceLine.current && tooRead) referenceLine.current.remove();
  }, [block, tooRead]);

  useEffect(() => {
    setArrayColumnsOfBlock(arrayOfColumnsLocal);
    setBlockSelectObject({ ...blockSelectObject, columns: arrayOfColumnsLocal });
  }, [arrayOfColumnsLocal]);

  // useEffect(() => {
  //   console.log("si lo coge, arrayOfColumnsOfBlock:  ", arrayOfColumnsOfBlock);
  //   if()
  //   setArrayOfColumnsLocal(arrayOfColumnsLocal);
  // }, [arrayOfColumnsOfBlock]);

  const renderColumnLine = (block, parSetArrayOfColumnsLocal, col, index) => {
    const CSS_LineColumn = "d-grid p-0 m-1 graycolor100 shadow-sm";

    return (
      <div key={`block_${block.id_Block}_index-${index}`} ref={referenceLine} className={CSS_LineColumn}>
        <ColAddLine block={block} setArrayColumnsLocal2={parSetArrayOfColumnsLocal} col={col} numRow={index} />
      </div>
    );
  }

  return (
    <>
      <div id={`heading_${index}`} className="accordion-header border border-2 border-secondary rounded-top">
        <AccordionButton block={block} index={index} />
      </div>

      <div id={`collapse_${index}`} className="accordion-collapse collapse p-1 mx-auto mt-1"
        aria-labelledby={`heading_${index}`}>
        <div className="accordion-body p-0 m-0 mx-auto">
          <LabelOfBlock
            block={block}
            index={index}
          />

          {arrayOfColumnsLocal.length > 0 ?
            <>
              <div className="d-flex flex-column justify-content-start align-items-start gap-1 p-0 px-2 mx-auto">
                {arrayOfColumnsLocal.map((column, i) => (

                  <Fragment key={`block_${block.id_Block}_index-${i}`}>
                    <div ref={referenceLine} className={CSS_LineColumn}>
                      {!tooRead && renderColumnLine(block, setArrayOfColumnsLocal, column, i)}
                    </div>
                    <div key={i} className="d-flex flex-row justify-content-start align-items-center gap-1 my-1 border border-success">
                      {column.components.map(comp => (
                        <div key={comp.id_Element} className={`col-${comp.dimension.width} ${colClassName}`}>
                          <Column key={column.id_Column} comp={comp} block={block} />
                        </div>
                      ))}
                    </div>
                  </Fragment>

                ))}
              </div>
              <div key={`block_${block.id_Block}_index-${index}`} ref={referenceLine} className={CSS_LineColumn}>
                {!tooRead && renderColumnLine(block, setArrayOfColumnsLocal, null, block.columns.length)}
              </div>
            </>
            :
            <p className="text-center text-danger fw-bold fs-3">No hay columnas</p>
          }
        </div>
      </div>
    </>
  );
};

export default BlockMaster;

const AccordionButton = ({ block, index }) => {
  const accordionButtonClasses = [
    'accordion-button',
    'graycolor400',
    'h6',
    'fw-bold',
    'collapsed',
    'py-1',
    'm-0',
    'rounded-top'
  ].join(' ');

  return (
    <button
      className={accordionButtonClasses}
      type="button"
      data-bs-toggle="collapse"
      data-bs-target={`#collapse_${index}`}
      aria-expanded="false"
      aria-controls={`collapse_${index}`}
    >
      <span className="row container-fluid d-flex justify-content-between align-items-center m-0 p-0">
        <h6 className="col-10 h6 fw-bold">{block.title_Block}</h6>
        <span className="col-1 d-flex justify-content-end align-items-center">
          <ButtonIconBlock iconComponent={<FaEye />} block={block} />
        </span>
      </span>
    </button>
  );
};

const LabelOfBlock = ({ block, index }) => {
  const labelElemProps = {
    id_Element: block.id_Block,
    orderInBlock: index,
    required: true,
    disabled: false,
    response: [""],
    placeholder: block.label_Block,
    size: 28,
    position: { rowElem: 0, colElem: 0 },
    width: 2,
    borderElement: false,
    colorElement: "rgb(9, 9, 9)",
    fontSizeElement: "0.62rem",
  };

  return (
    <div className="row shadow-sm graycolor500 p-0 m-0">
      <div className="col-2 text-start p-0 m-0">
        <LabelElem_PB {...labelElemProps} />
      </div>
    </div>
  );
};

// function ShowColumns({ block, columnsOfBlock, tooRead, index }) {
//   const referenceLine = useRef(null);
//   const colClassName = "w-auto d-flex justify-content-start align-items-center";

//   const showColumn = (parComp, parIndex) => {
//     const width = parComp.dimension.width;

//     return (
//       <div key={parIndex} className={`col-${width} ${colClassName}`}>
//         <Column block={block} comp={parComp} />
//       </div>
//     );
//   };

//   const renderColumnsOfBlock = (col) => {
//     if (!Array.isArray(col.components)) {
//       throw new Error('Error: The value of "col.components", of the function "renderColumnsOfBlock", must be an array!!');
//     }
//     const cssDivRow = "row p-1 mx-auto mb-1 graycolor100 shadow-sm";
//     const renderedColumn = col.components.map((comp, i) => showColumn(comp, i));

//     return (
//       <>
//         <div key={index} className={`${cssDivRow} d-flex justify-content-start align-items-center border border-danger`}>
//           {renderedColumn}
//         </div>
//       </>
//     );
//   };

//   const renderColumnLine = (block, col, index) => {
//     const CSS_LineColumn = "d-grid p-0 m-1 graycolor100 shadow-sm";

//     return (
//       <div key={`block_${block.id_Block}_index-${index}`} ref={referenceLine} className={CSS_LineColumn}>
//         <ColAddLine block={block} col={col} numRow={index} />
//       </div>
//     );
//   }

//   const renderErrorColumn = () => {
//     const errorStyle = {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor: '#f8f9fa',
//       padding: '0.5rem',
//       margin: '0.5rem',
//       boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
//     };

//     return (
//       <div style={errorStyle}>
//         <p style={{ fontSize: '1.5rem', color: 'red' }}>
//           Error de Carga de Columnas de Bloques
//         </p>
//       </div>
//     );
//   };

//   const renderColumns = () => {
//     if (columnsOfBlock === undefined) {
//       return renderErrorColumn();
//     }

//     if (!Array.isArray(columnsOfBlock)) {
//       columnsOfBlock = columnsOfBlock.current;
//     }
//     const renderedColumns = columnsOfBlock.map((col, index) => (
//       <Fragment key={index}>
//         {!tooRead && renderColumnLine(block, col, index)}
//         {renderColumnsOfBlock(col)}
//       </Fragment>
//     ));

//     return (
//       <>
//         {renderedColumns}
//         {!tooRead && renderColumnLine(block, null, columnsOfBlock.length)}
//       </>
//     );
//   };

//   return (
//     <>
//       {renderColumns()}
//     </>
//   );
// };


//  const [arrayComponentsByColumn, setArrayComponentsByColumn] = useState([]);

// const createArrayOfComponents = useCallback((block, index) => {
//   const arrayComps = block.columns[index]?.components || [];
//   setArrayComponentsByColumn(arrayComps);
//   return arrayComps;
// }, []);
