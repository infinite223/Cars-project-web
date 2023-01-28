import React from 'react'
import './styles.scss'
import { useCycle } from "framer-motion";
import useAuth from '../../hooks/useAuth';
import { Outlet, useLocation, useNavigate, } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CarprojectData } from '../../utils/types';

export const ProjectPage = () => {
  const { logout, user }:any =  useAuth()  
  const navigate = useNavigate()
  const location = useLocation();

  const project = location.state as CarprojectData;
    console.log(project.car)

  return (
    <div className='projectPage'>
        
    </div>
  )
} 
