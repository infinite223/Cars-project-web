import React, { useState } from 'react'
import './styles.scss'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import project_image from '../../assets/project_image.jpg'
import addProject from '../../assets/addProject.jpg'
import spot_image from '../../assets/spot_image.jpg'


import { SlArrowLeft, SlArrowRight  } from 'react-icons/sl'

const buttonStyle = {
 padding:'20px'
};

const proprietes = {
  duration: 7000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  prevArrow: <SlArrowLeft size={25} style={buttonStyle}/>,
  nextArrow: <SlArrowRight size={25} style={buttonStyle}/>
}

export const LookApp:React.FC<{}> = () => {
  const [activeSlide, setActiveSlide] = useState(2)

  const headers = [
    'Dodawaj projekty',
    'Dołączaj do spotów',
    'Przeglądaj projekty'

  ]

  const texts = [
    'Bezpłatnie dodawaj projekty i pokazuj innym co udało Ci się uzyskać',
    'łącz się z innymi, twórz, dołączaj i zapraszaj luczi do wspólnych motoryzacyjnych spotkań',
    'Przeglądaj sworzone projekty przez użytkowników aplikacji w jednym miejscu',
  ];

  const images = [project_image, addProject, spot_image]

  console.log(activeSlide)
  return (
    <div className='LookApp_container'>
       {/* <img className='LookApp_container-image' src={project_image}/>  */}
       <Slide {...proprietes} onChange={(e)=> setActiveSlide(e)}  canSwipe={false} cssClass='slider'>
            {images.map((image, id) => 
              <div key={id} className="each-slide-effect">
                <img className='LookApp_container-image' src={image}/> 
                <div className='LookApp_container_info'>
                <h1>
                  {headers[activeSlide]}
                </h1>
                <p>
                  {texts[activeSlide]}
                </p>
              </div>
              </div>  
            )}
            
    
          </Slide>
  
          {/* <div className='LookApp_container_info'>
        <h1>
          {headers[activeSlide]}
        </h1>
        <p>
          {texts[activeSlide]}
        </p>
       </div> */}
    </div>
  )
}