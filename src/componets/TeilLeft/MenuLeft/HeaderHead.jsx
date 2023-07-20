import { useContext } from "react";
import { MyContext } from "../../../context/TheContext";

function HeaderHead({ idHeading, dataTarget, ariaControl, fontSize, title, value }) {
  const theContext = useContext(MyContext)

  return (
    <header id={idHeading} className="accordion-header container d-flex flex-row justify-content-center align-items-center mx-auto p-0 ">
      <button className="accordion-button collapsed text-start fw-bold ms-1 mt-1 rounded-0" type="button" data-bs-toggle="collapse" data-bs-target={dataTarget}
        aria-expanded="false" aria-controls={ariaControl}
        style={{ color: "navy", fontSize: fontSize, textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
        {title}<span className={`ps-2 ms-2 ${theContext.tooRead ? 'text-success' : 'text-danger'}`}
          style={{ fontSize: fontSize }}>{value}</span>
      </button>
    </header>
  )
}

export default HeaderHead;