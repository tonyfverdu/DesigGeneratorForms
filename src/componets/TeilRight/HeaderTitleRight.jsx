import { useContext } from 'react'
import { MyContext } from '../../context/TheContext';

import TitlesOfLayout from './TitlesOfLayout.jsx';
import SelectForm from './SelectForm.jsx';
import GroupButtonsSelect from '../GroupButtonsSelect';
import IconsElem from '../icons/IconsElem';
import { TITLES_OF_APP } from '../../constants/contants.js'
import capitalizeString from '../../functions/capitalizeString.js';
import '../../sass/componentSass/TeilRight/HeaderTitleRight.scss'


function HeaderTitleRight({ titleOfDesigner, titleSelectState, titleCreate, toogleFormLayout, setToogleFormLayout }) {
  const theContext = useContext(MyContext)
  const { form, block, component } = titleCreate

  return (
    <div className="contHeader container-fluid d-flex justify-content-between align-items-center my-2" >
      <div className="col-4 contSelectState d-flex justify-content-between align-items-center" >
        <div className="d-flex flex-column justify-content-between align-items-center" >
          <TitlesOfLayout
            titleSelect={titleOfDesigner}
          />
          <GroupButtonsSelect
            preId={"designer_"}
            role={"groupDesigner"}
            arialLabel={"Radio toggle button group designer"}
            typeButton={"radio"}
            nameInput={"btnRadioDesigner"}
            options={[TITLES_OF_APP.TITLE_DESIGNER_FBC.form, TITLES_OF_APP.TITLE_DESIGNER_FBC.block, TITLES_OF_APP.TITLE_DESIGNER_FBC.component]}
            colors={["success", "secondary", "info"]}
            sizeLetter={"0.8rem"}
            groupButton={"typeDesigner"}
          />
        </div>

        <div className="d-flex flex-column justify-content-between align-items-center" >
          <div className="d-flex flex-row justify-content-center align-items-center p-0" >
            <TitlesOfLayout
              titleSelect={titleSelectState}
            />
            <span className="text-danger text-start fw-bold p-0" style={{ fontSize: "0.8rem", marginBottom: "4px" }} >
              {capitalizeString(theContext.optionDesigner)}
            </span>
          </div>
          <GroupButtonsSelect
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
        </div>
      </div>

      <div className="col-6 d-flex justify-content-end align-items-center px-1 m-0" >
        <div className="d-flex flex-column justify-content-between align-items-center">
          {
            theContext.optionDesigner === "form" ?
              <>
                <TitlesOfLayout
                  titleSelect={form}
                />
                <SelectForm
                  height={"1"}
                  toogleFormLayout={toogleFormLayout}
                  setToogleFormLayout={setToogleFormLayout}
                />
              </>
              :
              theContext.optionDesigner === "block" ?
                <>
                  <TitlesOfLayout
                    titleSelect={block}
                  />
                </>
                :
                theContext.optionDesigner === "component" ?
                  <>
                    <TitlesOfLayout
                      titleSelect={component}
                    />
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