import { useState, useContext } from 'react'
import { MyContext } from '../../context/TheContext.jsx'
import listFormsData from '../managementJSON/listFormsData.js'
import SelectIni from '../SelectIni.jsx'
import '../../sass/componentSass/icons/IconsElem.scss'


export default function SelectForm({ height, toogleFormLayout, setToogleFormLayout }) {
  const theContext = useContext(MyContext)
  const [valueOfForm, setValueOfForm] = useState("")

  //  Funtions of select Forms:
  function handleSubmitFormIni(ev) {
    ev.preventDefault();

    setValueOfForm(ev.target.value)
  }

  function handleButtonFormDyn() {
    setToogleFormLayout(!toogleFormLayout)
  }

  return (
    <form className="contIcons container d-flex justify-content-around align-items-center mx-auto m-0 gap-2 p-0"
      style={{ transform: `scale(${height})`, width: "auto", height: "auto" }}
      onSubmit={(ev) => handleSubmitFormIni(ev)}>
      <div className="col-7 p-0 me-1">
        <SelectIni
          id_Element={"idFormSelectIni"}
          labelElement={"View: "}
          required={true}
          disabled={false}
          placeholder={""}
          optionsValues={[`${listFormsData.form1.title_Form}`]}
          colorSelect={"rgb(9, 9, 9)"}
          fontSizeSelect={"0.6rem"}
          setSelect={theContext.setNameOfFormObject}  //  <<==  ??
        />
      </div>

      <div className="col-4 d-flex justify-content-center align-items-center p-0 offset-sm-1" >
        <button type="button" className="btn btn-sm btn-outline-success backgroundColorGreenDunkel p-1"
          onClick={() => handleButtonFormDyn()}>
          <span className="fw-bold mx-auto" style={{ fontSize: "0.6rem" }}>View JSON</span>
        </button>
      </div>
    </form>
  )
}
