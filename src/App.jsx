import React, { useState, useContext } from 'react'
import { MyContext } from './context/TheContext'
import { Routes, Route, Link } from 'react-router-dom'
import { BsUbuntu, BsXSquareFill } from 'react-icons/bs'
import currentDate from './functions/currentDate'
import Home from './componets/pages/Home'

// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider
// } from "react-router-dom";
import HeaderComponent from './componets/others/HeaderComponent'
import Nav from './componets/navegation/Nav.jsx'
import './sass/App.scss'

//  Iconos
import IconsElem from './componets/icons/IconsElem'
import IconEditDelete from './componets/icons/IconEditDelete'

import SelectLayoutForm from './componets/SelectLayoutForm'
import NewRow from './componets/NewRow'
import NewCol from './componets/NewCol.jsx'

import LabelElem_PB from './componets/elementsForms/LabelElem_PB'
import TextElem_PB from './componets/elementsForms/TextElem_PB'
import PhoneElem_PB from './componets/elementsForms/PhoneElem_PB'
import EmailElem_PB from './componets/elementsForms/EmailElem_PB'
import NumberElem_PB from './componets/elementsForms/NumberElem_PB'
import DateElem_PB from './componets/elementsForms/DateElem_PB'
import AreaTextElem_PB from './componets/elementsForms/AreaTextElem_PB'
import SelectElement_PB from './componets/elementsForms/SelectElem_PB'
import CheckboxElem_PB from './componets/elementsForms/CheckboxElem_PB'
import RadioButtonElem_PB from './componets/elementsForms/RadioButtonElem_PB'
import RadioButtons_PB from './componets/elementsForms/RadioButtons_PB'

import GroupButtonsSelect from './componets/GroupButtonsSelect'
import ButtonSelectOptions from './componets/ButtonSelectOptions'
import InfoOfElement from './componets/InfoOfElement'



function Index() {
  return <h2>Dynamic Form</h2>;
}

function About() {
  return <h2>Sample Dynamic Form App v1.1</h2>;
}



