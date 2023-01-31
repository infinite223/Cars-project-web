import React from 'react'
import './styles.scss'
import { useSelector } from 'react-redux';
import { selectLoading } from '../../reducers/loadingSlice';

export const LoadingView = () => {

    const { loading } = useSelector(selectLoading)
    console.log(loading)
  return (
    <div className='loadingView' style={!loading?{display:'none'}:{}}>
        loading...
    </div>
  )
}
