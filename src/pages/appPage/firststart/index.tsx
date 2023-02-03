import React from 'react'
import { CustomInput } from '../../../components/customInput'
import './styles.scss'
import { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import { GoogleMap, useJsApiLoader, useLoadScript,  } from '@react-google-maps/api';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { MapView } from '../../../components/mapView';
import { useNavigate } from 'react-router-dom';

export const Firststart = () => {
  const [name, setName] = useState('')
  const { userType, user }:any = useAuth()
  const navigate = useNavigate()

  const [image, setImage] = useState<any>('https://th.bing.com/th/id/OIP.LG6UqvINZmEBMrUzrhADJAHaHa?pid=ImgDet&rs=1');
  function handleChange(e:any) {
      console.log(e.target.files);
      setImage(URL.createObjectURL(e.target.files[0]));
  }

  useEffect(()=> {
    if(!user){
      navigate('/start')
    }
  }, [user])
  
  return (
    <div className='firststart'>
      {userType==='normalAuth'?
      <>  
        <h1>Witaj nowy użytkowniku!</h1>
        <p>Zanim zaczniesz, uzupełnij pozostałe dane</p>
      </>
      :<h1>Edyuj profil</h1>}
      <div className='firststart-content'>
      <form>
        <div className='firststart-form'>
          <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
            <div className='firststart-formdata'>
              <CustomInput placeholder='Nazwa użytkonika' required setValue={setName} type='text' theme="dark"/>
              <CustomInput placeholder='Krótki opis' required setValue={setName} type='text' theme="dark"/>
            </div>
            <div className='firststart-formimg'> 
              <input onChange={handleChange} className='imageUpload'  type="file" name="profile_photo" placeholder="Photo" capture></input>
              <img className='firststart-formimg-img' src={image}/>
            </div>
          </div>
          <div className='firststart-label'>
            <AiOutlineArrowLeft color='#293' size={30}/>
            Ustaw nazę użytkownika, opis jak i dowolne profilowe
          </div>
        </div>
      
        <div className='firststart-place'>
          <MapView/>
          <div className='firststart-label'>
            <AiOutlineArrowLeft color='#293' size={30}/>
            Ustaw lokalizacje gdzie najczęściej można Cię spotkać
          </div>
        </div>
    
        <button>Aktualizuj profil</button>
      </form>
      </div>
     
    </div>
  )
}
