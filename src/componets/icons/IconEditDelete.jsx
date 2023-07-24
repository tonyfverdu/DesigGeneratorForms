import { useRef } from 'react'
import { MdModeEdit, MdDeleteForever } from 'react-icons/md'
import { IconContext } from "react-icons";
import '../../sass/componentSass/icons/IconEditDelete.scss'


function IconEditDelete({ deleteComponent, refElementDiv }) {

  // function deleteComponent() {
  //   refElementDiv.current.remove()
  // }

  return (
    <div className="contIconsEditDelete d-flex flex-row justify-content-center align-items-center gap-3 m-0 px-2 bg-body border 
      border-1 border-secondary rounded-pill" >
      <IconContext.Provider value={{ color: "rgba(251, 182, 53, 0.9)", size: "1rem", className: "contIcon" }}>
        <div className="d-flex flex-row justify-content-center align-items-center m-0 p-0">
          <MdModeEdit />
        </div>
      </IconContext.Provider>
      <IconContext.Provider value={{ color: "rgba(250, 29, 29, 0.9)", size: "1rem", className: "contIcon" }}>
        <div className="d-flex flex-row justify-content-center align-items-center m-0 p-0"
          onClick={() => deleteComponent(refElementDiv)}>
          <MdDeleteForever />
        </div>
      </IconContext.Provider>
    </div>
  )
}

export default IconEditDelete;