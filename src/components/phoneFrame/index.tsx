import React from 'react'
import './styles.scss'

export const PhoneFrame = () => {
  return (
    <div className="phone">
        <div className="notch-container">
            <div className="notch"></div>
        </div>
        <img className='screenImage' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1543663/cp-iphonex-1125x2436.png" alt=""/>
    </div>
  )
}
