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
  const data = location.state as chatType;
  const navigate = useNavigate()


  const deleteChat = async (chatId:string) => {
    await deleteDoc(doc(db, "chats", chatId)).catch(()=> {
      // setAlertModal({show:true, type:'ERROR', message:'Somthing want wrong!'})
    })
  }

  console.log(chats, 'nasze czaty')

  useEffect(() => {
    if(!user){
      navigate('./start')
    }
  }, [])


  return (
    <div className='chat'>
        <Outlet context={data}/>

        <div className='chatsList'>
          <h2>Czaty</h2>
          {chats.map(() => (
            <div>

            </div>
          ))}
        </div>
    </div>
  )
}
