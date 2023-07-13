import { useState, useEffect, useContext } from 'react'
import { MyContext } from './context/TheContext'
import { Routes, Route, Link } from 'react-router-dom'
import { BsXSquareFill } from 'react-icons/bs'
import currentDate from './functions/currentDate.js'
import HeaderComponent from './componets/others/HeaderComponent.jsx'

//  Constans
import { TITLES_OF_APP, GROUP_BUTTONS_SELECT_LEFT } from './constants/contants.js'

//  Pages
import Home from './componets/pages/Home.jsx'
import Nav from './componets/navegation/Nav.jsx'

import GroupButtonsSelect from './componets/GroupButtonsSelect'
import ButtonSelectOptions from './componets/ButtonSelectOptions'
import InfoOfElement from './componets/TeilLeft/InfoOfElement'


//  Left Teil

//  Right Teil
import HeaderTitleRight from './componets/TeilRight/HeaderTitleRight.jsx'
import SelectForm from './componets/TeilRight/SelectForm.jsx'

import formJSON_prueba_01 from './Data/JSONFormPrueba_01.js'
import formJSON_plantilla from './Data/JSONFormPlantillaObj.js'

import PrintFormTemplate from './componets/managementJSON/PrintFormTemplate.jsx'
import PrintFormInfo from './componets/managementJSON/PrintFormInfo.jsx'
import FromJSONToForm from './componets/managementJSON/FromJSONToForm.jsx'
import './sass/App.scss'


