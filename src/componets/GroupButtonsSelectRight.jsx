import { useState, useEffect, useContext } from 'react';
import { MyContext } from '../context/TheContext';
import StatusOption from './StatusOption.jsx';
import '../sass/componentSass/GroupButtonSelect.scss'

function GroupButtonsSelectRight({ preId, role, arialLabel, typeButton, options, colors, height }) {
  const theContext = useContext(MyContext);
  const [optionLocal, setOptionLocal] = useState("Forms");
  const [colorLocal, setColorLocal] = useState("success");

  useEffect(() => {
    const colorMap = {
      Forms: "success",
      Blocks: "secondary",
      Components: "primary"
    };

    setColorLocal(colorMap[optionLocal]);
    theContext.setOptionDesigner(optionLocal);
  }, [optionLocal]);

  function handleBtnClick(ev) {
    setOptionLocal(ev.target.value);
  }

  function showRadioButtons(parOptionsArray) {
    if (!Array.isArray(parOptionsArray)) {
      console.error('Error: The argument of the function "showRadioButtons" must be an array!!');
      return;
    }

    return parOptionsArray.map((opt, index) => (
      <div key={opt} className="mx-1">
        <button
          type={typeButton}
          className={`btn btn-sm btn-outline-${colors[index]} text-white-emphasis fw-bolder border border-2 border-${colors[index]}`}
          id={`${preId}_${index}`}
          value={opt}
          onClick={handleBtnClick}
          style={{ border: "1px solid red", width: "auto" }}
        >
          {opt}
        </button>
      </div>
    ));
  }

  return (
    <div className="contGrpBtnSelect d-flex justify-content-between align-items-center gap-1 p-1 mx-auto">
      <StatusOption
        fontSizeText="0.6rem"
        colorText="white"
        option={optionLocal}
        colorOption={colorLocal}
        widthBand="auto"
      />

      <div className="btn-group btn-group-sm m-0 p-0" style={{ height: height }} role={role} aria-label={arialLabel}>
        {showRadioButtons(options)}
      </div>
    </div>
  );
}

export default GroupButtonsSelectRight;




