import React from 'react'
import { useParams } from 'react-router-dom';
import './styles.scss'

export const SingleChat = () => {
    const { id } = useParams();
    console.log(id)

  return (
    <div className='singleChat'>
        <div className='singleChat-content'>
            {id==='0'?
            <h2>
                Nie wybrano żadnego czatu
            </h2>:''}
        </div>
    </div>
  ) 
}
