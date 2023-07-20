import { useContext } from 'react'
import { MyContext } from '../context/TheContext'


function ButtonSelectOptions({ typeButton, role, arialLabelA, arialLabelB, options, colors }) {
  const theContext = useContext(MyContext)

  return (
    <div className="col d-flex justify-content-end align-items-center" >
      <div className="btn-toolbar" role="toolbar" aria-label={arialLabelA}>
        <div className="btn-group-sm" role={role} aria-label={arialLabelB}>
          {
            options.map((opt, index) => {
              //  gbtn1_0 ==> read, gbtn1_1 ==> create, gbtn1_2 ==> modify
              return (
                <button key={index} type={typeButton} className={`btn ${colors[index]} text-white-emphasis fw-bold mx-1`}
                  disabled={theContext.tooRead ? true : false} >
                  {opt}
                </button>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ButtonSelectOptions;
