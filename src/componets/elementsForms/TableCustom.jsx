import { useState, useEffect, useContext, useRef } from 'react'
import { MyContext } from '../../context/TheContext.jsx'
import DateElem_PB from './DateElem_PB.jsx'

import currentDate from '../../functions/currentDate.js'


function TableCustom({ id_Element, orderInBlock, required, disabled, position, width, borderTable, colorTable, farbeTable,
  fontSizeTableHead, fontSizeBodyTable, titlesHeadsTable, tableData, setTable }) {
  // const datosVacunacion = {
  //   tablaVacunas: {
  //     arrayCabeceraTabla: ["Fecha Administrada", "Nombre de la vacuna", "N° dosis", "Lote", "Fecha de Caducidad", "Laboratorio", "Centro"],
  //     listaElements: [
  //       { fecha: "01/10/2010", nombre: "Sarampión", numDosis: 1, lote: "AF35V", fechaCaducidad: "12/12/2030", laboratorio: "laboratorio A", centro: "centro 1" },
  //       { fecha: "12/03/2014", nombre: "Paperas", numDosis: 3, lote: "GHT4563FG", fechaCaducidad: "12/03/2024", laboratorio: "laboratorio B", centro: "centro 2" },
  //       { fecha: "16/02/2015", nombre: "Rotavirus", numDosis: 1, lote: "JK8HT5", fechaCaducidad: "16/02/2019", laboratorio: "laboratorio B", centro: "centro 2" },
  //       { fecha: "07/09/2017", nombre: "Varicela", numDosis: 1, lote: "KSJDL887CS", fechaCaducidad: "07/09/2027", laboratorio: "laboratorio C", centro: "centro 3" },
  //       { fecha: "31/07/2018", nombre: "Hepatitis A", numDosis: 1, lote: "BVBV877ACSVG5", fechaCaducidad: "31/07/2028", laboratorio: "laboratorio A", centro: "centro 4" },
  //       { fecha: "28/02/2020", nombre: "Tétanos", numDosis: 2, lote: "89SDABAHDGH5X7S", fechaCaducidad: "28/02/2031", laboratorio: "laboratorio D", centro: "centro 4" },
  //     ]
  //   }
  // }

  const theContext = useContext(MyContext)
  const [toggleVacunas, setToggleVacunas] = useState(theContext.toogleViewVaccines)
  const [toggleAddVaccines, setToogleAddVaccines] = useState(false)
  const [farbeTableHead, setFarbeTableHead] = useState("table-success")
  const [farbeTableBody, setFarbeTableBody] = useState("table-success")

  const [toggleAddRow, setToggleRow] = useState(false)

  useEffect(() => {
    switch (colorTable) {
      case "yellow":
        setFarbeTableHead("table-warnig")
        break
      case "red":
        setFarbeTableHead("table-danger")
        break
      case "green":
        setFarbeTableHead("table-success")
        break;
      case "blue":
        setFarbeTableHead("table-primary")
        break
      case "grey":
        setFarbeTableHead("table-secondary")
        break
      case "black":
        setFarbeTableHead("table-dark")
        break

      default:
        break;
    }

    switch (farbeTable) {
      case "yellow":
        setFarbeTableBody("table-warnig")
        break
      case "red":
        setFarbeTableBody("table-danger")
        break
      case "green":
        setFarbeTableBody("table-success")
        break;
      case "blue":
        setFarbeTableBody("table-primary")
        break
      case "grey":
        setFarbeTableBody("table-secondary")
        break
      case "black":
        setFarbeTableBody("table-dark")
        break

      default:
        break;
    }
  }, [])

  useEffect(() => {
    setToggleVacunas(theContext.toogleViewVaccines)
    setToogleAddVaccines(theContext.toogleAddRowVaccines)

  }, [theContext.toogleViewVaccines])


  return (
    <>
      {
        toggleVacunas &&

        < table id={id_Element} className="table table-sm table-borderless table-striped table-hover table-responsive" required={required}
        >
          <thead className={farbeTableHead} >
            <tr className="fw-light text-center" style={{ fontSize: fontSizeTableHead }}>
              {
                titlesHeadsTable.map(title => {
                  return <th key={title.id} scope="col">{title}</th>
                })
              }
            </tr>
          </thead>

          <tbody className={farbeTableBody}>
            {
              tableData.map(elem => {
                return (
                  <tr key={elem.id} style={{ fontSize: fontSizeBodyTable }}>
                    <td scope="row" className="text-center align-middle">
                      {elem.fecha}
                    </td>

                    <td scope="row" className="text-center align-middle">
                      {elem.nombre}
                    </td>

                    <td scope="row" className="text-center align-middle">
                      {elem.numDosis}
                    </td>

                    <td scope="row" className="text-left align-middle">
                      {elem.lote}
                    </td>

                    <td scope="row" className="text-left align-middle">
                      {elem.fechaCaducidad}
                    </td>

                    <td scope="row" className="text-left align-middle">
                      {elem.laboratorio}
                    </td>

                    <td scope="row" className="text-left align-middle">
                      {elem.centro}
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      }
       

      {/* //  Table */}
      {/* <TableElem_PB
        id_Element={"id_customTable"}
        orderInBlock={2}
        required={true}
        disabled={false}
        position={{ rowElem: 2, colElem: 0 }}
        width={12}
        borderTable={true}
        colorTable={"green"}
        fontSizeTableHead={"0.7rem"}
        fontSizeBodyTable={"0.6rem"}
        titlesHeadsTable={datosVacunacion.tablaVacunas.arrayCabeceraTabla}
        tableData={datosVacunacion.tablaVacunas.listaElements}
        setTable={theContext.setTable}
        toogleResponsive={toggleVacunas}
        toogleAddRow={toggleAddRow}
      />

      {toggleAddRow &&
        <div className="col-12">
          <div className="container row gx-0 mb-4 mx-1">
            <div className="col-11 offset-md-8 ">
              <div class="btn-group" role="group" aria-label="Management Vaccines">
                <button type="button" class="btn btn-sm btn-outline-danger me-2" value={toggleAddRow} onClick={() => setDeleteData()}>Borrar</button>
                <button type="button" class="btn btn-sm btn-outline-success" value={toggleVacunas} onClick={(ev) => setAddVaccine(ev)}>Confirmar</button>
              </div>
            </div>
          </div>
        </div>
      } */}
    </>
  )
}

export default TableCustom;

/*

  const {tablaVacunas, vacunaContrastada, fechaInicSintomas,
    fechaDiagnostico, anyoEPI, semanaEPI, observaciones } = datosVacunacion;


   <DatosDeVacunacion
                    casoVacunacion={casoVacunacion}
                    vacunado={vacunado}
                    fechaVacunacion={fechaVacunacion}
                    numDosis={numDosis}
                    presentaDocumento={presentaDocumento}
                    tablaVacunas={tablaVacunas}
                    vacunaContrastada={vacunaContrastada}
                    fechaInicSintomas={fechaInicSintomas}
                    fechaDiagnostico={fechaDiagnostico}
                    anyoEPI={anyoEPI}
                    semanaEPI={semanaEPI}
                    observaciones={observaciones}
                  />
*/

/*
import React, { useState } from 'react'
import NumberElement_PB from '../pureBoostrap/NumberElement_PB'
import DateElement_PB from '../pureBoostrap/DateElement_PB'
import AreaTextElement_PB from '../pureBoostrap/AreaTextElement_PB'
import SelectElement_PB from '../pureBoostrap/SelectElement_PB'
import TableElement_PB from '../pureBoostrap/TableElement_PB'


function DatosDeVacunacion({ casoVacunacion, vacunado, fechaVacunacion, numDosis, presentaDocumento, tablaVacunas, vacunaContrastada,
  fechaInicSintomas, fechaDiagnostico, anyoEPI, semanaEPI, observaciones }) {
  const labelAndText = {
    observacionesLabel: "Observaciones"
  }

  const [toggleVacunas, setToggleVacunas] = useState(false)
  const [toggleAddVaccines, setToogleAddVaccines] = useState(false)

  const [toggleAddRow, setToggleRow] = useState(false)

  const [valueOfCaso, setValueOfCaso] = useState(casoVacunacion[0])
  const [valueOfVacunado, setValueOfVacunado] = useState(vacunado[1])
  const [valueOfFechaVacunacion, setValueOfFechaVacunacion] = useState(fechaVacunacion)
  const [valueOfNumDosis, setValueOfNumDosis] = useState(numDosis)
  const [valueOfPresentaDocumento, setValueOfPresentaDocumento] = useState(presentaDocumento[0])

  const [valueOfVacunaContrastada, setValueOfVacunaContrastada] = useState(vacunaContrastada[0])
  const [valueOfVacunado2, setValueOfVacunado2] = useState(vacunaContrastada["Vacuna Contrastada"][1])
  const [valueOfFechaVacunacionContrastada, setValueOfFechaVacunacionContrastada] = useState(vacunaContrastada["fechaVacunacionContrastada"])


  const [valueOfFechaInicSintomas, setValueOfFechaInicSintomas] = useState(fechaInicSintomas)
  const [valueOfFechaDiagnostico, setValueOfFechaDiagnostico] = useState(fechaDiagnostico)
  const [valueOfAnyoEPI, setValueOfAnyoEPI] = useState(anyoEPI)
  const [valueOfSemanaEPI, setValueOfSemanaEPI] = useState(semanaEPI)
  const [valueOfObservaciones, setValueOfObservaciones] = useState(observaciones)

  function setDeleteData() {
    console.log("Borrando datos")
  }

  function setAddVaccine() {
    console.log("Add Vaccine")
  }


  return (
    <section className="container-fluid d-flex flex-wrap justify-content-start align-items-center my-1 py-1 gx-1 border border-2 
    border-dark-subtle border-opacity-75 rounded" >
      <div className="container row gx-1 mb-4 ms-1">
        <div className="col-12 col-md-4">
          <SelectElement_PB
            selectTextLabel={"Caso"}
            required={true}
            disabled={false}
            response={[casoVacunacion[0]]}
            optionsValues={casoVacunacion}
            setValue={setValueOfCaso}
          />
        </div>
        <div className="col-12 col-md-3">
          <SelectElement_PB
            selectTextLabel={"Ha recibido vacuna?"}
            required={true}
            disabled={false}
            response={[vacunado[0]]}
            optionsValues={vacunado}
            setValue={setValueOfVacunado}
          />
        </div>
        <div className="col-12 col-md-3">
          <DateElement_PB
            name={`name_${fechaVacunacion}`}
            labelElement={"Fecha de Vacunación"}
            elementRequired={true}
            response={"2023-04-01"}
            placeholder={"2023-01-01"}
            id_Element={`id_${fechaVacunacion}`}
            valueOfDate={valueOfFechaVacunacion}
            setValueOfDate={setValueOfFechaVacunacion}
          />
        </div>
        <div className="col-12 col-md-2">
          <NumberElement_PB
            name={`name_${"NumDosis"}`}
            labelElement={"N°Dosis"}
            elementRequired={true}
            response={[1]}
            placeholder={0}
            size={2}
            id_Element={`id_${"NumDosis"}`}
            valueOfNumber={valueOfNumDosis}
            setValueOfNumber={setValueOfNumDosis}
          />
        </div>
        <div className="col-12 col-md-6">
          <SelectElement_PB
            selectTextLabel={"Presenta documento de vacunación?"}
            required={true}
            disabled={false}
            response={[presentaDocumento[0]]}
            optionsValues={presentaDocumento}
            setValue={setValueOfPresentaDocumento}
          />
        </div>
      </div>

      <div className="container row gx-0 mb-0 mx-1">
        <div className="col-12 ps-1">
          <TableElement_PB
            tabla={tablaVacunas}
            toogleResponsive={toggleVacunas}
            toogleAddRow={toggleAddRow}
          />
        </div>
        {toggleAddRow &&
          <div className="col-12">
            <div className="container row gx-0 mb-4 mx-1">
              <div className="col-11 offset-md-8 ">
                <div class="btn-group" role="group" aria-label="Management Vaccines">
                  <button type="button" class="btn btn-sm btn-outline-danger me-2" value={toggleAddRow} onClick={() => setDeleteData()}>Borrar</button>
                  <button type="button" class="btn btn-sm btn-outline-success" value={toggleVacunas} onClick={(ev) => setAddVaccine(ev)}>Confirmar</button>
                </div>
              </div>
            </div>
          </div>
        }

      </div>

      <div className="container row gx-0 mb-4 mx-1">
        <div className="col-11 offset-md-8 ">
          <div class="btn-group" role="group" aria-label="Management Vaccines">
            <button type="button" class="btn btn-sm btn-outline-primary me-2" value={toggleAddRow} onClick={() => setToggleRow(!toggleAddRow)}>Anadir Vacuna</button>
            <button type="button" class="btn btn-sm btn-outline-dark" value={toggleVacunas} onClick={() => setToggleVacunas(!toggleVacunas)}>Listar Vacunas</button>
          </div>
        </div>
      </div>

      <div className="container row gx-1 mb-2 bg-light">
        <div className="col-12 col-lg-4 ps-1">
          <SelectElement_PB
            selectTextLabel={"Vacuna Contrastada:"}
            required={true}
            disabled={false}
            response={[vacunaContrastada["Vacuna Contrastada"][1]]}
            optionsValues={vacunaContrastada["Vacuna Contrastada"]}
            setValue={setValueOfVacunaContrastada}
          />
        </div>
        <div className="col-12 col-lg-4">
          <SelectElement_PB
            selectTextLabel={"Vacunado:"}
            required={true}
            disabled={false}
            response={[vacunaContrastada["vacunado"][1]]}
            optionsValues={vacunaContrastada["vacunado"]}
            setValue={setValueOfVacunado2}
          />
        </div>
        <div className="col-12 col-lg-4">
          <DateElement_PB
            labelElement={"Fecha de inicio de Caducidad:"}
            elementRequired={true}
            response={["01-02-2023"]}
            placeholder={vacunaContrastada.fechaVacunacionContrastada}
            id_Element={`id_${vacunaContrastada.fechaVacunacionContrastada}`}
            valueOfDate={valueOfFechaVacunacionContrastada}
            setValueOfDate={setValueOfFechaVacunacionContrastada}
          />
        </div>
      </div>

      <div className="container row gx-1 mb-2 ms-1">
        <div className="col-6 col-lg-4">
          <DateElement_PB
            labelElement={"Fecha de inicio de los primeros sintomas"}
            elementRequired={true}
            response={["01-02-2023"]}
            placeholder={fechaInicSintomas}
            id_Element={`id_${fechaInicSintomas}`}
            valueOfDate={valueOfFechaInicSintomas}
            setValueOfDate={setValueOfFechaInicSintomas}
          />
        </div>
        <div className="col-6 col-lg-4">
          <DateElement_PB
            labelElement={"Fecha de diagnostico"}
            elementRequired={true}
            response={["01-02-2023"]}
            placeholder={fechaDiagnostico}
            id_Element={`id_${fechaDiagnostico}`}
            valueOfDate={valueOfFechaDiagnostico}
            setValueOfDate={setValueOfFechaDiagnostico}
          />
        </div>
        <div className="col-6 col-lg-2">
          <NumberElement_PB
            labelElement={"Año EPI"}
            elementRequired={true}
            response={[2017]}
            placeholder={2023}
            size={4}
            id_Element={`id_${anyoEPI}`}
            valueOfNumber={valueOfAnyoEPI}
            setValueOfNumber={setValueOfAnyoEPI}
          />
        </div>
        <div className="col-6 col-lg-2">
          <NumberElement_PB
            labelElement={"Semana EPI"}
            elementRequired={true}
            response={[20]}
            placeholder={15}
            size={2}
            id_Element={`id_${semanaEPI}`}
            valueOfNumber={valueOfSemanaEPI}
            setValueOfNumber={setValueOfSemanaEPI}
          />
        </div>

      </div>
      <div className="container row gx-1 mb-2 ms-1">
        <div className="col-10 ps-1">
          <AreaTextElement_PB
            labelElement={labelAndText.observacionesLabel}
            elementRequired={true}
            response={[""]}
            disabled={false}
            readonly={false}
            placeholder={"Escriba sus observaciones ..."}
            row={2}
            cols={18}
            resize={false}
            id_Element={`idAreaText_${labelAndText.observacionesLabel}`}
            valueOfAreaText={valueOfObservaciones}
            setValueOfAreaText={setValueOfObservaciones}
          />
        </div>
      </div>
    </section>
  )
}

export default DatosDeVacunacion;

*/