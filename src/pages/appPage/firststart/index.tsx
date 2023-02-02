import React from 'react'
import { CustomInput } from '../../../components/customInput'
import './styles.scss'
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
export const Firststart = () => {
  const [name, setName] = useState('')
  const { userType }:any = useAuth()

  const [image, setImage] = useState<any>();
  function handleChange(e:any) {
      console.log(e.target.files);
      setImage(URL.createObjectURL(e.target.files[0]));
  }
  
  return (
    <div className='firststart'>
      {userType==='normalAuth'?
      <>  
        <h1>Witaj nowy użytkowniku!</h1>
        <p>Zanim zaczniesz, uzupełnij pozostałe dane</p>
      </>
      :<h1>Edyuj profil</h1>}
      <form>
        <div className='firststart-form'>
          <div className='firststart-formdata'>
            <CustomInput placeholder='Nazwa użytkonika' setValue={setName} type='text' theme="dark"/>
            <CustomInput placeholder='Krótki opis' setValue={setName} type='text' theme="dark"/>
          </div>
          <div className='firststart-formimg'> 
            <input onChange={handleChange} className='imageUpload' type="file" name="profile_photo" placeholder="Photo" required capture></input>
            <img className='firststart-formimg-img' src={image}/>
          </div>
        </div>
        
        <div className='firststart-place'>
          ustaw lokalizacje gdzie najczęściej cię można spotkać
        </div>
    
        <button>Aktualizuj profil</button>
      </form>
    </div>
  )
}
