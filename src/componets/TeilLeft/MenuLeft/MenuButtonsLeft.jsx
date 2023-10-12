import { useState, useEffect, useContext } from 'react';
import { MyContext } from '../../../context/TheContext';
import StatusOption from '../../StatusOption.jsx';
import '../../../sass/componentSass/TeilLeft/MenuButtonsLeft.scss'

function MenuButtonsLeft({ preId, role, arialLabel, typeButton, options, colors, height }) {
  const { option, tooRead, color, setColor, setOption, setTooRead } = useContext(MyContext);
  const [optionSelect, setOptionSelect] = useState("");
  const [updateColor, setUpdateColor] = useState("");

  useEffect(() => {
    tooRead ? setUpdateColor("success") : setUpdateColor("danger");
    // setColor(updateColor);
    setOptionSelect(option === "Read");
    setTooRead(option === "Read");
    
  }, [option, optionSelect, tooRead]);

  const handleBtnClick = (ev) => setOption(ev.target.value);

  const buttonStyle = { border: "1px solid red", width: "auto" };
  const buttonClass = `btn btn-sm btn-outline-${updateColor} text-white-emphasis fw-bolder border border-2 border-${updateColor}`;

  const renderButton = (opt, index) => {
    const id = `${preId}_${index}`;

    return (
      <div key={id} className="mx-1">
        <button
          type={typeButton}
          className={buttonClass}
          id={id}
          value={opt}
          onClick={handleBtnClick}
          style={buttonStyle}
        >
          {opt}
        </button>
      </div>
    );
  };

  return (
    <div className="container-fluid d-flex flex-row justify-content-center align-items-center mx-auto rounded-top">
      <div className="py-1 d-flex justify-content-between align-items-center me-5">
        <StatusOption
          fontSizeText="0.7rem"
          colorText="white"
          option={option}
          colorOption={color}
          widthBand="auto"
        />
      </div>
      <div className="btn-group btn-group-sm m-0 p-0 border-danger" style={{ height }} role={role} aria-label={arialLabel}>
        {options.map(renderButton)}
      </div>
    </div>
  );
}

export default MenuButtonsLeft;

/*
    Renders a "group of buttons" for menu options on the left side of the screen.

    This code defines a React component called "MenuButtonsLeft". It receives several props including: 
    
                      preId, role, arialLabel, typeButton, options, colors, and height.

    Inside the component, it uses the useContext hook to access the context provided by MyContext.

    The useEffect hook is used to update the color and state of the component whenever the theContext.option changes.

    The "handleBtnClick" function is a click event handler that updates the option value in the context.

    The "showRadioButtons" function takes an array of options, and returns a mapped array of buttons based on the options.

    Finally, the component returns JSX that renders a container with a status option and a group of radio buttons based on 
    the options provided.
*/


