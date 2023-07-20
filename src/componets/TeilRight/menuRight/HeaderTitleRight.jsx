import { useState, useContext } from 'react'
import { MyContext } from '../../../context/TheContext.jsx';

import StatusOption from '../../StatusOption.jsx';
import GroupButtonsSelectRight from '../../GroupButtonsSelectRight.jsx';


import TitlesOfLayout from '../TitlesOfLayout.jsx';
import SelectForm from '../SelectForm.jsx';

import IconsElem from '../../icons/IconsElem.jsx';

import { TITLES_OF_APP } from '../../../constants/contants.js'
import capitalizeString from '../../../functions/capitalizeString.js';
import '../../../sass/componentSass/TeilRight/HeaderTitleRight.scss'


function HeaderTitleRight({ titleOfDesigner, titleSelectState, titleCreate, toogleFormLayout, setToogleFormLayout }) {
  const theContext = useContext(MyContext)
  const { form, block, component } = titleCreate

  return (
    <div className="contHeader container-fluid d-flex justify-content-between align-items-center my-2 p-1" >
      <div className="col-1 d-flex justify-content-center align-items-center mx-0 p-0" >
        <StatusOption
          fontSizeText={"0.7rem"}
          colorText={"white"}
          option={theContext.option}
          colorOption={theContext.color}
          widthBand={"auto"}
        />
      </div>

      <div className="col-4 d-flex justify-content-between align-items-center mx-0 p-0" >
        <GroupButtonsSelectRight
          preId={"designer_"}
          role={"groupDesigner"}
          arialLabel={"Radio toggle button group designer"}
          typeButton={"radio"}
          nameInput={"btnRadioDesigner"}
          options={[TITLES_OF_APP.TITLE_DESIGNER_FBC.form, TITLES_OF_APP.TITLE_DESIGNER_FBC.block, TITLES_OF_APP.TITLE_DESIGNER_FBC.component]}
          colors={["success", "secondary", "info"]}
          sizeLetter={"0.7rem"}
          groupButton={"typeDesigner"}
        />
      </div>

      <div className="col-4 d-flex justify-content-end align-items-center mx-0 p-0 px-1" >
        <div className="d-flex flex-column justify-content-between align-items-center">
          {
            theContext.optionDesigner === "Forms" ?
              <>
                {/* <TitlesOfLayout
                  titleSelect={form}
                /> */}
                <SelectForm
                  height={"1"}
                  toogleFormLayout={toogleFormLayout}
                  setToogleFormLayout={setToogleFormLayout}
                />
              </>
              :
              theContext.optionDesigner === "Blocks" ?
                <>
                  <TitlesOfLayout
                    titleSelect={block}
                  />
                </>
                :
                theContext.optionDesigner === "Components" ?
                  <>
                    {/* <TitlesOfLayout
                      titleSelect={component}
                    /> */}
                    <IconsElem
                      height={"0.85"}
                    />
                  </>
                  :
                  <></>
          }
        </div>
      </div>
    </div>
  )
}

export default HeaderTitleRight;

/*
      <div className="col-2 contSelectState d-flex justify-content-between align-items-center" >
        <div className="d-flex flex-column justify-content-between align-items-center" >
          <div className="d-flex flex-row justify-content-center align-items-center p-0" >

            <span className="text-danger text-start fw-bold p-0" style={{ fontSize: "0.8rem", marginBottom: "4px" }} >
              {capitalizeString(theContext.optionDesigner)}
            </span>
          </div>
          {/ * <GroupButtonsSelect
            preId={"layoutStatus_"}
            role={"groupRight"}
            arialLabel={"Radio toggle button group right"}
            typeButton={"radio"}
            nameInput={"btnRadio2"}
            options={["Read", "Delete", "New", "Modify"]}
            colors={["dark", "danger", "secondary", "success"]}
            sizeLetter={"0.8rem"}
            groupButton={"typeLayout"}
          /> 
         
*/

