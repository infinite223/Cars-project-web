import React from 'react'
import './styles.scss'
import { useCycle, motion } from "framer-motion";
import useAuth from '../../hooks/useAuth';
import { Outlet, useLocation, useNavigate, } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CarprojectData } from '../../utils/types';
import { IoIosArrowBack } from 'react-icons/io'
import { getColorsCircle } from '../../utils/functions/colorsCircle';
import { BsFillShareFill, BsInstagram, BsPause, BsPlay, BsThreeDotsVertical, BsYoutube } from 'react-icons/bs'
import { FiSend, FiHeart } from 'react-icons/fi'
import { CircleGradient } from './circle';
import { useAudio } from '../../hooks/useAudio';
import { AiFillFacebook } from 'react-icons/ai';
import { OptionsProject } from './optionsProject';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const libraries:("places" | "drawing" | "geometry" | "localContext" | "visualization")[]= ['places']


export const ProjectPage = () => {
  const { logout, user }:any =  useAuth()  
  const navigate = useNavigate()
  const [mapInstance, setMapInstance] = useState<any>()
  const [showOptions, setShowOptions] = useState(false)
  const location = useLocation();

  useEffect(() => {
    if(!user){
      navigate('../../start')
    }
  }, [user])

  const {car, id, place, createdAt, author} = location.state as CarprojectData;
  const { toggle, playing }:any  = useAudio(car.soundCheck)
  const colors = car.performance && getColorsCircle(car.performance[0].value, car.performance[0].type)

  const { isLoaded, loadError } =  useLoadScript({googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API?process.env.REACT_APP_GOOGLE_MAPS_API:'',
    libraries
  })

  return (
    <motion.div className='projectPage' animate={{opacity:[0.6, 1]}}>
        <OptionsProject projectId={id} carData={car} showOptions={showOptions} setShowOptions={setShowOptions}/>
        <nav className='projectPage__nav'>
          <div className='projectPage__nav-main'>
            <motion.div whileHover={colors?{color: colors[0]}:{}}>
              <IoIosArrowBack onClick={() => navigate(-1)} size={30} style={{padding:'0px 10px', marginLeft:'10px', marginTop:'5px'}}/>
            </motion.div>
            <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:'0px'}}>
              <div className='projectPage__nav-carMake'>{car.CarMake}</div>
              {colors && <div className='projectPage__nav-model' style={{color: colors[0]}}>{car.model}</div>}
            </div>
          </div>
          
          <BsThreeDotsVertical onClick={() => setShowOptions(true)} style={{padding:'0 10px'}} color='white' size={24} className="icon"/>
        </nav>

        <div className='projectPage__main'>
          
          <motion.div className='projectPage__main_content'>
            <div className='projectPage__main_content-image'>
              <div className='blur'/>
              <img className='projectPage__main_content-image-img'  src={car.imagesCar[0].url}/>
            </div>
            <div className='projectPage__main_info-circles'>
              {car.performance?.map((data, i) => {
                return (
                  <>
                    {data?.value&&<CircleGradient key={i} type={data?.type} value={data?.value}/>}
                  </>       
                )
              })}

            </div>

            <motion.footer className='projectPage__footer'>
                <div className='projectPage__footer-icons'>
                  <motion.div whileHover={colors?{color: colors[0]}:{}}>
                    <FiSend size={22} className="icon"/>
                  </motion.div>
                  <motion.div whileHover={colors?{color: colors[0]}:{}}>
                    <BsFillShareFill  size={22} className="icon"/>
                  </motion.div>
                  <motion.div whileHover={colors?{color: colors[0]}:{}}>
                    <FiHeart size={24} className="icon"/>
                  </motion.div>
                  {car.likes.length}
                </div>

                <motion.div className='projectPage__footer-author' whileHover={{color: 'white'}}>
                  <div className='authorText'>{author.name}</div>
                  <img src={author.imageUri} className="authorImg"/>
                </motion.div>
              </motion.footer>
            <motion.div className='projectPage__main_content-info'>
              <h1>Podstawowe informacjie</h1>   
              <div className='projectPage__main_content-info-contaier'>
                {car.soundCheck&&<div className='soundcheck' onClick={toggle}>
                  {playing?<BsPause size={22} />:<BsPlay size={22}/>}
                  <span>Sound check</span>
                </div>}
      
                {(car.performance && colors )&&
                        <div className='projectPage__main_info-gradient'
                            style={{background: `linear-gradient(90deg, 
                                ${colors[0]} 0%, 
                                ${colors[1]} 46%,
                                ${colors[2]} 100%)`}}

                            >
                            {car.history.length===0?'STOCK':'STAGE '+car.history.length}   
                </div>}
              </div>
              <div className='description'>{car.description}</div>

  

              <div className='projectPage__main_content-info-links'>
              <div className='link' style={{color:car.links.yt?'white':'rgba(50, 50, 50, .5)'}}>
                  <BsYoutube size={20}/>
                  <div className='link-type'>Youtube</div>
                </div>
                <div className='link' style={{color:car.links.yt?'white':'rgba(50, 50, 50, .5)'}}>
                  <BsInstagram size={20}/>
                  <div className='link-type'>Instagram</div>
                </div>
                <div className='link' style={{color:car.links.yt?'white':'rgba(50, 50, 50, .5)'}}>
                  <AiFillFacebook size={22}/>
                  <div className='link-type'>Facebook</div>
                </div>
              </div>
            </motion.div>

              {place && <div className='map'>
                <GoogleMap
                    zoom={10}
                    center={{
                      lat: place.latitude?place.latitude:0,
                      lng: place.longitude?place.longitude:0
                    }}
                    mapContainerClassName='mapView'
                    onLoad={(map) =>setMapInstance(map)}
                  >
                    <div className='mapView__city'>{place.city}</div>
                      {mapInstance &&<Marker
                          position={{
                              lat: place.latitude?place.latitude:0,
                              lng:place.longitude?place.longitude:0
                          }}
                      />}
                </GoogleMap>
              </div>}
          </motion.div>
          
       
          <motion.div className='projectPage__main_history'
            style={colors?{borderColor: 
              // colors[0]
              'rgba(221, 221, 221,.1)'
            }:{}}
           // initial={{width:'500px'}}
            // whileHover={{
            //   width: '600px'
            // }}
          >
            {car.history[0]?<>
              <h1>Przebieg modyfikacji</h1>
            </>:
            <div className='projectPage__main_history-empty'>
              Brak modyfikacji
            </div>
            }
          </motion.div>
        </div>
    </motion.div>
  )
} 
