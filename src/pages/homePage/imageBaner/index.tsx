import React from 'react'
import './styles.scss'
import googlePlayImage from './../../../assets/linkImage.png'
import googlePlayIcon from './../../../assets/google-play-icon.png'

export const ImageBaner = () => {
  return (
    <div className='imageBaner'>
      <div className='imageBaner__content'>
        <div className='imageBaner__content-info'>
          <div className='imageBaner__content-info-data'>
            15 użytkowników
          </div>
          <div className='imageBaner__content-info-data'>
            12 projektów
          </div>
        </div>
        <h1>Dołącz do reszty i pobierz aplikacjie</h1>
        {/* <img className='imageBaner__content-image' src={googlePlayImage}/> */}
        <div className='imageBaner__content-link'>
          <img src={googlePlayIcon} className='googlePlayicon'/>
          Pobierz ze sklepy play
        </div>
      </div>
    </div>
  )
}
