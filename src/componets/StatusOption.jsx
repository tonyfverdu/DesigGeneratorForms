import { useState, useEffect, useCallback } from 'react';

function StatusOption({ fontSizeText, option, widthBand }) {
  const textSpanStyle = {
    fontSize: fontSizeText,
    width: widthBand,
    borderRadius: '16px',
  };

  const getOptionClassName = useCallback(() => {
    if (option === undefined) {
      return "p-1 px-2 m-0 bg-primary rounded";
    } else {
      return option === "Read" ? "p-1 px-2 m-0 bg-success rounded" : "p-1 px-2 m-0 bg-danger rounded";
    }
  }, [option]);

  const optionClassName = getOptionClassName();

  return (
    <p className={optionClassName}>
      <span className="mx-2 p-1 text-center text-white fw-bold" style={textSpanStyle}>
        {option}
      </span>
    </p>
  );
}

export default StatusOption;

/*
    This code defines a React functional component called "StatusOption". 
    
    It takes in several props such as: fontSizeText, colorText, option, colorOption, and widthBand. 
    
    It returns a JSX element that renders a styled <span> element with the option prop as its content. 
    
    The styling includes setting the font size, width, and border radius based on the props, and applying 
    text and background colors based on the colorText and colorOption props.
*/