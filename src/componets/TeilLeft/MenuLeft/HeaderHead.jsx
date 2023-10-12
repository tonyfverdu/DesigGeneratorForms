import { useContext } from "react";
import { MyContext } from "../../../context/TheContext";

function HeaderHead({ idHeading, dataTarget, ariaControl, fontSize, title, value }) {
  const theContext = useContext(MyContext);

  const buttonStyle = {
    color: "navy",
    fontSize,
    textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)"
  };

  const textStyle = {
    fontSize
  };

  const textClassName = theContext.tooRead ? 'text-success' : 'text-danger';

  return (
    <header 
      id={idHeading} 
      className="accordion-header d-flex flex-row justify-content-center align-items-center mx-auto px-1 rounded-end"
    >
      <button 
        className="accordion-button collapsed text-start fw-bold ms-0 mt-1" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target={dataTarget}
        aria-expanded="false" 
        aria-controls={ariaControl}
        style={buttonStyle} 
      >
        {title}
        <span className={`ms-2 ${textClassName}`} style={textStyle}>
          {value}
        </span>
      </button>
    </header>
  );
}

export default HeaderHead;