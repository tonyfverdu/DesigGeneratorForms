import { useState, useRef, useCallback } from 'react'
import ListDataElement from './ListDataElement.jsx'
import '../../sass/componentSass/elementsForms/LabelElem_PB.scss'

function LabelElem_PB({
  id_Element,
  title_Element,
  type_Element,
  label_Element,
  orderInBlock,
  required,
  disabled,
  response,
  placeholder,
  size,
  position,
  borderElement,
  colorElement,
  fontSizeElement,
}) {
  const [responseLabel, setResponseLabel] = useState(response[0]);
  const elementRef = useRef(null);
  const [toogleActiv, setToogleActiv] = useState(false);

  const arrayOfList = [
    { color: "primary", fontSize: "0.6rem", title: "Id:", value: id_Element },
    { color: "success", fontSize: "0.6rem", title: "Title:", value: title_Element },
    { color: "primary", fontSize: "0.6rem", title: "Type of element:", value: type_Element },
    { color: "success", fontSize: "0.6rem", title: "Label:", value: label_Element },
    { color: "primary", fontSize: "0.6rem", title: "Placeholder:", value: placeholder },
    { color: "success", fontSize: "0.6rem", title: "Order in block::", value: orderInBlock },
  ];

  const handleBtnChangeActiv = useCallback(() => {
    setToogleActiv((prevState) => !prevState);
  }, []);

  const tooltipTemplate = `
    <div className="tooltip" role="tooltip">
      <div className="tooltip-arrow"></div>
      <div className="tooltip-inner"></div>
    </div>`;

  const tooltipTitle = `Order: ${orderInBlock}       Position: X = ${position.colElem}  Y = ${position.rowElem}`;

  const renderListData = () => (
    <ListDataElement TitleList="Component Data" fontSize="0.6rem" arrayOfLines={arrayOfList} />
  );

  const renderLabel = () => (
    <div
      ref={elementRef}
      className="contLabelElement_PB d-flex flex-row justify-content-center align-items-center m-0 p-0"
    >
      <label
        id={id_Element}
        className="form-label labelOfForm d-flex flex-row justify-content-end align-items-center fw-bold p-0 me-2"
        style={{ color: colorElement, fontSize: fontSizeElement }}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        size={size}
      >
        {placeholder}
      </label>
    </div>
  );

  return (
    <div
      className={`container-fluid d-flex flex-column justify-content-start align-items-center m-0 p-0 ${borderElement ? "border border-dark" : "border-0"
        }`}
      data-bs-toggle="tooltip"
      data-bs-html="false"
      data-bs-placement="bottom"
      data-bs-offset="10,15"
      data-bs-animation="true"
      data-bs-delay={{ show: 500, hide: 100 }}
      data-bs-template={tooltipTemplate}
      title={tooltipTitle}
      onClick={handleBtnChangeActiv}
    >
      {toogleActiv ? renderListData() : renderLabel()}
    </div>
  );
};

export default LabelElem_PB;

/*
 <div className="bubble row container-fluid bg-body m-0 p-0">
          <p className="col-6 text-start fw-bold m-0 p-1" style={{ fontSize: "0.6rem" }}>
            Orden:  <span ref={OrderRef} className="text-danger fw-bolder m-0 p-0" >
              {orderInBlock}
            </span>
          </p>
          <p className="col-6 text-center fw-bold m-0 p-1" style={{ fontSize: "0.6rem" }}>
            Pos: x= <span ref={ColXRef} className="text-danger fw-bolder m-0 p-0" style={{ fontSize: "0.65rem" }}>{position.colElem} </span>
            y= <span ref={RowYRef} className="text-danger fw-bolder m-0 p-0" style={{ fontSize: "0.65rem" }}>{position.rowElem}</span>
          </p>
        </div>
*/

/*
  function handleClickBubbleShow(ev) {
    console.log(ev.target)
    console.log('useRef:  ', elementRef.current)
    console.log("*********************************************")
    console.log("Orden: ", OrderRef.current.textContent)
    console.log("X: ", ColXRef.current.textContent)
    console.log("Y: ", RowYRef.current.textContent)
    console.log("*********************************************")

    theContext.setObjComponentShow({
      ...theContext.objComponentShow, type: "label"
    })
  }
*/