function App() {
  const theContext = useContext(MyContext);
  const [formSelect, setFormSelect] = useState(formJSON_prueba_01)
  theContext.setFormObject(formJSON_prueba_01)    //    ****************    <<=  AQUI SE ELIGE EL FORMULARIO A VISUALIZAR

  // setFormSelect(formJSON_prueba_01)


  // useEffect(() => {
  //   setFormSelect(structuredClone(theContext.formObject))   //  Esta copia profunda de objeto no funciona
  //   console.log("En el modulo App, formSelect es:  ", formSelect)
  // }, [theContext.formObject])


  const [toggleHeader, setToggleHeader] = useState(true)
  const [toogleFormLayout, setToogleFormLayout] = useState(false)


  return (
    <div className="contCentral">
      <div className="containerApp d-flex flex-column justify-content-center align-items-center mx-auto p-0  border border-danger">
        <button className="contIconExit" aria-label="Close" onClick={() => setToggleHeader(!toggleHeader)} >
          <BsXSquareFill />
        </button>
      </div>

      {toggleHeader &&
        <>
          <div className="containerLogos d-flex flex-row justify-content-between align-items-center">
            <figure className="figure">
              <img className="imageLogo" src={`./src/assets/logos/sass.svg`} alt='Logo Sass' />
            </figure>
            <figure className="figure">
              <img className="imageLogo" src={`./src/assets/logos/Bootstrap-5-1.svg`} alt='Logo Bootstrap 5.3' />
            </figure>
            <figure className="figure">
              <img className="imageLogo" src={`./src/assets/logos/javascriptES6.svg`} alt='Logo Javascript E6' />
            </figure>
            <figure className="figure">
              <img className="imageLogo" src={`./src/assets/logos/react.svg`} alt='Logo React' />
            </figure>
          </div>
          <div className="header-Principal container-fluid d-flex flex-row justify-content-start align-items-center overflow-hidden mx-auto mb-0 pt-4 bg-dark">
            <h2 className="container mx-auto p-0">{TITLES_OF_APP.MAIN_TITLE_APP}</h2>
          </div>
          <HeaderComponent
            title={TITLES_OF_APP.TITLE_MEMO_LIST_HEADER}
            subtitle={TITLES_OF_APP.SUBTITLE_MEMO_LIST_HEADER}
          />
        </>
      }

      <Nav
        titleSite={TITLES_OF_APP.TITLE_OF_SITE}
      />
      {/* <nav className="containerNav">
        <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} /> */}
      {/* <Route path="/albums" element={<Albums />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/resultSearchRecords" element={<ResultRecords />} />
          <Route path="/resultSearchSongs" element={<ResultSongs />} />
          <Route path="/shop/articledetail:id" element={<ArticleDetailPage />} />
          <Route path="/loginCustomer" element={<Home />} />
          <Route path="/registerOfCustomer" element={<Home />} />
          <Route path="/player" element={<Home />} />
          <Route path="/customerRegistered" element={<Home />} /> 
          <Route path="*" element=
            {
              <Error
                messageError={'404. Page not found !!'}
              />
            }
          />
        </Routes>
      </nav> */}


      <main className="containerMain container-fluid d-flex justify-content-center align-items-start mx-auto p-0 graycolor500" >

        {/* ****     Links Teil: Processing Read - Create - Modify Form   **** */}
        <section className="w-25 container d-flex flex-column justify-content-center align-items-center m-0 mt-1 mx-auto p-0 graycolor100" >

          {/* ****     1.-  Menu Left:  Read - Create - Modify Form - Block or Component    **** */}
          <div className="row container d-flex flex-row justify-content-center align-items-center m-0 p-0" >
            <div className="col m-0 mx-1 p-0">
              <GroupButtonsSelect
                preId={GROUP_BUTTONS_SELECT_LEFT.preId}
                role={GROUP_BUTTONS_SELECT_LEFT.role}
                arialLabel={GROUP_BUTTONS_SELECT_LEFT.arialLabel}
                typeButton={GROUP_BUTTONS_SELECT_LEFT.typeButton}
                nameInput={GROUP_BUTTONS_SELECT_LEFT.nameInput}
                options={GROUP_BUTTONS_SELECT_LEFT.options}
                colors={GROUP_BUTTONS_SELECT_LEFT.colors}
                sizeLetter={GROUP_BUTTONS_SELECT_LEFT.sizeLetter}
                height={GROUP_BUTTONS_SELECT_LEFT.height}
                groupButton={GROUP_BUTTONS_SELECT_LEFT.groupButton}
              />
            </div>
          </div>

          {/* ****     2.-  Info of Form - Block - Elements (read only in "Read" state and "componets of forms" in "create" and "modify" state)   **** */}
          <div className="row container-fluid d-flex justify-content-center mb-1" >
            <InfoOfElement
              // formInput={formJSON_prueba_01}
              formInput = {formSelect}
              setFormInput ={setFormSelect}
            />
          </div>

          {/* ****     3.-  Group buttons of "Delete", "Save" and "Submit" dates of Form., Blocks and Componets   **** */}
          <div className="row container d-flex justify-content-center mb-0 me-2" >
            <ButtonSelectOptions
              typeButton={"button"}
              role={"group"}
              arialLabelA={"Toolbar with button groups dow"}
              arialLabelB={"First group"}
              options={["Delete", "Save", "Submit"]}
              colors={["btn-outline-danger", "btn-outline-warning", " btn-outline-success"]}
            />
          </div>
        </section>


        {/* ****     Recths Teil: Processing Form layout and components    **** */}
        <section className="contColumRight w-75 container d-flex flex-column justify-content-center align-items-center m-0 mt-1 mx-auto ms-2 p-0 graycolor100">
          {/* ****      Form Processing Menu      **** */}
          <div className="row container-fluid contTopRight" >
            <div className="col" >
              <HeaderTitleRight
                titleOfDesigner={TITLES_OF_APP.TITLE_TYPE_DESIGNER}
                titleSelectState={TITLES_OF_APP.TITLE_SELECT_STATE}
                titleCreate={TITLES_OF_APP.TITLE_DESIGNER_FBC}
                toogleFormLayout={toogleFormLayout}
                setToogleFormLayout={setToogleFormLayout}
              />
            </div>
          </div>

          {/*   *************   RIGHT:  FORM LAYOUT   ********************************************************************* */}
          {/* //  1.-  CREATE NEW FORM:  Print Form Template    *********************************************************** */}
          <form className="container-fluid rounded-0 my-2 bg-light ">
            {
              toogleFormLayout &&
              <>
                <PrintFormTemplate
                  formInput={formJSON_prueba_01}
                />

                {/* 2.-  Group buttons of "Delete", "Save" and "Submit" dates of Form., Blocks and Componets   ************ */}
                <div className="row container d-flex justify-content-center mb-0 me-2" >
                  <ButtonSelectOptions
                    typeButton={"button"}
                    role={"group"}
                    arialLabelA={"Toolbar with button groups right"}
                    arialLabelB={"Second group"}
                    options={["Delete", "Save", "Submit"]}
                    colors={["btn-outline-danger", "btn-outline-warning", " btn-outline-success"]}
                  />
                </div>

              </>
            }
          </form>

          {/* {
            theContext.optionDesigner === "component" ?
              theContext.arrayOfRows.map((row, index) => {
                return <div key={index} className="row container-fluid d-flex flex-row justify-content-start align-item-center p-1 py-2 my-1 bg-light 
                border border-secondary border-end-0 border-start-0">
                  {row}
                </div>
              })
              :
              <>
                <p className="text-dark display-4 fw-bold p-6 mt-2 me-2">Aqui viene el layout de:  <span className="text-danger fw-bolder display-2">{theContext.optionDesigner}</span></p>
              </>
          } */}

          {/* <ComponentsList /> */}

          {/* //  Ejemplo de Formulario Completo para pruebas:  <PrintFormInfo /> */}
          {/* <PrintFormInfo /> */}

          {/* <FromJSONToForm /> */}
        </section>

      </main>
    </div>
  );
}

export default App;


/*
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/formManagement/">Sample Form</Link>
            </li>
            <li>
              <Link to="/formBuilder/">Form Builder</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/formManagement/" component={FormManagement} />
        <Route path="/formBuilder/" component={FormBuilder} />
      </div>
    </Router>
*/