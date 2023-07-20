import { useState, useContext, useRef } from 'react'
import { MyContext } from '../../context/TheContext.jsx'
import ShowElements from '../TeilLeft/ShowElements.jsx'
import ListDataElement from './ListDataElement.jsx'
import '../../sass/componentSass/elementsForms/MasterElem_PB.scss'

function MasterElem_PB({ comp, id_Element, type_Element, placeholder, width, disabled = false }) {
  const arrayOfList = [
    { color: "primary", fontSize: "0.64rem", title: "Id:", value: comp.id_Element },
    { color: "success", fontSize: "0.64rem", title: "Title:", value: comp.title_Element },
    { color: "primary", fontSize: "0.64rem", title: "Type of element:", value: comp.type_Element },
    { color: "success", fontSize: "0.64rem", title: "Label:", value: comp.label_Element },
    { color: "primary", fontSize: "0.64rem", title: "Placeholder:", value: comp.placeholder },
    { color: "success", fontSize: "0.64rem", title: "Order in block::", value: comp.orderInBlock },
  ]
  const [toogleActiv, setToogleActiv] = useState(false)

  const refElement = useRef(null)
  const theContext = useContext(MyContext)

  function handleBtnMaster(ev) {  //  Lo que debe hacer es:  
    //  coger los datos de este elemento 
    //  pasarlo a componente activo del contexto 
    //  sacar la informacion en la pantalla de informacion de componente de la izquierda
    ev.preventDefault()
    const element = ev.target.dataset
    console.log("element seleccionado =>  ev.target.dataset: ", element)
    setToogleActiv(!toogleActiv)
  }


  return (
    <div className="container-fluid d-flex flex-row justify-content-center align-items-center m-0 p-0 graycolor300"
      onClick={(ev) => handleBtnMaster(ev)} >
      {
        toogleActiv ?
          <ListDataElement
            TitleList={"Component Data"}
            fontSize={"0.68rem"}
            arrayOfLines={arrayOfList}
          />
          :
          <div className="contMasterElement_PB container-fluid d-flex flex-row justify-content-start align-items-center m-0 p-1 " >
            <label ref={refElement} id={id_Element}
              className="buttonMasterElem d-flex flex-row justify-content-start align-items-center m-0 p-1"
              required disabled={disabled} value={placeholder} data-row="0" data-col="0" data-width={width}>
              {placeholder}
            </label>
          </div>
      }
    </div>
  )
}

export default MasterElem_PB;


