import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import './styles.scss'
import { SingleChat } from './singleChat/index';

export const Chat = () => {

  const { id } = useParams();
  console.log(id)

  return (
    <div className='chat'>
        <SingleChat/>

        <div className='chatsList'>
          <h2>Czaty</h2>
        </div>
    </div>
  )
}
