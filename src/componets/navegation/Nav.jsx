import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MyScoreContext } from '../../context/MyContext.jsx'
import Navegation from './Navegation.jsx'
import { FaUserCircle, FaPlayCircle } from 'react-icons/fa'
import '../../sass/componentSass/navegation/Nav.scss'


function Nav() {
  const [togglePlay, setTogglePlay] = useState(false)
  // const { isLoggedin, nameOfUserLogin, currentSong, setIsPlaying } = useContext(MyScoreContext)
  const navigate = useNavigate()

  function handleClickLogin() {
    // if (!isLoggedin) {
    //   navigate(`/loginCustomer`, { replace: false })
    // } else if (isLoggedin) {
    //   navigate(`/loginCustomer`, { replace: false })
    // }
  }

  function handleClickPlay() {
    // setTogglePlay(!togglePlay)
    // if (!togglePlay) {
    //   setIsPlaying(false)
    //   navigate(`/loginCustomer`, { replace: false })
    // } else if (togglePlay) {
    //   if (isLoggedin) setIsPlaying(true)
    //   navigate('/player', { replace: false })
    // }
  }

  return (
    <div className="containerMenu">

      <div className="decriptionMenu">
        <nav className="navBar">
          <Navegation
          />
        </nav>
        <figure className="figureContainer">
          <img id="imgLogo1" src="../src/assets/logos/isc2Logo.jpeg" alt="Logo ISC 2" />
          <img id="imgLogo2" src="../src/assets/logos/logoISC.jpg" alt="Logo ISC 1" />
        </figure>
      </div>


      {/* <div className={`contRegisterCustormer ${(nameOfUserLogin === undefined || nameOfUserLogin === "Login") ? 'redColorCont' : 'greenColorCont'}`} onClick={handleClickLogin}>
        <i className={`iconCustomer ${(nameOfUserLogin === undefined || nameOfUserLogin === "Login") ? 'redColor' : 'greenColor'}`}>
          <FaUserCircle />
        </i>
        <span className='textRegisterCustomer'>
          {nameOfUserLogin}
        </span>
      </div>
      <div className={`contRegisterPlayMusic ${(nameOfUserLogin === undefined || nameOfUserLogin === "Login") ? 'redColorCont' : 'greenColorCont'}`} onClick={handleClickPlay}>
        <i className={`iconPlay ${(nameOfUserLogin === undefined || nameOfUserLogin === "Login") ? 'redColor' : 'greenColor'}`}>
          <FaPlayCircle />
        </i>
        {isLoggedin ? <span className='textPlay'>
          {currentSong.title}
        </span>
          : <span className='textRegisterCustomer'>
            {messagePlayMusic.istNotPlay}
          </span>
        }
      </div> */}

    </div >
  )
}

export default Nav
