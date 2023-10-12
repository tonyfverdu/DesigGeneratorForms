import { useContext } from 'react';
import { MyContext } from '../../../context/TheContext.jsx';

function PositionFielsComp({ title, titleField1, titleField2, value, value1Field1, value1Field2, fontSize, fontSize2, tooRead, action1, action2 }) {
  const theContext = useContext(MyContext);
  
  const renderValueField = (valueField, placeholder, max) => {
    if (theContext.tooRead) {
      return <span className="fw-normal me-2" style={{ fontSize: fontSize2 }}>{value === undefined ? 0 : valueField}</span>;
    } else {
      return <input type="number" className="contInputNumber form-control rounded-0 me-2" required={true} placeholder={placeholder} min="0" max={max} />;
    }
  }
  
  return (
    <>
      <span className="py-1 fw-bold" style={{ fontSize: fontSize, textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }}>
        {title}
      </span>
      <div className="d-flex flex-row justify-content-center align-items-center">
        <div className="d-flex flex-row justify-content-center align-items-center">
          <span className="fw-bold me-2" style={{ fontSize: fontSize2, textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }}>
            {titleField1}
          </span>
          {renderValueField(value1Field1, "0", Math.pow(10, 2) - 1)}
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <span className="fw-bold me-1" style={{ fontSize: fontSize2, textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }}>
            {titleField2}
          </span>
          {renderValueField(value1Field2, "0", 12)}
        </div>
      </div>
    </>
  );
}

export default PositionFielsComp;