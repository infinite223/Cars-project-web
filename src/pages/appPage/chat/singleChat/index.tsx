import React, { FC } from 'react'
import { AiOutlineSend } from 'react-icons/ai';
import { useParams, useOutletContext } from 'react-router-dom';
import { Chat as chatType, Message } from '../../../../utils/types';

import './styles.scss'
import { useState, useRef } from 'react';
import useAuth from '../../../../hooks/useAuth';
import { setDoc, doc, serverTimestamp, collection, query, onSnapshot, orderBy, DocumentData, updateDoc } from 'firebase/firestore';
import { db } from '../../../../firebase/config';
import { useEffect } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

export const SingleChat:FC<{nochat?:boolean}> = ({nochat}) => {
    const { id } = useParams();
    const props = useOutletContext<chatType>()
    const { user } :any = useAuth()
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState<{id:number, data:Message}[]>([])
    const [newChat, setNewChat] = useState(props.new)
    const chatRef:any = useRef()

    useEffect(() => {
      // if(chatRef){
        chatRef.current?.scrollIntoView({ behavior: 'smooth' })
        console.log(chatRef.current.scrollIntoView)
      // }
    }, [id, messages])
    
    const sendMessage = (e:any) => {
      e.preventDefault();
      
      if(message.length > 0 && user){
        if(newChat){
          const chatRef = doc(db, `chats/${props.id}`);
          setDoc(chatRef, {
            blcok:false,
            persons: [user.uid, props.data.to.id],
            lastMessage: { message:message, fromUid: user.uid },
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
          email:user.email,
        }).then( async () => {
          await updateDoc(doc(db, "chats", props.id), {
            "lastMessage": {message, fromUid:user.uid, time: serverTimestamp()}
          }).then(() => console.log('git xd'));
        })
  
        setMessage('')
        setNewChat(false)
      }
    }

    useEffect(()=> {
      if(!newChat){
        const messagesRef = collection(db, `chats/${props.id}` + "/messages")
        const messagesQuery = query(messagesRef, orderBy("timestamp"));
  
        const unsubscribe = onSnapshot(messagesQuery, (snapchot) => {  
              const dataMessages:any = (snapchot.docs.map((doc, i)=> {
                  return {id: doc.id, data:doc.data()}
              }))      
              console.log('read snapshot, singleChat state') 

              setMessages(dataMessages)
          })  
        
          return () => {
            unsubscribe();
          };
      }

    }, [id, newChat])

  return (
    <div className='singleChat'>
       {(nochat && props.data.to)?
            <h2>
                Nie wybrano żadnego czatu
            </h2>:
        <div className='singleChat-content'>
          <nav>
            <div className='nav__personData'>
              <img src={props?.data.to.imageUri} className='image-profile'/>
              <div className='name-person'>{props?.data.to?.name}</div>
            </div>
   
            <BsThreeDotsVertical color='white'/>
          </nav>
          <div className='messages-container'>
            {messages.map(({data:{email, imageUri, message}, id }) => {
              return email===user.email?(
                <div className='sender message__conteiner' key={id}>
                  {/* <img src={imageUri} className="imageProfile"/> */}
                  <div className='message__text'>{message}</div>
                </div>
              ):(
                <div className='reciver message__conteiner' key={id}>
                  <img src={imageUri} className="imageProfile"/>
                  <div className='message__text reciver__text'>{message}</div>
                </div>
              )
            })
            }
             <div ref={chatRef} />
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
