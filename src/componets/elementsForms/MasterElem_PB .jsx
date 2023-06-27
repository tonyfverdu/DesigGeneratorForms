import { useState, useContext } from 'react'
import { MyContext } from '../../context/TheContext.jsx'
import '../../sass/componentSass/elementsForms/MasterElem_PB.scss'


function MasterElem_PB({ elementID, placeholder }) {
  const [actionBtn, setActionBtn] = useState("")
  const [toogleActiv, setToogleActiv] = useState(false)
  const [positionElem, setPositionElem] = useState({ row: 0, col: 0 })

  const theContext = useContext(MyContext)

  function handleBtnMaster(ev) {  //  Lo que debe hacer es:  
    //  coger los datos de este elemento 
    //  pasarlo a componente activo del contexto 
    //  sacar la informacion en la pantalla de informacion de componente de la izquierda

    ev.preventDefault()
    const element = ev.target.dataset
    setPositionElem(element)
    console.log("element seleccionado:  ", element)
    
    const x = positionElem.col
    const y = positionElem.row
    // console.log('Position of element is  x: ', x, " y: ", y)
    setToogleActiv(!toogleActiv)
  }


  return (
    <div className="contMasterElement_PB form-group container-fluid d-flex flex-row justify-content-start align-items-center m-0 p-1 
    border border-1 border-secondary" >
      <input type="button" id={elementID} className="buttonMasterElem d-flex flex-row justify-content-start align-items-center m-0 p-1"
        required="true" disabled="false" value={placeholder} onClick={(ev) => handleBtnMaster(ev)}
        data-row="0" data-col="0" />
    </div>
  )
}

export default MasterElem_PB;