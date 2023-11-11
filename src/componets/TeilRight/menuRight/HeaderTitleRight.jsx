import { useContext } from 'react'
import { MyContext } from '../../../context/TheContext.jsx';
import GroupButtonsSelectRight from '../../GroupButtonsSelectRight.jsx';
import SelectForm from '../SelectForm.jsx';
import SelectLayoutForm from '../SelectLayoutForm.jsx'
import IconsElem from '../../icons/IconsElem.jsx';
import MenuButtonsLeft from '../../TeilLeft/MenuLeft/MenuButtonsLeft.jsx';
import OffCanvasMenuLeft from '../../../OffCanvasMenuLeft.jsx';
import TeilLeft from '../../TeilLeft/TeilLeft.jsx';
import { TITLES_OF_APP, GROUP_BUTTONS_SELECT_LEFT } from '../../../constants/contants.js';
import '../../../sass/componentSass/TeilRight/HeaderTitleRight.scss';

function HeaderTitleRight() {
  const { optionDesigner } = useContext(MyContext);

  const options = [TITLES_OF_APP.TITLE_DESIGNER_FBC.form, TITLES_OF_APP.TITLE_DESIGNER_FBC.block, TITLES_OF_APP.TITLE_DESIGNER_FBC.component];
  const colors = ["success", "secondary", "info"];
  const sizeLetter = "0.65rem";

  const capitalizeString = (str) => str[0].toUpperCase() + str.slice(1);
  const renderSelectForm = () => <SelectForm height_dim="1" width_dim="24rem" />;
  const renderIconsElem = () => <IconsElem height="0.8" />;

  const getTitleSelectState = (parOptionDesigner) => {
    return capitalizeString(parOptionDesigner) + ':';
  };
  const getSelectForm = (parOptionDesigner) => {
    if (parOptionDesigner === "Forms") {
      return renderSelectForm();
    }
    return null;
  };
  const getIconsElem = (parOptionDesigner) => {
    if (parOptionDesigner === "Components") {
      return renderIconsElem();
    }
    return null;
  };
  const getTitleSelectElem = () => {
    const titleSelectState = getTitleSelectState(optionDesigner);
    const selectForm = getSelectForm(optionDesigner);
    const iconsElem = getIconsElem(optionDesigner);

    return (
      <>
        <SelectLayoutForm titleSelectState={titleSelectState} />
        {selectForm}
        {iconsElem}
      </>
    );
  };

  return (
    <div className="contHeader container-fluid d-flex justify-content-between align-items-center gap-2 mx-auto">
      <div className="col-1 d-flex justify-content-center align-items-center gap-2 mx-0 p-0"
        style={{ padding: "0.05rem" }}>
        <OffCanvasMenuLeft>
          <TeilLeft />
        </OffCanvasMenuLeft>
      </div>
      <div className="col-2 d-flex justify-content-center align-items-center gap-2 mx-0"
        style={{ padding: "0.05rem" }}>
        <MenuButtonsLeft {...GROUP_BUTTONS_SELECT_LEFT} />
      </div>
      {/* <div className="col-3 d-flex justify-content-between align-items-center mx-0 p-0">
        <GroupButtonsSelectRight
          preId="designer_"
          role="groupDesigner"
          arialLabel="Radio toggle button group designer"
          typeButton="radio"
          nameInput="btnRadioDesigner"
          options={options}
          colors={colors}
          sizeLetter={sizeLetter}
          groupButton="typeDesigner"
        />
      </div> */}
      <div className="col d-flex justify-content-end align-items-center me-2">
        <div className="d-flex flex-row justify-content-between align-items-center">
          {getTitleSelectElem()}
        </div>
      </div>
    </div>
  );
}

export default HeaderTitleRight;

/*
This code snippet defines a functional component called HeaderTitleRight. It uses the useContext hook to access the optionDesigner 
value from the MyContext context.

The component renders different elements based on the value of optionDesigner. If optionDesigner is "Forms", it renders a 
SelectForm component. If optionDesigner is "Components", it renders an IconsElem component. If optionDesigner is "Blocks", it 
doesn't render anything. If optionDesigner has any other value, it renders an error message.

The component also renders a set of nested components and elements, including OffCanvasMenuLeft, TeilLeft, MenuButtonsLeft, and 
GroupButtonsSelectRight. These components are used to create a header with various buttons and select options.

The renderTitleSelect function is called to render the appropriate component based on the value of optionDesigner. The 
titleSelectState variable is derived from parOptionDesigner and is used as a prop in the SelectLayoutForm component.

Overall, this code snippet is a part of a larger component that renders a header with dynamic elements based on the value of 
optionDesigner.
*/


