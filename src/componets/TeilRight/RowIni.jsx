import { useContext } from 'react'
import { MyContext } from '../../context/TheContext';
import NewRow from './NewRow'


function RowIni() {
  const theContext = useContext(MyContext)

  return (
    <NewRow />
  )
}

export default RowIni;