function App() {
  const theContext = useContext(MyContext);

  const title = 'Dynamic Forms Generator in React and Bootstrap'
  const titleMemoListHeader = 'Custom Forms Dynamic Creator'
  const subtitleMemoListHeader = 'App (Bootstrap - Sass -JS - React)'
  const titleSite = 'Custom Forms Dynamic Creator'
  const titleSelectState = "Layout Form Status"
  const [toggleHeader, setToggleHeader] = useState(true)

  function handleonClickExit() {
    setToggleHeader(!toggleHeader)
  }


  return (
    <div className="contCentral ">
      <div className='containerApp'>
        <button className="contIconExit rounded" aria-label="Close" onClick={() => handleonClickExit()} >
          <BsXSquareFill />
        </button>
      </div>

      {toggleHeader &&
        <>
          <div className="containerLogos">
            <figure className="figure">
              <img className="imageLogo" src={`./src/assets/logos/sass.svg`} alt='Sass' />
            </figure>
            <figure className="figure">
              <img className="imageLogo" src={`./src/assets/logos/Bootstrap-5-1.svg`} alt='Bootstrap 5.3' />
            </figure>
            <figure className="figure">
              <img className="imageLogo" src={`./src/assets/logos/javascriptES6.svg`} alt='Javascript E6' />
            </figure>
            <figure className="figure">
              <img className="imageLogo" src={`./src/assets/logos/react.svg`} alt='React' />
            </figure>
          </div>
          <div className="header-Principal">
            <h2>{title}</h2>
          </div>
          <HeaderComponent
            title={titleMemoListHeader}
            subtitle={subtitleMemoListHeader}
          />
        </>
      }

      <Nav
        titleSite={titleSite}
      />
      {/* <nav className="containerNav">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
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
      <main className="containerMain container-fluid d-flex">
        <section className="contColumLeft container-fluid mb-1 mt-2 me-2 p-2 bg-body">
          <div className="row container mb-1">
            <GroupButtonsSelect
              preId={"gbtn1"}
              role={"groupTop"}
              arialLabel={"Radio toggle button group top"}
              typeButton={"radio"}
              nameInput={"btnradio1"}
              options={["Read", "Delete", "Create", "Modify"]}
              colors={["dark", "danger", "secondary", "success"]}
              sizeLetter={"0.9rem"}
            />
          </div>
          <div className="row container d-flex justify-content-center mb-2">
            <div className="col d-flex justify-content-between gx-1 p-1">
              <IconsElem />
            </div>
          </div>
          <div className="row container d-flex justify-content-center mb-1" >
            <InfoOfElement />
          </div>
          <div className="row container d-flex justify-content-center mb-0 me-2" >
            <ButtonSelectOptions
              typeButton={"button"}
              role={"group"}
              arialLabelA={"Toolbar with button groups dow"}
              arialLabelB={"First group"}
              options={["Delete", "Save", "Submit"]}
              colors={["btn-outline-danger", "btn-outline-secondary", " btn-outline-success"]}
            />
          </div>
        </section>

        <section className="contColumRight container mb-1 mt-2 me-2 p-2 bg-body">
          <div className="row container-fluid" >
            <div className="contSelectState col-7 d-flex justify-content-between">
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
                sizeLetter={"0.65rem"}
              />
            </div>
            <div className="col-5">
              <IconsElem />
            </div>
          </div>
          <div className="row container ">
            <div className="col">
              <div className="containerLayout container mt-1 p-1 bg-body bg-gradiente border border-light rounded user-select-none">
                <div className="row my-2">
                  <NewRow />
                </div>
                <div className="row p-0 mt-1 bg-light">
                  <div className="col-2 d-flex flex-row justify-content-center align-items-center m-0 p-0">
                    <NewCol />
                    <LabelElem_PB
                      elementID={theContext.pruebaLabelElement.elementID}
                      required={theContext.pruebaLabelElement.required}
                      disabled={theContext.pruebaLabelElement.disabled}
                      response={theContext.pruebaLabelElement.response}
                      placeholder={theContext.pruebaLabelElement.placeholder}
                      size={theContext.pruebaLabelElement.size}
                    />
                    <IconEditDelete />
                  </div>
                  <div className="col-4 d-flex flex-row justify-content-center align-items-center m-0 p-0">
                    <NewCol />
                    <TextElem_PB
                      elementID={theContext.pruebaTextElement.elementID}
                      labelElement={theContext.pruebaTextElement.labelElement}
                      required={theContext.pruebaTextElement.required}
                      disabled={theContext.pruebaTextElement.disabled}
                      response={theContext.pruebaTextElement.response}
                      placeholder={theContext.pruebaTextElement.placeholder}
                      size={theContext.pruebaTextElement.size}
                      setText={theContext.pruebaTextElement.setText}
                    />
                    <IconEditDelete />
                  </div>
                  <div className="col d-flex flex-row justify-content-center align-items-center m-0 p-0">
                    <NewCol />
                    <NumberElem_PB
                      elementID={theContext.pruebaNumberElement.elementID}
                      labelElement={theContext.pruebaNumberElement.labelElement}
                      required={theContext.pruebaNumberElement.required}
                      disabled={theContext.pruebaNumberElement.disabled}
                      response={theContext.pruebaNumberElement.response}
                      placeholder={theContext.pruebaNumberElement.placeholder}
                      size={theContext.pruebaNumberElement.size}
                      setNumber={theContext.pruebaNumberElement.setNumber}
                    />
                    <IconEditDelete />
                  </div>
                  <div className="col d-flex flex-row justify-content-center align-items-center m-0 p-0">
                    <NewCol />
                    <DateElem_PB
                      elementID={theContext.pruebaDateElement.elementID}
                      labelElement={theContext.pruebaDateElement.labelElement}
                      required={theContext.pruebaDateElement.required}
                      disabled={theContext.pruebaDateElement.disabled}
                      response={theContext.pruebaDateElement.response}
                      placeholder={theContext.pruebaDateElement.placeholder}
                      setDate={theContext.pruebaDateElement.setDate}
                    />
                    <IconEditDelete />
                  </div>
                </div>

                <div className="row my-2">
                  <NewRow />
                </div>

                <div className="row d-flex flex-row justify-content-start align-items-center m-0 p-0 mt-1 bg-light">
                  <div className="" style={{"width": "auto"}}>
                    <NewCol />
                  </div>
                  <div className="col-3 d-flex flex-row justify-content-center align-items-center m-0 p-0">
                    <PhoneElem_PB
                      elementID={theContext.pruebaPhoneElement.elementID}
                      labelElement={theContext.pruebaPhoneElement.labelElement}
                      required={theContext.pruebaPhoneElement.required}
                      disabled={theContext.pruebaPhoneElement.disabled}
                      response={theContext.pruebaPhoneElement.response}
                      placeholder={theContext.pruebaPhoneElement.placeholder}
                      size={theContext.pruebaPhoneElement.size}
                      setPhone={theContext.pruebaPhoneElement.setPhone}
                    />
                    <IconEditDelete />
                  </div>
                  <div className="" style={{"width": "auto"}}>
                    <NewCol />
                  </div>
                  <div className="col-4 d-flex flex-row justify-content-center align-items-center m-0 p-0">
                    <EmailElem_PB
                      elementID={theContext.pruebaEmailElement.elementID}
                      labelElement={theContext.pruebaEmailElement.labelElement}
                      required={theContext.pruebaEmailElement.required}
                      disabled={theContext.pruebaEmailElement.disabled}
                      response={theContext.pruebaEmailElement.response}
                      placeholder={theContext.pruebaEmailElement.placeholder}
                      size={theContext.pruebaEmailElement.size}
                      setEmail={theContext.pruebaEmailElement.setEmail}
                    />
                    <IconEditDelete />
                  </div>
                  <div className="" style={{"width": "auto"}}>
                    <NewCol />
                  </div>
                </div>
                <div className="row my-2">
                  <NewRow />
                </div>
                <div className="row d-flex align-items-center p-0 mt-1 bg-light">
                  <div className="col-3 d-flex flex-row justify-content-center align-items-start m-0 p-0">
                    <NewCol />
                    <AreaTextElem_PB
                      elementID={theContext.pruebaAreaTextElement.elementID}
                      labelElement={theContext.pruebaAreaTextElement.labelElement}
                      required={theContext.pruebaAreaTextElement.required}
                      disabled={theContext.pruebaAreaTextElement.disabled}
                      readonly={theContext.pruebaAreaTextElement.readonly}
                      response={theContext.pruebaAreaTextElement.response}
                      placeholder={theContext.pruebaAreaTextElement.placeholder}
                      row={theContext.pruebaAreaTextElement.row}
                      col={theContext.pruebaAreaTextElement.col}
                      setAreaText={theContext.pruebaAreaTextElement.setAreaText}
                    />
                    <IconEditDelete />
                  </div>
                  <div className="col-3 d-flex flex-row justify-content-center align-items-center m-0 p-0">
                    <NewCol />
                    <SelectElement_PB
                      elementID={theContext.pruebaSelectElement.elementID}
                      labelElement={theContext.pruebaSelectElement.labelElement}
                      required={theContext.pruebaSelectElement.required}
                      disabled={theContext.pruebaSelectElement.disabled}
                      response={theContext.pruebaSelectElement.response}
                      optionsValues={theContext.pruebaSelectElement.optionsValues}
                      setSelect={theContext.pruebaSelectElement.setSelect}
                    />
                    <IconEditDelete />
                  </div>
                  <div className="col-3 d-flex flex-row justify-content-center align-items-center m-0 p-0">
                    <NewCol />
                    <CheckboxElem_PB
                      elementID={theContext.pruebaCheckboxElement.elementID}
                      labelElement={theContext.pruebaCheckboxElement.labelElement}
                      required={theContext.pruebaCheckboxElement.required}
                      disabled={theContext.pruebaCheckboxElement.disabled}
                      checked={theContext.pruebaCheckboxElement.checked}
                      response={theContext.pruebaCheckboxElement.response}
                      setCheckbox={theContext.pruebaCheckboxElement.setCheckbox}
                    />
                    <IconEditDelete />
                  </div>
                  <div className="col d-flex flex-row justify-content-center align-items-center m-0 p-0">
                    <NewCol />
                    <RadioButtonElem_PB
                      elementID={theContext.pruebaRadioButtonElement.elementID}
                      labelElement={theContext.pruebaRadioButtonElement.labelElement}
                      required={theContext.pruebaRadioButtonElement.required}
                      disabled={theContext.pruebaRadioButtonElement.disabled}
                      checked={theContext.pruebaRadioButtonElement.checked}
                      response={theContext.pruebaRadioButtonElement.response}
                      setRadioButton={theContext.pruebaRadioButtonElement.setRadioButton}
                    />
                    <IconEditDelete />
                  </div>
                </div>
                <div className="row my-2">
                  <NewRow />
                </div>

                <div className="row d-flex flex-row align-items-center align-items-start p-0 mt-1 bg-light">
                  <div className="col-3 d-flex flex-row justify-content-center align-items-start m-0 p-0">
                    <NewCol />
                    <RadioButtons_PB
                      elementID={theContext.pruebaRadioButtons.elementID}
                      legend={theContext.pruebaRadioButtons.legend}
                      name={theContext.pruebaRadioButtons.name}
                      radioButtons={theContext.pruebaRadioButtons.radioButtons}
                    />
                    <IconEditDelete />
                    <NewCol />
                  </div>
                </div>
                <div className="row my-2">
                  <NewRow />
                </div>

              </div>
            </div>
          </div>
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