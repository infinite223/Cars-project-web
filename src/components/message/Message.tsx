import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from '../../store';
import './styles.scss'
import { BiErrorAlt } from 'react-icons/bi'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { useEffect } from 'react';
import { setMessage } from '../../reducers/messageSlice';

export const Message = () => {
    const { prompt } = useSelector((state: RootStore) => state.message)

    const dispatch = useDispatch()
    console.log(prompt)
    useEffect(()=>{
      if(prompt.show){
        setTimeout(()=> {
          dispatch(setMessage({show:false, message: '', type:''}))
        }, 1000)
      }

    }, [prompt])

  return (
    <div className='message' 
      style={{display:prompt.show?'flex':'none'}}
    >
      <div className='message-text'>
        {prompt.message}
      </div>
      {prompt.type==="ERROR"?
        <BiErrorAlt color='red'size={20}/>
        :
        <AiOutlineCheckCircle  color='#293' size={20}/>
      }
    </div>
  )
}
