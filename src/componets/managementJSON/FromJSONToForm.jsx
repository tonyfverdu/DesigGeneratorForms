import { useState, useEffect, useContext } from 'react'
import { MyContext } from '../../context/TheContext.jsx'
import listFormsData from './listFormsData.js'
import form_enf_0001 from '../../Data/JSONFormDataObj_01.js'
import ShowSelectForms from '../TeilRight/ShowSelectForms.jsx'


function FromJSONToForm() {
  const theContext = useContext(MyContext)

  const [form, setForm] = useState("")
  const [deleteForm, setDeleteForm] = useState(false)

  let arrayOfComponentsInForm = []

  //  NO SE SI QUITARLO, ME ESTOY ASEGURANDO DE QUE LA VARIABLE "form" TIENE EL ID DEL FORMULATRIO CARGADO, PERO NO SE
  // useEffect(()=> {
  //   setForm(theContext.valueOfForm)
  //   console.log("Form id:  ", form.id_Form)
  // }, [theContext.valueOfForm])

  useEffect(() => {
    switch (theContext.valueOfForm) {
      case listFormsData.id_Form:
        setForm(form_enf_0001);
        break;
      // case formulars.form2:
      //   setForm(formDataJSON_8Special);
      //   break;
      // case formulars.form3:
      //   setForm(formDataJSON_9);
      //   break;
      // case formulars.form4:
      //   setForm(formDataJSON_10);
      //   break;
      // case formulars.form5:
      //   setForm(formDataJSON_11);
      //   break;
      default:
        break;
    }
    theContext.setJSONAusgabenForm("")
    // theContext.setToggleJSONEingaben(!theContext.toggleJSONEingaben)
  }, [theContext.valueOfForm])

  //  I.-  Funktion "kovertierenAllesZuJSON": um alle Daten aus dem dynamischen Formular zu extrahieren und in eine JSON-String 
  //                                          zu konvertieren.
  function kovertierenAllesZuJSON(ev) {
    theContext.setJSONAusgabenDaten("")
    //  1.-  Ein Objekt "FormData" instanzieren
    const dataVonFormular = new FormData(ev.target)

    //  2.-  Erstellen Sie ein "Objekt-JS", das alle Daten des zu übermittelnden Formulars enthält.
    const allesParKey_ValueVonFormular = Object.fromEntries(dataVonFormular.entries())

    //  3.- Das letzte Objekt in eine JSON-Zeichenfolge umwandeln
    const aufgabenJSONFormular = JSON.stringify(allesParKey_ValueVonFormular)

    //  4.- Laden der JSON-Ausgabe mit den Daten aus dem erhaltenen JSON-String
    theContext.setJSONAusgabenDaten(aufgabenJSONFormular)

    return theContext.aufgabenJSONFormular
  }

  //  II.-  Function von "submit" die Formular-Daten, erste konvertieren in JSON-String
  function handleFormDynSubmit(ev) {
    ev.preventDefault();
    kovertierenAllesZuJSON(ev)
  }

  //  III.-  Anzeige des erstellten Formulars, im valueOfForm haben wir das Formular anzueigen
  function handleJSONView() {
    console.log('Formulario:  ', form)
    theContext.setJSONEingabenForm(JSON.stringify(form))
    theContext.setValueOfForm(form.id_Form)
    theContext.setToggleJSONEingaben(!theContext.toggleJSONEingaben)
  }

  // VI.-  Funktion, das löscht die Daten
  function handleButtonDeleteFormDyn(ev) {
    setDeleteForm(!deleteForm)
    console.log('deleteForm:  ', deleteForm)
  }


  //  ==>>  ESTA FUNCION HAY QUE REFACTORIZAR Y VER QUE HACE   <<==  ////////////////////////////////////////////

  function showForm() {
    arrayOfComponentsInForm = []
    let cont = 0;

    // form.blocks.map(block => console.log(block))

    // form.blocks.components.forEach(element => {
    //   console.log("element:  ", element)


    //   // if (element.tipo === 'Lista') {
    //   //   arrayOfComponentsInForm.push(
    //   //     Select(`selectName_${cont + 1}`, element.texto, element.obligatorio, element.defecto, element.respuesta, `selectId_${cont + 1}`, element.valores)
    //   //   )
    //   // } else if (element.tipo === 'Texto') {
    //   //   const [valueOfText, setValueInText] = useState(element.defecto)
    //   //   arrayOfComponentsInForm.push(
    //   //     Text(`text_${cont + 1}`, element.texto, element.obligatorio, element.respuesta, element.defecto, element.tamanyo, `text_${cont + 1}`,
    //   //       valueOfText, setValueInText)
    //   //   )
    //   // }
    //   // else if (element.tipo === 'Numero') {
    //   //   arrayOfComponentsInForm.push(
    //   //     Number(`number_${cont + 1}`, element.texto, element.obligatorio, element.respuesta, element.defecto, element.tamanyo, `number_${cont + 1}`)
    //   //   )
    //   // }
    //   cont++;


    // })

    return arrayOfComponentsInForm;
  }

  function Select(parName, parNameElement, ParRequired, parDefaultValue, ParResponse, parId, parArrayValues) {
    return (
      <SelectElement
        name={parName}
        id_Element={parId}
        textoLabel={parNameElement}
        defaultValue={parDefaultValue}  // defaultValue={parArrayValues[0]}
        disabled={ParRequired}
        response={ParResponse}
        arrayValues={parArrayValues}
      />
    )
  }

  function Text(parName, parNameElement, parRequired, ParResponse, ParPlaceholder, parSize, parID, valueOfText, setValueOfText) {
    return (
      <TextElement
        name={parName}
        labelElement={parNameElement}
        elementRequired={parRequired}
        response={ParResponse}
        placeholder={ParPlaceholder}
        size={parSize}
        id_Element={parID}
        valueOfText={valueOfText}
        setValueOfText={setValueOfText}
      />
    )
  }

  function Number(parName, parNameElement, parRequired, parResponse, parDefaultValue, parSize, parID) {
    return (
      <NumberElement
        name={parName}
        labelElement={parNameElement}
        elementRequired={parRequired}
        response={parResponse}
        placeholder={parDefaultValue}
        size={parSize}
        id_Element={parID}
      />
    )
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  return (
    <>
      {
        theContext.toggleJSONEingaben &&
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center mt-1">
          <div className="container-fluid shadow-sm d-flex flex-row justify-content-start align-items-center p-1 mb-2">
            <header className='container-fluid mx-auto p-2 my-1 bg-light'>
              <h5 className='titleFormMain h-5 fw-bold text-sm-start text-capitalize text-secondary '>
                Dynamic
                <span className="badge fw-bolder p-2 bg-success mx-2">
                  Forms
                </span>
                Selection
              </h5>
            </header>
          </div>

          <ShowSelectForms />

        </div>
      }

      < div className="contFormDynamic" >
        <header className='headerFormDynamic'>
          <h4 className='titleFormDynamic'>Dynamic Forms: <span>"{form.descripcion}"</span></h4>
        </header>
        <form id="formDynamic" className="formDynamic" onSubmit={ev => handleFormDynSubmit(ev)}>
          {/* {showForm().map((elem, index) => {
            return <span key={index}>{elem}</span>
          })} */}

          {/* {form.blocks.map(block => { 
            block.components.map(elem => console.log(elem.id_Element))
          })} */}
           


          <div className="contButtonsFormDynamic">
            {/* <ButtonKlein
              handleButton={handleButtonDeleteFormDyn}
              text={'Delete'}
              parW={'4rem'}
              parH={'2rem'}
              parFS={'0.7rem'}
            />
            <ButtonKlein
              handleButton={(ev) => theContext.handleButtonSubmitFormDyn(ev)}
              text={'Submit'}
              parW={'4rem'}
              parH={'2rem'}
              parFS={'0.7rem'}
            /> */}
          </div>
        </form>
      </div >

    </>
  )


  // <div className="contJSONOfExit" >
  //     <header className='headerJSONExit'>
  //         <h4 className='titleJSONExit'>JSON Ausgaben von Formulardaten</h4>
  //     </header>
  //     <div className="contJSON">
  //         <p>{JSONAusgabeDaten}</p>
  //     </div>
  // </div>  

}

export default FromJSONToForm;