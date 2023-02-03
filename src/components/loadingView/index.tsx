import React from 'react'
import './styles.scss'
import { useSelector } from 'react-redux';
import { selectLoading } from '../../reducers/loadingSlice';
import ClipLoader from 'react-spinners/ClipLoader';

export const LoadingView = () => {
   const { loading } = useSelector(selectLoading)

  return (
    <div className='loadingView' style={!loading?{display:'none'}:{}}>
      <ClipLoader 
        color={'#fff'} 
        size={100}         
        aria-label="ładowanie..."
      />
    </div>
  )
}
