import { useContext } from 'react'
import { MyContext } from '../../context/TheContext.jsx';
import Row from './Row.jsx';
import { useEffect } from 'react';


function RowIni() {
  const theContext = useContext(MyContext)

  useEffect(()=> {
    theContext.setArrayRows([...theContext.arrayRows, theContext.arrayRows.length])
    console.log("arrayRows:  ", theContext.arrayRows)
  }, [])

  return (
    <div className="col-1 m-0 mb-4 p-0 ">
      <Row />
    </div>
  )
}

export default RowIni;