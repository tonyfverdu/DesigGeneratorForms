import { useState, useEffect, useContext } from 'react'
import { MyContext } from '../../context/TheContext.jsx'

//  Import functions - constants
import currentDate from '../../functions/currentDate.js'
import { dataExtracomunitario, dataImportado } from '../../constants/dataCte.js'

//  Import of Components
import LabelElem_PB from '../elementsForms/LabelElem_PB.jsx'
import TextElem_PB from '../elementsForms/TextElem_PB.jsx'
import PhoneElem_PB from '../elementsForms/PhoneElem_PB.jsx'
import EmailElem_PB from '../elementsForms/EmailElem_PB.jsx'
import NumberElem_PB from '../elementsForms/NumberElem_PB.jsx'
import DateElem_PB from '../elementsForms/DateElem_PB.jsx'
import AreaTextElem_PB from '../elementsForms/AreaTextElem_PB.jsx'
import SelectElement_PB from '../elementsForms/SelectElem_PB.jsx'
import TableElem_PB from '../elementsForms/TableElem_PB.jsx'
import TableCustom from '../elementsForms/TableCustom.jsx'
import IconoElem_PB from '../elementsForms/IconoElem_PB.jsx'


function PrintFormInfo() {
  const theContext = useContext(MyContext)
  const titleTablaToxinas = ["Analisis", "Resultado", "Tipo de toxina identificada", "Fecha"]
  const vacunas = ["Sarampión", "Paperas", "Rubeola", "Rotavirus", "Viruela", "Varicela", "Fiebre amarilla", "Hepatitis A",
    "hepatitis B", "Gripe", "Polio", "Rabia", "Enfermedad Hib", "HPV", "Tos ferina", "Tétanos"]

  //  **********      MIRAR DESPUES SI SE PUEDE ARREGLAR O NO   ***************************************
  // const analisisToxinasData = [
  //   {
  //     id: 1,
  //     analisis: ["Suero", "label"],
  //     resultadoAnalisis: ["Negativo", "select"],
  //     tipoToxinaIdent: ["", "text"],
  //     fechaAnalisis: ["11/05/2004", "date"]
  //   },
  //   {
  //     id: 2,
  //     analisis: ["Heces", "label"],
  //     resultadoAnalisis: ["Negativo", "select"],
  //     tipoToxinaIdent: ["", "text"],
  //     fechaAnalisis: ["0/0/0000", "date"]
  //   },
  //   {
  //     id: 3,
  //     analisis: ["Alimento", "label"],
  //     resultadoAnalisis: ["Negativo", "select"],
  //     tipoToxinaIdent: ["", "text"],
  //     fechaAnalisis: ["16/05/2004", "date"]
  //   }
  // ]
  const analisisToxinasData = [
    {
      id: 1,
      analisis: "Suero",
      resultadoAnalisis: "Negativo",
      tipoToxinaIdent: "",
      fechaAnalisis: "11/05/2004"
    },
    {
      id: 2,
      analisis: "Heces",
      resultadoAnalisis: "Negativo",
      tipoToxinaIdent: "",
      fechaAnalisis: "0/0/0000"
    },
    {
      id: 3,
      analisis: "Alimento",
      resultadoAnalisis: "Negativo",
      tipoToxinaIdent: "",
      fechaAnalisis: "16/05/2004",
    }
  ]
  const resultAnalisis = ["Negativo", "Positivo"]

  //  Constante para el bloque de vacunacion
  const datosVacunacion = {
    tablaVacunas: {
      arrayCabeceraTabla: ["Fecha Administrada", "Nombre de la vacuna", "N° dosis", "Lote", "Fecha de Caducidad", "Laboratorio", "Centro"],
      listaElements: [
        { fecha: "01/10/2010", nombre: "Sarampión", numDosis: 1, lote: "AF35V", fechaCaducidad: "12/12/2030", laboratorio: "laboratorio A", centro: "centro 1" },
        { fecha: "12/03/2014", nombre: "Paperas", numDosis: 3, lote: "GHT4563FG", fechaCaducidad: "12/03/2024", laboratorio: "laboratorio B", centro: "centro 2" },
        { fecha: "16/02/2015", nombre: "Rotavirus", numDosis: 1, lote: "JK8HT5", fechaCaducidad: "16/02/2019", laboratorio: "laboratorio B", centro: "centro 2" },
        { fecha: "07/09/2017", nombre: "Varicela", numDosis: 1, lote: "KSJDL887CS", fechaCaducidad: "07/09/2027", laboratorio: "laboratorio C", centro: "centro 3" },
        { fecha: "31/07/2018", nombre: "Hepatitis A", numDosis: 1, lote: "BVBV877ACSVG5", fechaCaducidad: "31/07/2028", laboratorio: "laboratorio A", centro: "centro 4" },
        { fecha: "28/02/2020", nombre: "Tétanos", numDosis: 2, lote: "89SDABAHDGH5X7S", fechaCaducidad: "28/02/2031", laboratorio: "laboratorio D", centro: "centro 4" },
      ]
    }
  }

  //  Flows
  const [tipoCaso, setTipoCaso] = useState("Importado")
  const [isImport, setIsImport] = useState(true)

  useEffect(() => {
    tipoCaso === "Importado" ? setIsImport(true) : setIsImport(false)
  }, [tipoCaso])

  function setDeleteData() {
    console.log("Borrando datos")
  }

  function setAddVaccine() {
    console.log("Add Vaccine")
  }


  return (
    <div className="container-fluid mt-1 bg-body rounded">
      {
        theContext.toggleJSONEingaben &&
        <>
          <div className="container shadow-sm d-flex flex-column justify-content-start align-items-center p-1">
            <header className="container row bg-light p-0 rounded">
              <h5 className="col h-5 fw-bold p-2 text-sm-start text-muted text-capitalize text-secondary ">
                Form: <span className="display-6 text-danger badge fw-bolder mx-auto">{theContext.valueOfForm} </span>
              </h5>
            </header>
          </div>

          {/* //  Here are the dates of the form:  3 rows */}
          <div className="container shadow-sm graycolor200 p-1">

            <div className="container-fluid m-0 p-1 mb-2">
              {/* //  1.-  First row:  Title of Form + Id of Form */}
              <div className="row p-1 mb-1 gx-1 shadow-sm graycolor500">
                <div className="col-3">
                  <LabelElem_PB
                    elementID={"idTitleOfDisease_001"}
                    orderInBlock={1}
                    required={true}
                    disabled={false}
                    response={["Encuesta Epidemiológica de Varicela"]}
                    placeholder={"Encuesta Epidemiológica de Varicela"}
                    size={50}
                    position={{ rowElem: 0, colElem: 0 }}
                    width={3}
                    borderElement={false}
                    colorElement={"rgb(9, 9, 9)"}
                    fontSizeElement={"0.8rem"}
                  />
                </div>

                <div className="col-3 offset-md-6">
                  <TextElem_PB
                    elementID={"id_IdOfForm"}
                    orderInBlock={2}
                    labelElement={"Id: "}
                    required={true}
                    disabled={true}
                    response={[""]}
                    placeholder={theContext.valueOfForm}
                    size={15}
                    position={{ rowElem: 0, colElem: 10 }}
                    width={3}
                    borderElement={false}
                    colorElement={"rgb(9, 9, 9)"}
                    fontSizeElement={"0.8rem"}
                    setText={theContext.setText}
                  />
                </div>
              </div>

              {/* //  2.-  Second row:  Jumbotron with data + Icons */}
              <div className="row p-1 mb-1 gx-1 graycolor100 shadow-sm">
                <div className="col-7 p-1 blueGradientColorHell offset-md-1">
                  <div className="row container my-1 align-items-center" >
                    <div className="col-2">
                      <TextElem_PB
                        elementID={"id_Anyo_Disease"}
                        orderInBlock={3}
                        labelElement={"Año: "}
                        required={true}
                        disabled={false}
                        response={["2020"]}
                        placeholder={"2023"}
                        size={5}
                        position={{ rowElem: 1, colElem: 1 }}
                        width={2}
                        borderElement={true}
                        colorElement={"rgb(9, 9, 9)"}
                        fontSizeElement={"0.6rem"}
                        setText={theContext.setText}
                      />
                    </div>
                    <div className="col-2">
                      <NumberElem_PB
                        elementID={"id_Week_Disease"}
                        orderInBlock={4}
                        labelElement={"Semana: "}
                        required={true}
                        disabled={false}
                        response={[30]}
                        placeholder={0}
                        size={3}
                        position={{ rowElem: 1, colElem: 4 }}
                        width={2}
                        borderElement={true}
                        colorElement={"rgb(9, 9, 9)"}
                        fontSizeElement={"0.6rem"}
                        setNumber={theContext.setNumber}
                      />
                    </div>
                    <div className="col-5 offset-md-3">
                      <DateElem_PB
                        elementID={"id_Current_date"}
                        orderInBlock={5}
                        labelElement={"Fecha actual: "}
                        required={true}
                        disabled={false}
                        response={[currentDate().Date_DD_MM_YY]}
                        placeholder={currentDate().Date_DD_MM_YY}
                        size={20}
                        position={{ rowElem: 1, colElem: 8 }}
                        width={3}
                        borderElement={true}
                        colorElement={"rgb(9, 9, 9)"}
                        fontSizeDate={"0.6rem"}
                        setDate={theContext.setDate}
                      />
                    </div>
                  </div>

                  <div className="row container my-1 align-items-center" >
                    <div className="col-2">
                      <NumberElem_PB
                        elementID={"id_Number_Disease"}
                        orderInBlock={6}
                        labelElement={"N°: "}
                        required={true}
                        disabled={false}
                        response={[3596]}
                        placeholder={0}
                        size={5}
                        position={{ rowElem: 2, colElem: 1 }}
                        width={2}
                        borderElement={true}
                        colorElement={"rgb(9, 9, 9)"}
                        fontSizeElement={"0.6rem"}
                        setNumber={theContext.setNumber}
                      />
                    </div>
                    <div className="col-2 offset-md-1">
                      <TextElem_PB
                        elementID={"id_Id_Disease"}
                        orderInBlock={7}
                        labelElement={"Id: "}
                        required={true}
                        disabled={true}
                        response={["07A748"]}
                        placeholder={"07A748"}
                        size={6}
                        position={{ rowElem: 2, colElem: 4 }}
                        width={2}
                        borderElement={true}
                        colorElement={"rgb(9, 9, 9)"}
                        fontSizeElement={"0.6rem"}
                        setText={theContext.setText}
                      />
                    </div>
                    <div className="col-4 offset-md-3">
                      <TextElem_PB
                        elementID={"id_Id_Disease"}
                        orderInBlock={8}
                        labelElement={"Código: "}
                        required={true}
                        disabled={false}
                        response={["07A742C2"]}
                        placeholder={"07A742C1"}
                        size={8}
                        position={{ rowElem: 2, colElem: 4 }}
                        width={2}
                        borderElement={true}
                        colorElement={"rgb(9, 9, 9)"}
                        fontSizeElement={"0.6rem"}
                        setText={theContext.setText}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-1 p-1 offset-md-1">
                  <IconoElem_PB
                    elementID={"id_ico_document"}
                    orderInBlock={9}
                    required={true}
                    disabled={false}
                    widthImage={"75"}
                    position={{ rowElem: 2, colElem: 1 }}
                    borderElement={true}
                    srcURLIcon={"../src/assets/iconImages/"}
                    nameImage={"document"}
                    setIcon={theContext.setIcon}
                  />
                </div>
                <div className="col-1 p-1">
                  <IconoElem_PB
                    elementID={"id_ico_estetoscopio"}
                    orderInBlock={10}
                    required={true}
                    disabled={false}
                    widthImage={"75"}
                    position={{ rowElem: 2, colElem: 1 }}
                    borderElement={true}
                    srcURLIcon={"../src/assets/iconImages/"}
                    nameImage={"estetoscopio"}
                    setIcon={theContext.setIcon}
                  />
                </div>
              </div>

              {/* //  3.-  Third row:  data end of Form */}
              <div className="row p-1 mb-1 gx-1 graycolor100 shadow-sm">
                <div className="col-2 offset-sm-1">
                  <LabelElem_PB
                    elementID={"id_mandatory_fields"}
                    orderInBlock={11}
                    required={true}
                    disabled={true}
                    response={[""]}
                    placeholder={"(*)  Campos obligatorios"}
                    size={25}
                    position={{ rowElem: 2, colElem: 1 }}
                    width={3}
                    borderElement={false}
                    colorElement={"rgb(9, 9, 9)"}
                    fontSizeElement={"0.6rem"}
                  />
                </div>
                <div className="col-3 d-flex justify-content-end offset-sm-2">
                  <NumberElem_PB
                    elementID={"id_Fillig_in_Disease"}
                    orderInBlock={12}
                    labelElement={"Porcentaje de cumplimentación: "}
                    required={true}
                    disabled={true}
                    response={[0]}
                    placeholder={0}
                    size={3}
                    position={{ rowElem: 2, colElem: 5 }}
                    width={3}
                    borderElement={true}
                    colorElement={"rgb(9, 9, 9)"}
                    fontSizeElement={"0.6rem"}
                    setNumber={theContext.setNumber}
                  />
                </div>
                <div className="col-1 d-flex flex-column justify-content-center align-items-start p-0">
                  <span className="fw-bold text-sm-start fs-6">%</span>
                </div>
                <div className="col-3"></div>
              </div>
            </div>

            {/* //  ==>>       ****   FORM BLOCKS   ****       */}
            <div className="container-fluid m-0 p-0 mb-1">
              {/* //  1.-  DATOS DEL DECLARANTE */}
              <div id="accordionBlock1" className="accordion accordion-flush graycolor200 mx-auto mb-1">
                <div className="accordion-item p-0 m-0">
                  <div id="headingOne1" className="accordion-header" >
                    <button className="accordion-button graycolor400 h6 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1"
                      aria-expanded="false" aria-controls="collapseOne1">
                      <span className="h6 fw-bold">{"DATOS DEL DECLARANTE"}</span>
                    </button>
                  </div>

                  <div id="collapseOne1" class="accordion-collapse collapse show" aria-labelledby="headingOne1">
                    <div class="accordion-body py-0 px-1 mx-1">
                      <div className="row p-1 shadow-sm graycolor500">
                        <div className="col-3">
                          <LabelElem_PB
                            elementID={"id_Block_001"}
                            orderInBlock={0}
                            required={true}
                            disabled={false}
                            response={[""]}
                            placeholder={"DATOS DEL DECLARANTE"}
                            size={30}
                            position={{ rowElem: 0, colElem: 0 }}
                            width={3}
                            borderElement={false}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.7rem"}
                          />
                        </div>
                      </div>

                      <div className="row p-1 mb-1 graycolor100 shadow-sm">
                        <div className="col-3">
                          <DateElem_PB
                            elementID={"id_Fecha_declaracion"}
                            orderInBlock={1}
                            labelElement={"Fecha de declaración: "}
                            required={true}
                            disabled={false}
                            response={[currentDate().Date_DD_MM_YY]}
                            placeholder={currentDate().Date_DD_MM_YY}
                            size={20}
                            position={{ rowElem: 1, colElem: 0 }}
                            width={3}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setDate={theContext.setDate}
                          />
                        </div>
                        <div className="col-4 offset-sm-3">
                          <TextElem_PB
                            elementID={"id_elem_municipio"}
                            orderInBlock={2}
                            labelElement={"Declarante: "}
                            required={true}
                            disabled={false}
                            response={["Ortuno Garcia, Laura Maria".toUpperCase()]}
                            placeholder={"Escriba Declarante..".toUpperCase()}
                            size={35}
                            position={{ rowElem: 2, colElem: 0 }}
                            width={4}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setText={theContext.setText}
                          />
                        </div>
                        <div className="col-2">
                          <PhoneElem_PB
                            elementID={"id_elem_phone_declarante"}
                            orderInBlock={3}
                            labelElement={"Teléfono: "}
                            required={true}
                            disabled={false}
                            response={["96-1111-1111"]}
                            placeholder={"96-1111-1111"}
                            size={14}
                            position={{ rowElem: 2, colElem: 0 }}
                            width={2}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setPhone={theContext.setPhone}
                          />
                        </div>
                      </div>

                      <div className="row p-1 mb-1 graycolor100 shadow-sm">
                        <div className="col-4">
                          <TextElem_PB
                            elementID={"id_elem_centroTrabajo"}
                            orderInBlock={4}
                            labelElement={"Centro de Trabajo: "}
                            required={true}
                            disabled={false}
                            response={["Centro de Salud de la Pobla de Vallbona".toUpperCase()]}
                            placeholder={"Escriba Centro de Trabajo...".toUpperCase()}
                            size={40}
                            position={{ rowElem: 2, colElem: 0 }}
                            width={4}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setText={theContext.setText}
                          />
                        </div>

                        <div className="col-4 offset-md-1">
                          <TextElem_PB
                            elementID={"id_elem_municipio"}
                            orderInBlock={5}
                            labelElement={"Municipio: "}
                            required={true}
                            disabled={false}
                            response={["Manises".toUpperCase()]}
                            placeholder={"Escriba Municipio...".toUpperCase()}
                            size={35}
                            position={{ rowElem: 2, colElem: 4 }}
                            width={3}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setText={theContext.setText}
                          />
                        </div>

                        <div className="col-3">
                          <TextElem_PB
                            elementID={"id_elem_Departamento"}
                            orderInBlock={6}
                            labelElement={"Departamento: "}
                            required={true}
                            disabled={false}
                            response={["Manises".toUpperCase()]}
                            placeholder={"Escriba Departamento...".toUpperCase()}
                            size={25}
                            position={{ rowElem: 2, colElem: 4 }}
                            width={3}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setText={theContext.setText}
                          />
                        </div>
                      </div>

                      <div className="row p-1 mb-1 graycolor100 shadow-sm">
                        <div className="col-2 offset-md-1">
                          < SelectElement_PB
                            elementID={"id_elem_encuestaCerrada"}
                            orderInBlock={7}
                            labelElement={"Encuesta cerrada: "}
                            required={true}
                            disabled={false}
                            response={["NO"]}
                            placeholder={"SI"}
                            size={1}
                            position={{ rowElem: 2, colElem: 0 }}
                            width={3}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            optionsValues={["SI", "NO"]}
                            setSelect={theContext.setSelect}
                          />
                        </div>

                        <div className="col-3 offset-md-1">
                          < SelectElement_PB
                            elementID={"id_elem_procDeclaracion"}
                            orderInBlock={8}
                            labelElement={"Procedencia de declaración: "}
                            required={true}
                            disabled={false}
                            response={["PIA"]}
                            placeholder={"SIA"}
                            size={1}
                            position={{ rowElem: 2, colElem: 0 }}
                            width={3}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            optionsValues={["TIA", "MIA", "SIA", "PIA", "OTRA"]}
                            setSelect={theContext.setSelect}
                          />
                        </div>

                        <div className="col-2 offset-md-1">
                          <NumberElem_PB
                            elementID={"id_pto_declaracion"}
                            orderInBlock={9}
                            labelElement={"Punto de declaración: "}
                            required={true}
                            disabled={false}
                            response={[70601]}
                            placeholder={70001}
                            size={6}
                            position={{ rowElem: 1, colElem: 4 }}
                            width={3}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setNumber={theContext.setNumber}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* //  2.-  ASIGNACION DEL CASO */}
              <div id="accordionBlock2" className="accordion accordion-flush graycolor200 mx-auto mb-2">
                <div className="accordion-item p-0 m-0">
                  <div id="headingOne2" className="accordion-header" >
                    <button className="accordion-button graycolor400 h6 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2"
                      aria-expanded="true" aria-controls="collapseOne2">
                      <span className="h6 fw-bold">{"ASIGNACIÓN DEL CASO, referido al territorio de riesgo"}</span>
                    </button>
                  </div>

                  <div id="collapseOne2" class="accordion-collapse collapse show" aria-labelledby="headingOne2">
                    <div class="accordion-body py-0 px-1 mx-1">
                      <div className="row p-1 shadow-sm graycolor500">
                        <div className="col-5">
                          <LabelElem_PB
                            elementID={"id_Block_002"}
                            orderInBlock={1}
                            required={true}
                            disabled={false}
                            response={[""]}
                            placeholder={"ASIGNACIÓN DEL CASO, referido al territorio de riesgo"}
                            size={50}
                            position={{ rowElem: 0, colElem: 0 }}
                            width={5}
                            borderElement={false}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.7rem"}
                          />
                        </div>
                      </div>
                      <div className="row p-1 mb-1 graycolor100 shadow-sm">
                        <div className="col-4">
                          <div className="col">
                            <TextElem_PB
                              elementID={"id_elem_municipio"}
                              orderInBlock={2}
                              labelElement={"Municipio: "}
                              required={true}
                              disabled={false}
                              response={["Pobla de Vallbona".toUpperCase()]}
                              placeholder={"Escriba Municipio de Centro de Salud...".toUpperCase()}
                              size={35}
                              position={{ rowElem: 2, colElem: 0 }}
                              width={4}
                              borderElement={true}
                              colorElement={"rgb(9, 9, 9)"}
                              fontSizeElement={"0.7rem"}
                              setText={theContext.setText}
                            />
                          </div>
                          <div className="col">
                            <div class="d-grid gap-0">
                              <button type="button" className="btn btn-sm btn-dark">Cambiar Municipio</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="col">
                            <TextElem_PB
                              elementID={"id_elem_departamento"}
                              orderInBlock={3}
                              labelElement={"Departamento: "}
                              required={true}
                              disabled={false}
                              response={["Manises".toUpperCase()]}
                              placeholder={"Escriba departamento...".toUpperCase()}
                              size={35}
                              position={{ rowElem: 2, colElem: 4 }}
                              width={4}
                              borderElement={true}
                              colorElement={"rgb(9, 9, 9)"}
                              fontSizeElement={"0.7rem"}
                              setText={theContext.setText}
                            />
                          </div>
                          <div className="col">
                            <div class="d-grid gap-0">
                              <button type="button" className="btn btn-sm btn-dark">Cambiar Departamento</button>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="col">
                            <TextElem_PB
                              elementID={"id_elem_centrosalud"}
                              orderInBlock={3}
                              labelElement={"Centro: "}
                              required={true}
                              disabled={false}
                              response={["CS Quart de Poblet".toUpperCase()]}
                              placeholder={"Escriba Centro de Salud...".toUpperCase()}
                              size={35}
                              position={{ rowElem: 2, colElem: 4 }}
                              width={4}
                              borderElement={true}
                              colorElement={"rgb(9, 9, 9)"}
                              fontSizeElement={"0.7rem"}
                              setText={theContext.setText}
                            />
                          </div>
                          <div className="col">
                            <div class="d-grid gap-0">
                              <button type="button" className="btn btn-sm btn-dark">Asignar 3° Ambito</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* //  3.-  DATOS DE IDENTIFICACION */}
              <div id="accordionBlock3" className="accordion accordion-flush graycolor200 mx-auto mb-2">
                <div className="accordion-item p-0 m-0">
                  <h6 id="headingOne3" className="accordion-header" >
                    <button className="accordion-button graycolor400 h6 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne3" aria-expanded="false" aria-controls="collapseOne3">
                      <span className="fs-6">{"DATOS DE IDENTIFICACIÓN"}</span>
                    </button>
                  </h6>

                  <div id="collapseOne3" class="accordion-collapse collapse show" aria-labelledby="headingOne3">
                    <div class="accordion-body py-0 px-1 mx-1">
                      <div className="row p-1 shadow-sm graycolor500">
                        <div className="col-3">
                          <LabelElem_PB
                            elementID={"id_Block_003"}
                            orderInBlock={0}
                            required={true}
                            disabled={false}
                            response={[""]}
                            placeholder={"DATOS DE IDENTIFICACIÓN"}
                            size={50}
                            position={{ rowElem: 0, colElem: 0 }}
                            width={3}
                            borderElement={false}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.7rem"}
                          />
                        </div>
                      </div>

                      <div className="row p-1 mb-1 graycolor100 shadow-sm">
                        <div className="col-3">
                          <TextElem_PB
                            elementID={"id_elem_nombre"}
                            orderInBlock={1}
                            labelElement={"Nombre: "}
                            required={true}
                            disabled={false}
                            response={["Nerea".toUpperCase()]}
                            placeholder={"Nombre del Paciente...".toUpperCase()}
                            size={20}
                            position={{ rowElem: 2, colElem: 0 }}
                            width={3}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setText={theContext.setText}
                          />
                        </div>
                        <div className="col-3">
                          <TextElem_PB
                            elementID={"id_elem_primerApellido"}
                            orderInBlock={2}
                            labelElement={"Primer apellido: "}
                            required={true}
                            disabled={false}
                            response={["Aguilar".toUpperCase()]}
                            placeholder={"Escriba primer apellido...".toUpperCase()}
                            size={25}
                            position={{ rowElem: 2, colElem: 0 }}
                            width={4}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setText={theContext.setText}
                          />
                        </div>
                        <div className="col-3">
                          <TextElem_PB
                            elementID={"id_elem_segundoApellido"}
                            orderInBlock={3}
                            labelElement={"Segundo apellido: "}
                            required={true}
                            disabled={false}
                            response={["Berbel".toUpperCase()]}
                            placeholder={"Escriba segundo apellido...".toUpperCase()}
                            size={25}
                            position={{ rowElem: 2, colElem: 0 }}
                            width={4}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setText={theContext.setText}
                          />
                        </div>
                        <div className="col-1 offset-sm-1">
                          < SelectElement_PB
                            elementID={"id_elem_sexo"}
                            orderInBlock={4}
                            labelElement={"Sexo: "}
                            required={true}
                            disabled={false}
                            response={["Mujer"]}
                            placeholder={"Mujer"}
                            size={1}
                            position={{ rowElem: 2, colElem: 0 }}
                            width={1}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            optionsValues={["Mujer", "Hombre", "SG"]}
                            setSelect={theContext.setSelect}
                          />
                        </div>
                      </div>

                      <div className="row p-1 mb-1 graycolor100 shadow-sm">
                        <div className="col-3">
                          <DateElem_PB
                            elementID={"id_Fecha_nacimiento"}
                            orderInBlock={5}
                            labelElement={"Fecha de nacimiento: "}
                            required={true}
                            disabled={false}
                            response={[currentDate().Date_DD_MM_YY]}
                            placeholder={currentDate().Date_DD_MM_YY}
                            size={15}
                            position={{ rowElem: 1, colElem: 0 }}
                            width={3}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setDate={theContext.setDate}
                          />
                        </div>
                        <div className="col-2 d-flex flex-row justify-content-start align-items-center ">
                          <div className="col">
                            <NumberElem_PB
                              elementID={"id_elem_edad"}
                              orderInBlock={4}
                              labelElement={"Edad: "}
                              required={true}
                              disabled={false}
                              response={[30]}
                              placeholder={18}
                              size={3}
                              position={{ rowElem: 1, colElem: 4 }}
                              width={1}
                              borderNumber={true}
                              colorElement={"rgb(9, 9, 9)"}
                              fontSizeElement={"0.6rem"}
                              setNumber={theContext.setNumber}
                            />
                          </div>
                          <div className="col">
                            < SelectElement_PB
                              elementID={"id_elem_edadMedida"}
                              orderInBlock={6}
                              labelElement={""}
                              required={true}
                              disabled={false}
                              response={["Meses"]}
                              placeholder={"Años"}
                              size={1}
                              position={{ rowElem: 2, colElem: 0 }}
                              width={1}
                              borderElement={true}
                              colorElement={"rgb(9, 9, 9)"}
                              fontSizeElement={"0.6rem"}
                              optionsValues={["Dias", "Meses", "Años"]}
                              setSelect={theContext.setSelect}
                            />
                          </div>
                        </div>
                        <div className="col-2 offset-sm-2">
                          <NumberElem_PB
                            elementID={"id_elem_sip"}
                            orderInBlock={7}
                            labelElement={"SIP: "}
                            required={true}
                            disabled={false}
                            response={[11446102]}
                            placeholder={10000000}
                            size={8}
                            position={{ rowElem: 1, colElem: 4 }}
                            width={2}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setNumber={theContext.setNumber}
                          />
                        </div>
                        <div className="col-3">
                          <TextElem_PB
                            elementID={"id_elem_historiaClinica"}
                            orderInBlock={8}
                            labelElement={"Historia clínica: "}
                            required={true}
                            disabled={false}
                            response={["".toUpperCase()]}
                            placeholder={"Historia clínica...".toUpperCase()}
                            size={20}
                            position={{ rowElem: 2, colElem: 0 }}
                            width={3}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setText={theContext.setText}
                          />
                        </div>
                      </div>

                      <div className="row p-1 mb-1 graycolor100 shadow-sm">
                        <div className="col-3">
                          <TextElem_PB
                            elementID={"id_elem_calle"}
                            orderInBlock={9}
                            labelElement={"Calle: "}
                            required={true}
                            disabled={false}
                            response={["Carre Rossinyol 14".toUpperCase()]}
                            placeholder={"Calle...".toUpperCase()}
                            size={25}
                            position={{ rowElem: 2, colElem: 0 }}
                            width={3}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setText={theContext.setText}
                          />
                        </div>
                        <div className="col-1">
                          <NumberElem_PB
                            elementID={"id_Number_numCalle"}
                            orderInBlock={10}
                            labelElement={"N°: "}
                            required={true}
                            disabled={false}
                            response={[12]}
                            placeholder={0}
                            size={4}
                            position={{ rowElem: 2, colElem: 1 }}
                            width={1}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.7rem"}
                            setNumber={theContext.setNumber}
                          />
                        </div>
                        <div className="col-3">
                          <TextElem_PB
                            elementID={"id_elem_municipio"}
                            orderInBlock={11}
                            labelElement={"Municipio: "}
                            required={true}
                            disabled={false}
                            response={["Quart de Poblet".toUpperCase()]}
                            placeholder={"Municipio...".toUpperCase()}
                            size={25}
                            position={{ rowElem: 2, colElem: 0 }}
                            width={3}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setText={theContext.setText}
                          />
                        </div>
                        <div className="col-1">
                          <NumberElem_PB
                            elementID={"id_elem_cp"}
                            orderInBlock={4}
                            labelElement={"CP: "}
                            required={true}
                            disabled={false}
                            response={[46930]}
                            placeholder={0}
                            size={5}
                            position={{ rowElem: 1, colElem: 4 }}
                            width={1}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setNumber={theContext.setNumber}
                          />
                        </div>
                        <div className="col-2">
                          <TextElem_PB
                            elementID={"id_elem_provincia"}
                            orderInBlock={12}
                            labelElement={"Provincia: "}
                            required={true}
                            disabled={false}
                            response={["Valencia".toUpperCase()]}
                            placeholder={"Provincia...".toUpperCase()}
                            size={15}
                            position={{ rowElem: 2, colElem: 0 }}
                            width={2}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setText={theContext.setText}
                          />
                        </div>
                        <div className="col-2">
                          <TextElem_PB
                            elementID={"id_elem_pais"}
                            orderInBlock={13}
                            labelElement={"País: "}
                            required={true}
                            disabled={false}
                            response={["España".toUpperCase()]}
                            placeholder={"País...".toUpperCase()}
                            size={12}
                            position={{ rowElem: 2, colElem: 0 }}
                            width={2}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setText={theContext.setText}
                          />
                        </div>
                      </div>

                      <div className="row p-1 mb-1 graycolor100 shadow-sm">
                        <div className="col-4">
                          <TextElem_PB
                            elementID={"id_elem_phones"}
                            orderInBlock={14}
                            labelElement={"Teléfonos: "}
                            required={true}
                            disabled={false}
                            response={["96 111 11111, 91 222 2222"]}
                            placeholder={"Telefonos...".toUpperCase()}
                            size={25}
                            position={{ rowElem: 2, colElem: 0 }}
                            width={4}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setText={theContext.setText}
                          />
                        </div>
                        <div className="col-4 offset-sm-1">
                          <EmailElem_PB
                            elementID={"id_elem_emails"}
                            orderInBlock={15}
                            labelElement={"Email: "}
                            required={false}
                            disabled={false}
                            response={["pepito@hotmail.com"]}
                            placeholder={"Email: XXX@XXX.com...".toUpperCase()}
                            size={20}
                            position={{ rowElem: 2, colElem: 0 }}
                            width={4}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setEmail={theContext.setEmail}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* //  4.-  DATOS DE ADMINISTRACION */}
              <div id="accordionBlock4" className="accordion accordion-flush graycolor200 mx-auto mb-2">
                <div className="accordion-item p-0 m-0">
                  <h6 id="headingOne4" className="accordion-header" >
                    <button className="accordion-button graycolor400 h6 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne4" aria-expanded="false" aria-controls="collapseOne4">
                      {"DATOS DE ADMINISTRACIÓN"}
                    </button>
                  </h6>

                  <div id="collapseOne4" class="accordion-collapse collapse show" aria-labelledby="headingOne4">
                    <div class="accordion-body py-0 px-1 mx-1">
                      <div className="row p-1 shadow-sm graycolor500 ">
                        <div className="col-3">
                          <LabelElem_PB
                            elementID={"id_Block_004"}
                            orderInBlock={1}
                            required={true}
                            disabled={false}
                            response={[""]}
                            placeholder={"DATOS DE ADMINISTRACIÓN"}
                            size={50}
                            position={{ rowElem: 0, colElem: 0 }}
                            width={3}
                            borderElement={false}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.7rem"}
                          />
                        </div>
                      </div>

                      <div className="row p-1 mb-1 graycolor100 shadow-sm">
                        <div className="col-6">
                          <TextElem_PB
                            elementID={"id_elem_centroasig"}
                            orderInBlock={2}
                            labelElement={"Centro asignado: "}
                            required={true}
                            disabled={false}
                            response={["Centro de Salud de Quart de Poblet".toUpperCase()]}
                            placeholder={"Escribe Centro de Salud...".toUpperCase()}
                            size={40}
                            position={{ rowElem: 2, colElem: 4 }}
                            width={6}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setText={theContext.setText}
                          />
                        </div>
                        <div className="col-5 offset-md-1">
                          <TextElem_PB
                            elementID={"id_elem_profasig"}
                            orderInBlock={3}
                            labelElement={"Profesional asignado: "}
                            required={true}
                            disabled={false}
                            response={["Beatriz Ogalla Suarez".toUpperCase()]}
                            placeholder={"Escribe profesional asignado...".toUpperCase()}
                            size={40}
                            position={{ rowElem: 2, colElem: 4 }}
                            width={5}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setText={theContext.setText}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* //  5.-  DATOS DE LABORATORIO */}
              <div id="accordionBlock5" className="accordion accordion-flush graycolor200 mx-auto mb-2">
                <div className="accordion-item p-0 m-0">
                  <h6 id="headingOne5" className="accordion-header" >
                    <button className="accordion-button graycolor400 h6 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="false" aria-controls="collapseOne5">
                      {"DATOS DE LABORATORIO"}
                    </button>
                  </h6>

                  <div id="collapseOne5" class="accordion-collapse collapse show" aria-labelledby="headingOne5">
                    <div class="accordion-body py-0 px-1 mx-1">
                      <div className="row p-1 shadow-sm graycolor500 ">
                        <div className="col-3">
                          <LabelElem_PB
                            elementID={"id_Block_005"}
                            orderInBlock={1}
                            required={true}
                            disabled={false}
                            response={[""]}
                            placeholder={"DATOS DE LABORATORIO"}
                            size={50}
                            position={{ rowElem: 0, colElem: 0 }}
                            width={3}
                            borderElement={false}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.7rem"}
                          />
                        </div>
                      </div>

                      <div className="row p-1 mb-1 graycolor100 shadow-sm">
                        <div className="col-3">
                          <LabelElem_PB
                            elementID={"id_Block_005"}
                            orderInBlock={1}
                            required={true}
                            disabled={false}
                            response={[""]}
                            placeholder={"Investigación de toxina botulínica"}
                            size={50}
                            position={{ rowElem: 0, colElem: 0 }}
                            width={12}
                            borderElement={false}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                          />
                        </div>
                      </div>

                      <div className="row p-1 mb-1 graycolor100 shadow-sm">
                        <div className="col-10 offset-md-1">
                          {/* //  Table */}
                          <TableElem_PB
                            elementID={`id_TableElement`}
                            orderInBlock={2}
                            required={true}
                            disabled={false}
                            position={{ rowElem: 2, colElem: 0 }}
                            width={10}
                            borderTable={true}
                            colorTable={"green"}
                            fontSizeTableHead={"0.7rem"}
                            fontSizeBodyTable={"0.6rem"}
                            titlesHeadsTable={titleTablaToxinas}
                            tableData={analisisToxinasData}
                            setTable={theContext.setTable}
                          />
                        </div>
                      </div>
                      <div className="row p-1 mb-1 graycolor100 shadow-sm">
                        <div className="col-3">
                          <LabelElem_PB
                            elementID={"id_Block_aislamiento"}
                            orderInBlock={3}
                            required={true}
                            disabled={false}
                            response={[""]}
                            placeholder={"Aislamiento de C.Botulinum"}
                            size={50}
                            position={{ rowElem: 0, colElem: 0 }}
                            width={3}
                            borderElement={false}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                          />
                        </div>
                        <div className="col-3 offset-md-2">
                          < SelectElement_PB
                            elementID={"id_elem_herida"}
                            orderInBlock={4}
                            labelElement={"Herida: "}
                            required={true}
                            disabled={false}
                            response={["Caso 1"]}
                            placeholder={"Caso 2"}
                            size={1}
                            position={{ rowElem: 2, colElem: 0 }}
                            width={3}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            optionsValues={["Caso 1", "Caso 2", "Caso 3", "Caso 4", "Caso 5"]}
                            setSelect={theContext.setSelect}
                          />
                        </div>
                        <div className="col-3">
                          < SelectElement_PB
                            elementID={"id_elem_heces"}
                            orderInBlock={5}
                            labelElement={"Heces: "}
                            required={true}
                            disabled={false}
                            response={["Resultado text 1"]}
                            placeholder={"Resultado text 4"}
                            size={1}
                            position={{ rowElem: 2, colElem: 0 }}
                            width={3}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            optionsValues={["Resultado text 1", "Resultado text 2", "Resultado text 3", "Resultado text 4", "Resultado text 5"]}
                            setSelect={theContext.setSelect}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* //  6.-  DATOS EPIDEMIOLÓGICOS  */}
              <div id="accordionBlock6" className="accordion accordion-flush graycolor200 mx-auto mb-2">
                <div className="accordion-item p-0 m-0">
                  <h6 id="headingOne6" className="accordion-header" >
                    <button className="accordion-button graycolor400 h6 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne6" aria-expanded="false" aria-controls="collapseOne6">
                      {"DATOS DE EPIDEMIOLÓGICOS"}
                    </button>
                  </h6>

                  <div id="collapseOne6" class="accordion-collapse collapse show" aria-labelledby="headingOne6">
                    <div class="accordion-body py-0 px-1 mx-1">
                      <div className="row p-1 shadow-sm graycolor500 ">
                        <div className="col-3">
                          <LabelElem_PB
                            elementID={"id_Block_006"}
                            orderInBlock={1}
                            required={true}
                            disabled={false}
                            response={[""]}
                            placeholder={"DATOS DE EPIDEMIOLÓGICOS"}
                            size={50}
                            position={{ rowElem: 0, colElem: 0 }}
                            width={3}
                            borderElement={false}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.7rem"}
                          />
                        </div>
                      </div>

                      <div className="row p-1 mb-1 graycolor100 shadow-sm">
                        <div className="col-2 offset-md-1">
                          < SelectElement_PB
                            elementID={"id_elem_caso"}
                            orderInBlock={1}
                            labelElement={"Caso: "}
                            required={true}
                            disabled={false}
                            response={["Caso aislado"]}
                            placeholder={"Caso aislado"}
                            size={1}
                            position={{ rowElem: 2, colElem: 0 }}
                            width={3}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            optionsValues={["Caso aislado", "Brote leve", "Brote masivo", "Epidemia", "Pandemia"]}
                            setSelect={theContext.setSelect}
                          />
                        </div>
                        <div className="col-2">
                          < SelectElement_PB
                            elementID={"id_elem_tipoCaso"}
                            orderInBlock={1}
                            labelElement={"Tipo de Caso(*): "}
                            required={true}
                            disabled={false}
                            response={["Importado"]}
                            placeholder={"Extracomunitario"}
                            size={1}
                            position={{ rowElem: 2, colElem: 0 }}
                            width={3}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            optionsValues={["Extracomunitario", "Importado"]}
                            setSelect={setTipoCaso}                //  <<==  Flow 1
                          />
                        </div>
                        <div className="col-2 offset-md-1">
                          {
                            !isImport ?
                              < SelectElement_PB
                                elementID={"id_elem_pais"}
                                orderInBlock={2}
                                labelElement={"País: "}
                                required={true}
                                disabled={false}
                                response={[dataImportado.values[3]]}
                                placeholder={dataImportado.values[0]}
                                size={1}
                                position={{ rowElem: 2, colElem: 0 }}
                                width={3}
                                borderElement={true}
                                colorElement={"rgb(9, 9, 9)"}
                                fontSizeElement={"0.6rem"}
                                optionsValues={dataImportado.values}
                                setSelect={theContext.setSelect}
                              />
                              :
                              < SelectElement_PB
                                elementID={"id_elem_comunidad"}
                                orderInBlock={2}
                                labelElement={"Comunidad Autonoma: "}
                                required={true}
                                disabled={false}
                                response={[dataExtracomunitario.values[0]]}
                                placeholder={dataExtracomunitario.values[10]}
                                size={1}
                                position={{ rowElem: 2, colElem: 0 }}
                                width={3}
                                borderElement={true}
                                colorElement={"rgb(9, 9, 9)"}
                                fontSizeElement={"0.6rem"}
                                optionsValues={dataExtracomunitario.values}
                                setSelect={theContext.setSelect}
                              />
                          }
                        </div>
                        <div className="col-2 offset-md-1">
                          < SelectElement_PB
                            elementID={"id_elem_clasificacionCaso"}
                            orderInBlock={3}
                            labelElement={"Clasificación de Caso(*): "}
                            required={true}
                            disabled={false}
                            response={["Pendiente"]}
                            placeholder={"Caso aislado"}
                            size={1}
                            position={{ rowElem: 2, colElem: 0 }}
                            width={3}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            optionsValues={["Error Diag", "Pendiente", "En estudio", "Caso 4"]}
                            setSelect={theContext.setSelect}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* //  7.-  DATOS DE VACUNACIÓN   */}
              <div id="accordionBlock7" className="accordion accordion-flush graycolor200 mx-auto mb-2">
                <div className="accordion-item p-0 m-0">
                  <h6 id="headingOne7" className="accordion-header" >
                    <button className="accordion-button graycolor400 h6 fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne7" aria-expanded="false" aria-controls="collapseOne7">
                      {"DATOS DE VACUNACIÓN"}
                    </button>
                  </h6>

                  <div id="collapseOne7" class="accordion-collapse collapse show" aria-labelledby="headingOne7">
                    <div class="accordion-body py-0 px-1 mx-1">
                      <div className="row p-1 shadow-sm graycolor500 ">
                        <div className="col-3">
                          <LabelElem_PB
                            elementID={"id_Block_007"}
                            orderInBlock={1}
                            required={true}
                            disabled={false}
                            response={[""]}
                            placeholder={"DATOS DE VACUNACIÓN"}
                            size={50}
                            position={{ rowElem: 0, colElem: 0 }}
                            width={3}
                            borderLabel={false}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.7rem"}
                          />
                        </div>
                      </div>

                      <div className="row p-1 mb-1 graycolor100 shadow-sm">
                        <div className="col-2">
                          < SelectElement_PB
                            elementID={"id_elem_caso"}
                            orderInBlock={2}
                            labelElement={"Caso: "}
                            required={true}
                            disabled={false}
                            response={["Paperas"]}
                            placeholder={"Sarampión"}
                            size={1}
                            position={{ rowElem: 2, colElem: 0 }}
                            width={2}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            optionsValues={["Sarampión", "Paperas", "Rubeola", "Rotavirus", "Viruela", "Varicela", "Fiebre amarilla", "Hepatitis A",
                              "Hepatitis B", "Gripe", "Polio", "Rabia", "Enfermedad Hib", "HPV", "Tosferina", "Tétanos"]}
                            setSelect={theContext.setSelect}
                          />
                        </div>
                        <div className="col-2">
                          < SelectElement_PB
                            elementID={"id_elem_recibioVacuna"}
                            orderInBlock={3}
                            labelElement={"Ha recibido vacuna?: "}
                            required={true}
                            disabled={false}
                            response={["SI"]}
                            placeholder={"NO"}
                            size={1}
                            position={{ rowElem: 2, colElem: 0 }}
                            width={2}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            optionsValues={["SI", "NO"]}
                            setSelect={theContext.setSelect}
                          />
                        </div>
                        <div className="col-3">
                          <DateElem_PB
                            elementID={"id_Fecha_fechaVacunacion"}
                            orderInBlock={4}
                            labelElement={"Fecha de vacunación: "}
                            required={true}
                            disabled={false}
                            response={[currentDate().Date_DD_MM_YY]}
                            placeholder={currentDate().Date_DD_MM_YY}
                            size={20}
                            position={{ rowElem: 1, colElem: 0 }}
                            width={3}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setDate={theContext.setDate}
                          />
                        </div>
                        <div className="col-2">
                          <NumberElem_PB
                            elementID={"id_num_dosis"}
                            orderInBlock={5}
                            labelElement={"N° Dosis: "}
                            required={true}
                            disabled={false}
                            response={[1]}
                            placeholder={0}
                            size={2}
                            position={{ rowElem: 1, colElem: 4 }}
                            width={2}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setNumber={theContext.setNumber}
                          />
                        </div>
                        <div className="col-2">
                          < SelectElement_PB
                            elementID={"id_elem_presDocVacunacion"}
                            orderInBlock={6}
                            labelElement={"Presenta documento de vacunación: "}
                            required={true}
                            disabled={false}
                            response={["SI"]}
                            placeholder={"SI"}
                            size={1}
                            position={{ rowElem: 2, colElem: 0 }}
                            width={2}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            optionsValues={["SI", "NO"]}
                            setSelect={theContext.setSelect}
                          />
                        </div>
                      </div>

                      <div className="row p-1 mb-1 graycolor100 shadow-sm">
                        <div className="col-10 offset-md-1">
                          <TableCustom
                            elementID={`id_TableElement`}
                            orderInBlock={2}
                            required={true}
                            disabled={false}
                            position={{ rowElem: 2, colElem: 0 }}
                            width={10}
                            borderTable={true}
                            colorTable={"green"}
                            farbeTable={"grey"}
                            fontSizeTableHead={"0.7rem"}
                            fontSizeBodyTable={"0.6rem"}
                            titlesHeadsTable={["Fecha Administrada", "Nombre de la vacuna", "N° dosis", "Lote", "Fecha de Caducidad", "Laboratorio", "Centro"]}
                            tableData={[
                              { id: 1, fecha: "01/10/2010", nombre: "Sarampión", numDosis: 1, lote: "AF35V", fechaCaducidad: "12/12/2030", laboratorio: "laboratorio A", centro: "centro 1" },
                              { id: 2, fecha: "12/03/2014", nombre: "Paperas", numDosis: 3, lote: "GHT4563FG", fechaCaducidad: "12/03/2024", laboratorio: "laboratorio B", centro: "centro 2" },
                              { id: 3, fecha: "16/02/2015", nombre: "Rotavirus", numDosis: 1, lote: "JK8HT5", fechaCaducidad: "16/02/2019", laboratorio: "laboratorio B", centro: "centro 2" },
                              { id: 4, fecha: "07/09/2017", nombre: "Varicela", numDosis: 1, lote: "KSJDL887CS", fechaCaducidad: "07/09/2027", laboratorio: "laboratorio C", centro: "centro 3" },
                              { id: 5, fecha: "31/07/2018", nombre: "Hepatitis A", numDosis: 1, lote: "BVBV877ACSVG5", fechaCaducidad: "31/07/2028", laboratorio: "laboratorio A", centro: "centro 4" },
                              { id: 6, fecha: "28/02/2020", nombre: "Tétanos", numDosis: 2, lote: "89SDABAHDGH5X7S", fechaCaducidad: "28/02/2031", laboratorio: "laboratorio D", centro: "centro 4" },
                            ]}
                            setTable={theContext.setTable}
                          />
                        </div>
                      </div>

                      {
                        theContext.toogleAddRowVaccines &&
                        <>
                          <div className="row p-1 mb-1 graycolor100 shadow-sm">
                            <div className="col-2 offset-md-1">
                              <DateElem_PB
                                elementID={"id_Fecha_administrada"}
                                orderInBlock={13}
                                labelElement={""}
                                required={true}
                                disabled={false}
                                response={[currentDate().Date_DD_MM_YY]}
                                placeholder={currentDate().Date_DD_MM_YY}
                                size={10}
                                position={{ rowElem: 1, colElem: 0 }}
                                width={2}
                                borderElement={true}
                                colorElement={"rgb(9, 9, 9)"}
                                fontSizeElement={"0.6rem"}
                                setDate={theContext.setDate}
                              />
                            </div>
                            <div className="col-2">
                              <SelectElement_PB
                                elementID={"id_selectVacuna"}
                                orderInBlock={4}
                                labelElement={""}
                                required={true}
                                disabled={false}
                                response={vacunas[3]}
                                placeholder={vacunas[0]}
                                size={1}
                                position={{ rowElem: 2, colElem: 0 }}
                                width={1}
                                borderElement={true}
                                colorElement={"rgb(9, 9, 9)"}
                                fontSizeElement={"0.6rem"}
                                optionsValues={vacunas}
                                setSelect={theContext.setSelect}
                              />
                            </div>
                            <div className="col-1">
                              <NumberElem_PB
                                elementID={"id_Number_numberDosis"}
                                orderInBlock={15}
                                labelElement={""}
                                required={true}
                                disabled={false}
                                response={[1]}
                                placeholder={0}
                                size={2}
                                position={{ rowElem: 2, colElem: 1 }}
                                width={1}
                                borderElement={true}
                                colorElement={"rgb(9, 9, 9)"}
                                fontSizeElement={"0.6rem"}
                                setNumber={theContext.setNumber}
                              />
                            </div>
                            <div className="col-1">
                              <TextElem_PB
                                elementID={"id_elem_lote"}
                                orderInBlock={1}
                                labelElement={""}
                                required={true}
                                disabled={false}
                                response={["GFT3452F"]}
                                placeholder={"Lote..."}
                                size={8}
                                position={{ rowElem: 2, colElem: 0 }}
                                width={2}
                                borderElement={true}
                                colorElement={"rgb(9, 9, 9)"}
                                fontSizeElement={"0.6rem"}
                                setText={theContext.setText}
                              />
                            </div>
                            <div className="col-2">
                              <DateElem_PB
                                elementID={"id_Fecha_caducidad"}
                                orderInBlock={13}
                                labelElement={""}
                                required={true}
                                disabled={false}
                                response={[currentDate().Date_DD_MM_YY]}
                                placeholder={currentDate().Date_DD_MM_YY}
                                size={10}
                                position={{ rowElem: 1, colElem: 0 }}
                                width={2}
                                borderElement={true}
                                colorElement={"rgb(9, 9, 9)"}
                                fontSizeElement={"0.6rem"}
                                setDate={theContext.setDate}
                              />
                            </div>
                            <div className="col-1">
                              <SelectElement_PB
                                elementID={"id_selectLaboratorio"}
                                orderInBlock={4}
                                labelElement={""}
                                required={true}
                                disabled={false}
                                response={vacunas[3]}
                                placeholder={vacunas[0]}
                                size={1}
                                position={{ rowElem: 2, colElem: 0 }}
                                width={1}
                                borderElement={true}
                                colorElement={"rgb(9, 9, 9)"}
                                fontSizeElement={"0.6rem"}
                                optionsValues={["Laboratorio 1", "Laboratorio 2", "Laboratorio 3", "Laboratorio 4", "Laboratorio 5", "Laboratorio 6", "Laboratorio 7"]}
                                setSelect={theContext.setSelect}
                              />
                            </div>
                            <div className="col-2">
                              <TextElem_PB
                                elementID={"id_elem_centro"}
                                orderInBlock={1}
                                labelElement={""}
                                required={true}
                                disabled={false}
                                response={["Centro 1"]}
                                placeholder={"Centro..."}
                                size={20}
                                position={{ rowElem: 2, colElem: 0 }}
                                width={2}
                                borderElement={true}
                                colorElement={"rgb(9, 9, 9)"}
                                fontSizeElement={"0.6rem"}
                                setText={theContext.setText}
                              />
                            </div>
                          </div>

                          <div className="row p-1 mb-1 graycolor100 shadow-sm">
                            <div className="col-10 offset-md-1">
                              <div class="btn-group" role="group" aria-label="Management Vaccines">
                                <button type="button" class="btn btn-sm btn-outline-danger me-2" onClick={() => setDeleteData()}>Borrar</button>
                                <button type="button" class="btn btn-sm btn-outline-success" onClick={(ev) => setAddVaccine(ev)}>Confirmar</button>
                              </div>
                            </div>
                          </div>
                        </>
                      }

                      <div className="row p-1 mb-1 graycolor100 shadow-sm">
                        <div className="col-4 offset-md-7">
                          <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-outline-success fw-bold mx-2"
                              onClick={(ev) => theContext.setToogleAddRowVaccines(!theContext.toogleAddRowVaccines)}
                            >
                              Anadir Vacuna
                            </button>
                            <button type="button" className="btn btn-outline-dark fw-bold mx-2"
                              onClick={(ev) => theContext.setViewVaccines(!theContext.toogleViewVaccines)}>
                              Listar Vacunas
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="row p-1 mb-1 graycolor100 shadow-sm">
                        <div className="col-2">
                          < SelectElement_PB
                            elementID={"id_elem_vacunaContrastada"}
                            orderInBlock={4}
                            labelElement={"Vacuna contrastada: "}
                            required={true}
                            disabled={false}
                            response={["SI"]}
                            placeholder={"SI"}
                            size={1}
                            position={{ rowElem: 2, colElem: 0 }}
                            width={2}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            optionsValues={["SI", "NO"]}
                            setSelect={theContext.setSelect}
                          />
                        </div>
                        <div className="col-2">
                          < SelectElement_PB
                            elementID={"id_elem_vacunado"}
                            orderInBlock={4}
                            labelElement={"Vacunado?: "}
                            required={true}
                            disabled={false}
                            response={["SI"]}
                            placeholder={"SI"}
                            size={1}
                            position={{ rowElem: 2, colElem: 0 }}
                            width={2}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            optionsValues={["SI", "NO"]}
                            setSelect={theContext.setSelect}
                          />
                        </div>
                        <div className="col-3 offset-md-1">
                          <DateElem_PB
                            elementID={"id_Fecha_inicCaducidad"}
                            orderInBlock={13}
                            labelElement={"Fecha de inicio de Caducidad: "}
                            required={true}
                            disabled={false}
                            response={[currentDate().Date_DD_MM_YY]}
                            placeholder={currentDate().Date_DD_MM_YY}
                            size={15}
                            position={{ rowElem: 1, colElem: 0 }}
                            width={3}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setDate={theContext.setDate}
                          />
                        </div>
                      </div>

                      <div className="row p-1 mb-1 graycolor100 shadow-sm">
                        <div className="col-4">
                          <DateElem_PB
                            elementID={"id_Fecha_inicSintomas"}
                            orderInBlock={13}
                            labelElement={"Fecha de inicio de los primeros sintomas: "}
                            required={true}
                            disabled={false}
                            response={[currentDate().Date_DD_MM_YY]}
                            placeholder={currentDate().Date_DD_MM_YY}
                            size={15}
                            position={{ rowElem: 1, colElem: 0 }}
                            width={4}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setDate={theContext.setDate}
                          />
                        </div>
                        <div className="col-3">
                          <DateElem_PB
                            elementID={"id_Fecha_diagnostico"}
                            orderInBlock={14}
                            labelElement={"Fecha de diagnostico: "}
                            required={true}
                            disabled={false}
                            response={[currentDate().Date_DD_MM_YY]}
                            placeholder={currentDate().Date_DD_MM_YY}
                            size={15}
                            position={{ rowElem: 1, colElem: 0 }}
                            width={3}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setDate={theContext.setDate}
                          />
                        </div>
                        <div className="col-2 offset-md-1">
                          <NumberElem_PB
                            elementID={"id_Number_AnyoEPI"}
                            orderInBlock={15}
                            labelElement={"Año EPI: "}
                            required={true}
                            disabled={false}
                            response={[2023]}
                            placeholder={2023}
                            size={1}
                            position={{ rowElem: 2, colElem: 1 }}
                            width={3}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setNumber={theContext.setNumber}
                          />
                        </div>
                        <div className="col-2">
                          <NumberElem_PB
                            elementID={"id_Number_semanaEPI"}
                            orderInBlock={16}
                            labelElement={"Semana EPI: "}
                            required={true}
                            disabled={false}
                            response={[15]}
                            placeholder={1}
                            size={1}
                            position={{ rowElem: 2, colElem: 1 }}
                            width={2}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setNumber={theContext.setNumber}
                          />
                        </div>
                      </div>

                      <div className="row p-1 mb-1 graycolor100 shadow-sm">
                        <div className="col-10 offset-md-1">
                          <AreaTextElem_PB
                            elementID={"id_observaciones"}
                            orderInBlock={17}
                            labelElement={"Observaciones: "}
                            required={true}
                            disabled={false}
                            response={[""]}
                            placeholder={"Observaciones..."}
                            row={4}
                            col={120}
                            position={{ rowElem: 2, colElem: 0 }}
                            width={10}
                            borderElement={true}
                            colorElement={"rgb(9, 9, 9)"}
                            fontSizeElement={"0.6rem"}
                            setAreaText={theContext.setAreaText}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default PrintFormInfo;
