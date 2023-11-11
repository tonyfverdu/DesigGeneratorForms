import { useState, useEffect, useContext, useRef, useCallback, Fragment } from 'react';
import { MyContext } from '../../../context/TheContext.jsx';
import LabelElem_PB from '../../elementsForms/LabelElem_PB.jsx';
import Column from './Column.jsx';
import ColAddLine from './ColAddLine.jsx';
import ButtonIconBlock from '../../ButtonIconBlock.jsx';
import { FaEye } from 'react-icons/fa';
import '../../../sass/componentSass/TeilRight/Row.scss'



function BlockMaster({ block, index }) {
  const { tooRead } = useContext(MyContext);

  const [columnsOfBlock, setColumnsOfBlock] = useState(block.columns);
  const [arrayComponentsByColumn, setArrayComponentsByColumn] = useState([]);

  const referenceLine = useRef(null);

  useEffect(() => {
    if (referenceLine.current && tooRead) referenceLine.current.remove();
  }, [tooRead]);

  const createArrayOfComponents = useCallback((block, index) => {
    const arrayComps = block.columns[index]?.components || [];
    setArrayComponentsByColumn(arrayComps);
    return arrayComps;
  }, []);

  return (
    <>
      <div id={`heading_${index}`} className="accordion-header">
        <AccordionButton block={block} index={index} />
      </div>

      <div id={`collapse_${index}`} className="accordion-collapse collapse p-0 mx-auto mt-2" aria-labelledby={`heading_${index}`}>
        <div className="accordion-body p-0 m-0">
          <LabelOfBlock
            block={block}
            index={index}
          />

          <ShowColumns
            block={block}
            columnsOfBlock={columnsOfBlock}
            tooRead={tooRead}
            index={index}
          />
        </div>
      </div>
    </>
  );
};

export default BlockMaster;

const AccordionButton = ({ index, block }) => {
  const accordionButtonClasses = [
    'accordion-button',
    'graycolor400',
    'h6',
    'fw-bold',
    'collapsed',
    'py-1',
    'm-0'
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
      <span className="row container-fluid d-flex flex-row justify-content-between align-items-center m-0 p-0">
        <span className="col-11 h6 fw-bold">{block.title_Block}</span>
        <span className="col-1 d-flex flex-row justify-content-end align-items-center">
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
    fontSizeElement: "0.64rem",
  };

  return (
    <div className="row shadow-sm graycolor500 p-0 m-0">
      <div className="col-3 text-start p-0 m-0">
        <LabelElem_PB {...labelElemProps} />
      </div>
    </div>
  );
};

function ShowColumns({ block, columnsOfBlock, tooRead, index }) {
  const referenceLine = useRef(null);

  const colClassName = "w-auto d-flex flex-row justify-content-start align-items-center p-0 m-0";
  const showColumn = (parComp, parIndex) => {
    const width = parComp.dimension.width;
    return (
      <div key={parIndex} className={`col-${width} ${colClassName}`}>
        <Column comp={parComp} />
      </div>
    );
  };

  const renderColumnsOfBlock = (col) => {
    if (!Array.isArray(col.components)) {
      throw new Error('Error: The argument of the function "renderColumnsOfBlock" must be an array!!');
    }
    const cssDivRow = "row p-1 mx-auto mb-1 graycolor100 shadow-sm";
    const renderedColumn = col.components.map((comp, i) => showColumn(comp, i));

    return (
      <div key={index} className={`${cssDivRow} border border-success`}>
        {renderedColumn}
      </div>
    );
  };

  const renderColumnLine = (block, col, index) => (
    <div key={`line-${index}`} ref={referenceLine} className="d-grid p-0 m-1 graycolor100 shadow-sm">
      <ColAddLine block={block} col={col} numRow={index} />
    </div>
  );

  const renderErrorColumn = () => {
    const errorStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f9fa',
      padding: '0.5rem',
      margin: '0.5rem',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    };

    return (
      <div style={errorStyle}>
        <p style={{ fontSize: '1.5rem', color: 'red' }}>
          Error de Carga de Columnas de Bloques
        </p>
      </div>
    );
  };

  const renderColumns = () => {
    if (columnsOfBlock === undefined) {
      return renderErrorColumn();
    }

    const renderedColumns = columnsOfBlock.map((col, index) => (
      <Fragment key={index}>
        {!tooRead && renderColumnLine(block, col, index)}
        {renderColumnsOfBlock(col)}
      </Fragment>
    ));

    return (
      <>
        {renderedColumns}
        {!tooRead && renderColumnLine(block, null, columnsOfBlock.length)}
      </>
    );
  };

  return (
    <>
      {renderColumns()}
    </>
  );
};
