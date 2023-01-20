import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './pages/homePage';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { StartPage } from './pages/startPage';
import { LoginForm } from './components/loginFrom';
import { RegisterForm } from './components/registerForm';
import useAuth, { AuthProvider } from './hooks/useAuth';
import { AppPage } from './pages/appPage';
import { useEffect } from 'react';

const routerNoLogin = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<HomePage/>} />
      <Route path="start" element={<StartPage/>}>
        <Route index path="login" element={ <LoginForm/>} />
        <Route errorElement path="register" element={ <RegisterForm/>} />
      </Route>
    </Route>
  )
);


const routerLogin = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<HomePage/>} />
      <Route path="app" element={<AppPage/>}/>
        {/* <Route index path="login" element={ <LoginForm/>} />
        <Route errorElement path="register" element={ <RegisterForm/>} /> */}
      {/* </Route> */}
    </Route>
  )
);

function App() {
  const { user }:any = useAuth()
  
  return (
    <div className="App">
          {user?  
                    <RouterProvider router={routerLogin} />

                :   <RouterProvider router={routerNoLogin} />
          }
    </div>
  );
}

export default App;
