import React from 'react'
import { PresentationApp } from '../../components/presentationApp/PresentationApp'
import './styles.scss'
import { useCycle } from "framer-motion";
import { LoginForm } from '../../components/loginFrom';
import {
  createBrowserRouter,
  createRoutesFromElements,
  createRoutesFromChildren,
  Route,
  RouterProvider,
  Routes,
  Outlet,
} from "react-router-dom";
import { RegisterForm } from '../../components/registerForm';

const Router = 
  createRoutesFromChildren(
    <Route path="/">
      <Route index element={<LoginForm/>} />
      <Route path="start" element={<RegisterForm/>} />
    </Route>
);

interface RoutesProps {
  children?: React.ReactNode;
  location?: Partial<Location> | string;
}

export const StartPage:React.FC<RoutesProps> = ({location}) => {
  const [showForm, setShowForm] = useCycle(false, true);
  
  return (
    <div className='start_container'>

      <div className='start_container_main'>
        
        <div className='start_container_main-forms'>
        <Outlet />

        </div>

        <div className='start_container_main-logocontainer'>
          {/* image, background */}
        </div>

      </div>
    </div>
  )
}
