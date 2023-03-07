import React from 'react'
import { Outlet, useLocation, useNavigate, useNavigation, useParams, useRoutes } from 'react-router-dom'
import './styles.scss'
import { SingleChat } from './singleChat/index';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { useSelector } from 'react-redux';
import { selectChats } from '../../../reducers/chatsSlices';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Chat as chatType } from '../../../utils/types';

export const Chat = () => {

  const { id } = useParams();
  const location = useLocation();

  const { chats } = useSelector(selectChats)
  const { user }:any = useAuth()
  const locationData = location.state as chatType;
  const navigate = useNavigate()

  const deleteChat = async (chatId:string) => {
    await deleteDoc(doc(db, "chats", chatId)).catch(()=> {
      // setAlertModal({show:true, type:'ERROR', message:'Somthing want wrong!'})
    })
  }

  // useEffect(() => {
  //   if(!user){
  //     navigate('../start')
  //     console.log(user, 'nasze czaty')
  //   }
  // }, [])

  return (
    <div className='chat'>
        {locationData&&<Outlet context={locationData}/>}

        <div className='chatsList'>
          <h2>Czaty</h2>
          {chats.map(({data}) => (
            <div className='person' onClick={() => navigate(`${id}`, {state:{id:id?.slice(1), data: data}})}>
              <img src={data.to.imageUri} className="image__person"/>
              <div className='name__person'>
                {data.to.name}
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}
