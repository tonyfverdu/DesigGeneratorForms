import { useState, useContext } from 'react';
import { MyContext } from '../../context/TheContext.jsx';
import listFormsData from '../managementJSON/listFormsData.js';
import SelectIni from '../SelectIni.jsx';
import '../../sass/componentSass/icons/IconsElem.scss';


function SelectForm({ height_dim, width_dim }) {
  const { setValueOfForm, toogleFormLayout, setToogleFormLayout, handleSubmitFormIni, handleButtonSubmitFormDyn } = useContext(MyContext);
  //const [valueOfForm, setValueOfForm] = useState("");

  //  Funtions of select Forms:
  // function handleButtonSubmitFormDyn(ev) {
  //   ev.preventDefault();

  //   setValueOfForm(ev.target.value)
  // }

  // function handleButtonFormDyn() {
  //   setToogleFormLayout(!toogleFormLayout)
  // }

  return (

    <form className="contIcons container d-flex justify-content-around align-items-center"
      style={{ transform: `scale(${height_dim})`, width: width_dim, padding: "0.2rem 0rem" }}
      onSubmit={(ev) => handleSubmitFormIni(ev)}>
      <div className="col-8" >
        <SelectIni
          elementID="idFormSelectIni"
          labelElement="View JSON"
          required={true}
          disabled={false}
          optionsValues={listFormsData.map(elem => elem.title_Form)}
          colorSelect="green"
          fontSizeSelect="0.6rem"
          setSelect={setValueOfForm}
        />
      </div>
      <div className="col-3" >
        <button type="submit" className="btn btn-sm btn-success p-1 px-2 me-2"
          onClick={(ev) => handleButtonSubmitFormDyn(ev)}>
          <span className="fw-bold mx-auto" style={{ fontSize: "0.6rem" }}>View JSON</span>
        </button>
      </div>
    </form>
  );
}

export default SelectForm;

// <form className="contIcons container d-flex justify-content-around align-items-center mx-auto m-0 gap-2 p-0"
//   style={{ transform: `scale(${height_dim})`, width: {width_dim}, height: "auto" }}
//   onSubmit={(ev) => handleSubmitFormIni(ev)}>
//   <div className="col-7 p-0 me-1">
//     <SelectIni
//       id_Element="idFormSelectIni"
//       labelElement="View: "
//       required={true}
//       disabled={false}
//       placeholder={""}
//       optionsValues={[`${listFormsData.form1.title_Form}`]}
//       colorSelect="rgb(9, 9, 9)"
//       fontSizeSelect="0.6rem"
//       setSelect={theContext.setNameOfFormObject}  //  <<==  ??
//     />
//   </div>

//   <div className="col-4 d-flex justify-content-center align-items-center p-0 offset-sm-1" >
//     <button type="button" className="btn btn-sm btn-outline-success backgroundColorGreenDunkel p-1"
//       onClick={() => handleButtonFormDyn()}>
//       <span className="fw-bold mx-auto" style={{ fontSize: "0.6rem" }}>View JSON</span>
//     </button>
//   </div>
// </form>


/*
import {useContext} from 'react';
import {MyContext} from '../../context/MyContext.jsx';
import listFormsData from '../managementJSON/listFormsData.js';
import SelectIni from './SelectIni.jsx';
import '../../sass/componentSass/icons/IconsElem.scss';


function SelectForm({ height_dim, width_dim }) {
  const theContext = useContext(MyContext);

  return (
    <form className="contIcons container d-flex justify-content-around align-items-center"
      style={{ transform: `scale(${height_dim})`, width: width_dim, padding: "0.2rem 0rem" }}
      onSubmit={(ev) => theContext.handleSubmitFormIni(ev)}>
      <div className="col-8" >
        <SelectIni
          elementID={"idFormSelectIni"}
          labelElement={"View JSON"}
          required={true}
          disabled={false}
          optionsValues={listFormsData.map(elem => elem.title_Form)}
          colorSelect={"green"}
          fontSizeSelect={"0.6rem"}
          setSelect={theContext.setValueOfForm}
        />
      </div>
      <div className="col-3" >
        <button type="submit" className="btn btn-sm btn-success p-1 px-2 me-2"
          onClick={theContext.handleButtonSubmitFormDyn}>
          <span className="fw-bold mx-auto" style={{ fontSize: "0.6rem" }}>View JSON</span>
        </button>
      </div>
    </form>
  );
}

export default SelectForm;
*/
