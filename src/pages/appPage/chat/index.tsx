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
import Moment from 'react-moment';

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
          <div className='line'/>
          {chats.map(({data, id, lastMessage}) => (
            <div key={id} className='person' onClick={() => navigate(`${id}`, {state:{id:id, data: data}})}>
              <div className='person__left'>
                <img src={data.to.imageUri} className="image__person"/>
                <div className='container__lastMessage'> 
                  <div className='name__person'>
                    {data.to.name}
                  </div>
                  <div className='lastMessage'>
                    {lastMessage.fromUid === user.uid
                      ?'ja: '+(lastMessage.message.length<15?lastMessage.message:lastMessage.message.substring(0, 16)+"...")
                      :(lastMessage.message.length<15?lastMessage.message:lastMessage.message.substring(0, 16)+"...")}
                  </div>
                </div>
              </div>
             
              <div style={{marginLeft:'5px', color:'gray', fontSize:'13px', letterSpacing:'0px', lineHeight:'11px', maxWidth:'30%', textAlign:'right'}}>
                  {/* {lastMessage.time?.toDate().getUTCDate()} */}
                  <Moment  fromNow>{lastMessage?.time?.toDate()}</Moment>

                  {/* {moment(lastMessage.time).format()} */}
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}
