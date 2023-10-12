import { Fragment } from 'react'

function ListDataElement({ TitleList, fontSize, arrayOfLines }) {
  const style_li = { fontSize, textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)", padding: "0.2rem" };

  const renderLines = () => {
    if (Array.isArray(arrayOfLines)) {
      return arrayOfLines.map(({ title, color, fontSize, value }) => (
        <Fragment key={title}>
          <LineOfUL color={color} fontSize={fontSize} title={title} value={value} />
        </Fragment>
      ));
    } else {
      return (
        <span className="txt-danger fs-6 fw-bold mx-auto">
          Error: The argument of the function "ListDataElement" must be an array
        </span>
      );
    }
  };

  return (
    <ul className="list-group container-fluid border-0" style={{ width: "100%", margin: "0.2rem" }}>
      <li
        href="#"
        className="list-group-item list-group-item-action container-fluid bg-black fw-bolder text-center text-white border-0 mx-auto"
        style={style_li}
      >
        {TitleList}
      </li>
      {renderLines()}
    </ul>
  );
}

export default ListDataElement;

function LineOfUL({ color, fontSize, title, value }) {
  const listItemStyle = {
    padding: "0.2rem 0.4rem",
    textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)",
    fontSize: fontSize
  };

  const textStyle = {
    fontSize: fontSize
  };

  return (
    <li className={`list-group-item list-group-item-action list-group-item-${color} container-fluid border-0`} style={listItemStyle}>
      <span className="ms-0 fw-bold text-start" style={textStyle}>{title}</span>
      <span className="ms-1 p-0 fw-normal" style={textStyle}>{value}</span>
    </li>
  );
}
