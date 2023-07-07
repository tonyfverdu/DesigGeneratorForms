import {useContext} from 'react'
import {MyContext} from '../../context/TheContext.jsx'
import listFormsData from '../managementJSON/listFormsData.js'
import SelectIni from '../SelectIni.jsx'
import '../../sass/componentSass/icons/IconsElem.scss'


export default function SelectForm({height}) {
  const theContext = useContext(MyContext)

  return (
    <form className="contIcons container d-flex justify-content-around align-items-center mx-auto me-0 p-0 bg-light" 
    style={{ transform: `scale(${height})`, width: "20.6rem"}}
      onSubmit={(ev) => theContext.handleSubmitFormIni(ev)}>
      <div className="col-7 p-1">
        <SelectIni
          id_Element={"idFormSelectIni"}
          labelElement={"View JSON"}
          required={true}
          disabled={false}
          placeholder={""}
          optionsValues={[`${listFormsData.form1.title_Form}`]}
          colorSelect={"rgb(9, 9, 9)"} 
          fontSizeSelect={"0.6rem"}
          setSelect={theContext.setValueOfForm}

        // arrayValues={[`${formDataJSON_7.descripcion}`, `${formDataJSON_8Special.descripcion}`, `${formDataJSON_9.descripcion}`,
        // `${formDataJSON_10.descripcion}`, `${formDataJSON_11.descripcion}`]}
        />
      </div>
      <div className="col-4 p-1 offset-sm-1">
        <button type="submit" className="btn btn-sm btn-outline-success p-1" onClick={(ev) => theContext.handleButtonSubmitFormDyn(ev)}>
          <span className="fw-bold mx-2" style={{ fontSize: "0.7rem" }}>View JSON</span>
        </button>
      </div>
    </form>
  )
}
