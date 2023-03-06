import React, { FC } from 'react'
import { useParams, useOutletContext } from 'react-router-dom';
import { Chat as chatType } from '../../../../utils/types';

import './styles.scss'

export const SingleChat:FC<{nochat?:boolean}> = ({nochat}) => {
    const { id } = useParams();
    const props = useOutletContext<chatType>()

  return (
    <div className='singleChat'>
       {nochat?
            <h2>
                Nie wybrano żadnego czatu
            </h2>:
        <div className='singleChat-content'>
          <nav>
            <img src={props?.data.to.imageUri} className='image-profile'/>
            <div className='name-person'>{props?.data.to.name}</div>
          </nav>
          <div className='messages-container'>

          </div>

          <footer>
            
          </footer>
        </div>}
    </div>
  ) 
}
