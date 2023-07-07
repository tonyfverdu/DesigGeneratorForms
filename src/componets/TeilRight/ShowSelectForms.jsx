import { useContext } from 'react'
import { MyContext } from '../../context/TheContext';


function ShowSelectForms() {
  const theContext = useContext(MyContext)

  return (
    <>
      {theContext.toggleJSONEingaben &&
        <div className="contJSONOfInput " >
          <header className='headerJSONInput'>
            <h4 className='titleJSONInput'>JSON Eingaben von Formulardaten</h4>
          </header>
          <div className="contJSON">
            <p>{theContext.JSONEingabenForm}</p>
          </div>
        </div>
      }
    </>
  )
}

export default ShowSelectForms;