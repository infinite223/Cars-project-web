import React from 'react'
import { CustomInput } from '../../../components/customInput'
import './styles.scss'
import { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import { GoogleMap, useJsApiLoader, useLoadScript,  } from '@react-google-maps/api';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { MapView } from '../../../components/mapView';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from './../../../firebase/account/updateProfile';
import { Place } from '../../../utils/types';
import { useDispatch } from 'react-redux';
import { setMessage } from '../../../reducers/messageSlice';
import { setLoading } from '../../../reducers/loadingSlice';

export const Firststart = () => {
  const [name, setName] = useState('')
  const [place, setPlace] = useState<Place>({city:'', latitude:0, longitude:0})
  const [description, setDescription] = useState('')
  const { userType, user, setUser, setUserType }:any = useAuth()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [image, setImage] = useState<any>('https://th.bing.com/th/id/OIP.LG6UqvINZmEBMrUzrhADJAHaHa?pid=ImgDet&rs=1');

  function handleChange(e:any) {
      setImage(e.target.files[0]);
   }

  // useEffect(()=> {
  //   if(!user){
  //     navigate('/start')
  //   }
  //   if(setUserType==='firebase')
  //     navigate('/start')
  // }, [user])

  const tryUpdateProfile = (e:any) => {
    e.preventDefault();
    dispatch(setLoading(true))

    updateProfile(user, name, description, image, place).then((res)=> {
      dispatch(setMessage({show:true, type: "SUCCESS", message:res.message}))
      setUser(res.user)
      setUserType('firebase')
      dispatch(setLoading(false))
      navigate('/start')  
    })
    .catch((error)=> {
      dispatch(setMessage({show:true, type: "SUCCESS", message:error}))
      dispatch(setLoading(false))
    })  
  }
  
  return (
    <div className='firststart'>
      {userType==='normalAuth'?
      <>  
        <h1>Witaj nowy użytkowniku!</h1>
        <p>Zanim zaczniesz, uzupełnij pozostałe dane</p>
      </>
      :<h1>Edyuj profil</h1>}
      <div className='firststart__content'>
        <div className='firststart__content-main'>
          <h3>Miło że dołączyłeś!</h3>
            <div className='firststart__content-main__image'> 
              <input onChange={handleChange} className='imageUpload'  type="file" name="profile_photo" placeholder="Photo" capture></input>
              <img className='firststart-formimg-img' src={image}/>
            </div>
            <form onSubmit={(e) => tryUpdateProfile(e)}>

                <CustomInput placeholder='Nazwa użytkonika' required setValue={setName} type='text' theme="dark"/>
                <CustomInput placeholder='Krótki opis' required setValue={setDescription} type='text' theme="dark"/>

            <button>Aktualizuj profil</button>
            </form>

        </div>
      </div>
      <div className='firststart-content' style={{display:'none'}}>
      <form onSubmit={(e) => tryUpdateProfile(e)}>
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
          <MapView setPlace={setPlace} place={place}/>
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
