import { useContext } from 'react'
import { MyContext } from '../../context/TheContext'
import Row from './Row'
import '../../sass/componentSass/TeilRight/NewRow.scss'


function NewRow() {
  const theContext = useContext(MyContext)

  return (
    <div className="row container-fluid m-0 p-0 border border-body rounded my-2" >
      <div className="col container-fluid p-1">
        <Row />
      </div>
    </div >
  )
}

export default NewRow;