import { TITLES_RCM_LEFT } from '../../../constants/contants.js';  //  Constants of Form

function HeaderMenuDesig() {
  const { TITLE_OF_SECTION, SUBTITLE_OF_SECTION } = TITLES_RCM_LEFT;

  return (
    <header className="d-flex flex-column justify-content-center align-items-center mx-auto py-1 mt-1 mb-2">
      <h6 className="text-white h6 fw-bolder m-0 p-0">
        {TITLE_OF_SECTION}
      </h6>
      <h6 className={"fs-06 fw-bold text-graycolor200 m-0 p-0 py-1"}>
        {SUBTITLE_OF_SECTION}
      </h6>
    </header>
  )
}

export default HeaderMenuDesig;

/*
    Component Left Menu Title => HeaderMenuDesig
    
    It renders a header element with two paragraphs inside it. The content of the paragraphs is determined by the values 
    of the TITLE_OF_SECTION and SUBTITLE_OF_SECTION variables, which are extracted from the TITLES_RCM_LEFT object (Const)
*/