import React, { FC } from 'react'
import { AiOutlineSend } from 'react-icons/ai';
import { useParams, useOutletContext } from 'react-router-dom';
import { Chat as chatType, Message } from '../../../../utils/types';

import './styles.scss'
import { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import { setDoc, doc, serverTimestamp, collection, query, onSnapshot, orderBy, DocumentData } from 'firebase/firestore';
import { db } from '../../../../firebase/config';
import { useEffect } from 'react';

export const SingleChat:FC<{nochat?:boolean}> = ({nochat}) => {
    const { id } = useParams();
    const props = useOutletContext<chatType>()
    const { user } :any = useAuth()
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState<{id:number, data:Message}[]>([])
    const [newChat, setNewChat] = useState(props.new)
    
    const sendMessage = (e:any) => {
      e.preventDefault();
      
      if(message.length > 0){
        if(newChat){
          const chatRef = doc(db, `chats/${props.data.to.id}`);
          setDoc(chatRef, {
            blcok:false,
            persons: [user.uid, props.data.to.id],
            data: {
              from: {
                id:user.uid,
                name:user.name,
                imageUri:user.imageUri
              },
              to: {
                id:props.data.to.id,
                name:props.data.to.name,
                imageUri:props.data.to.imageUri
              }
            },
            id:props.id
          })
        }
        const messageId =  window.crypto.randomUUID()
        const messageRef = doc(db, `chats/${props.id}/messages/${messageId}`);
  
        setDoc(messageRef, {
          timestamp: serverTimestamp(),
          message: message, 
          name: user.name,
          imageUri: user.imageUri,
          email:user.email
        })
  
        setMessage('')
        setNewChat(false)
      }
    }

    useEffect(()=> {
      console.log(props.new, 'ssd')
      if(!props.new){
        const messagesRef = collection(db, "chats/" + `${props.id}` + "/messages")
        const messagesQuery = query(messagesRef, orderBy("timestamp"));
  
        const unsubscribe = onSnapshot(messagesQuery, (snapchot) => {  
              const dataMessages:any = (snapchot.docs.map((doc, i)=> {
                  return {id: doc.id, data:doc.data()}
              }))      
  
              setMessages(dataMessages)
          })  
        
        return unsubscribe
      }

    }, [id])
    console.log(props.id)
  return (
    <div className='singleChat'>
       {(nochat &&props.data.to)?
            <h2>
                Nie wybrano żadnego czatu
            </h2>:
        <div className='singleChat-content'>
          <nav>
            <img src={props?.data.to.imageUri} className='image-profile'/>
            <div className='name-person'>{props?.data.to?.name}</div>
          </nav>
          <div className='messages-container'>
            {messages.map(({data:{email, imageUri, message}, id }) => {
              return email===user.email?(
                <div className='sender message__conteiner'>
                  {/* <img src={imageUri} className="imageProfile"/> */}
                  <div className='message__text'>{message}</div>
                </div>
              ):(
                <div className='reciver message__conteiner'>
                  <img src={imageUri} className="imageProfile"/>
                  <div className='message__text'>{message}</div>
                </div>
              )
            })
            }
          </div>

          <footer>
            <form onSubmit={sendMessage}>
              <input value={message} onChange={(text) => setMessage(text.currentTarget.value)} className='message-input' placeholder='Napisz wiadomość...' />
              <AiOutlineSend size={25} className="send-button" onClick={sendMessage}/>
            </form>
          </footer>
        </div>}
    </div>
  ) 
}
