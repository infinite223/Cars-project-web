import React from 'react'
import { PresentationApp } from '../../components/presentationApp/PresentationApp'
import './styles.scss'
import { motion, useCycle } from "framer-motion";
import { LoginForm } from '../../components/loginFrom';
import {
  Outlet,
} from "react-router-dom";
import { RegisterForm } from '../../components/registerForm';
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

interface RoutesProps {
  children?: React.ReactNode;
  location?: Partial<Location> | string;
}

export const StartPage:React.FC<RoutesProps> = ({location}) => {
  const [showForm, setShowForm] = useCycle(false, true);
  const navigate = useNavigate()

  return (
    <motion.div className='start_container' animate={{ scale: [1.2, 1]}}>

      <div className='start_container_main'>
        
        <div className='start_container_main-forms'>
          <MdOutlineArrowBackIosNew onClick={() => navigate('/')} className='start_container_main-forms-back'/>
          <Outlet />
        </div>

        <div className='start_container_main-logocontainer'>
          {/* image, background */}
        </div>

      </div>
    </motion.div>
  )
}
