import React from 'react'
import SelectLayoutForm from './SelectLayoutForm';
import GroupButtonsSelect from '../GroupButtonsSelect';
import IconsElem from '../icons/IconsElem';
import '../../sass/componentSass/TeilRight/HeaderTitleRight.scss'


function HeaderTitleRight({ titleSelectState, titleCreateComponent }) {
  return (
    <div className="contHeader container-fluid d-flex justify-content-between align-items-center gx-1">
      <div className="col-4 contSelectState d-flex justify-content-between align-items-center">
        <SelectLayoutForm
          titleSelectState={titleSelectState}
        />
        <GroupButtonsSelect
          preId={"gbtn2"}
          role={"groupRight"}
          arialLabel={"Radio toggle button group right"}
          typeButton={"radio"}
          nameInput={"btnRadio2"}
          options={["Read only", "Delete Form", "New Form", "Modify Form"]}
          colors={["dark", "danger", "secondary", "success"]}
          sizeLetter={"0.6rem"}
        />
      </div>
      <div className="col-7 d-flex justify-content-end align-items-center">
        <SelectLayoutForm
          titleSelectState={titleCreateComponent}
        />
        <IconsElem
          height={"1"}
        />
      </div>
    </div>
  )
}

export default HeaderTitleRight;