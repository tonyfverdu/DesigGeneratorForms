import React from 'react'
import { useNavigate } from 'react-router-dom'
// import My_Carousel from '../components/My_Carousel.jsx'
// import AlbumOfDay from '../components/Home/AlbumOfDay.jsx'
// import CustomAlbum from '../components/Home/CustomAlbum.jsx'

import '../../sass/pagesComponents/Home.scss'


function Home() {
  const logoISC = 'isc2Logo.jpeg'
  const navigate = useNavigate()

  function handlerPlayer() {
    navigate('/player', { replace: false })
  }


  return (
    <div className="contHome">
      <div className="contCarrousel">
        {/* <My_Carousel
          widthCarrousel={'1200px'}
          heightCarousel={'560px'}
        /> */}
      </div>
      <header className="contHeaderHome">
        <h4 className="contName">
          <span> Player Music </span>
          <figure className="figureLogo">
            <img className="imgLogo"
              src={`../src/assets/images/logos/${logoISC}`} alt={'Logo ISC'}
              onClick={handlerPlayer} />
          </figure>
        </h4>
      </header>
      <main className="contLeftOptions">
        <div className="contAlbumOfDay">
          {/* <AlbumOfDay
          /> */}
        </div>
        <div className="contCustomRecord">
          {/* <CustomAlbum
          /> */}
        </div>
        <figure>
          <div id="contFondo"></div>
        </figure>
      </main>
    </div>
  )
}

export default Home