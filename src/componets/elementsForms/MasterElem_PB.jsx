import { useState, useContext, useRef } from 'react'
import { MyContext } from '../../context/TheContext.jsx'
import ShowElements from '../TeilLeft/ShowElements.jsx'
import '../../sass/componentSass/elementsForms/MasterElem_PB.scss'

function MasterElem_PB({ elementID, placeholder, width }) {
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
    <div className="container-fluid d-flex flex-row justify-content-start align-items-start m-0 p-0"
      onClick={(ev) => handleBtnMaster(ev)} >
      {
        toogleActiv ?
          <ShowElements />
          :
          <div className="contMasterElement_PB container-fluid d-flex flex-row justify-content-start align-items-center m-0 p-1 
        border border-1 border-secondary"  >
            <label ref={refElement} id={elementID}
              className="buttonMasterElem d-flex flex-row justify-content-start align-items-center m-0 p-1"
              required="true" disabled="false" value={placeholder} data-row="0" data-col="0" data-width={width}>
              {placeholder}
            </label>
          </div>
      }
    </div >
  )
}

export default MasterElem_PB;
