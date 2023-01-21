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
import { ProjectsList } from './components/projectsList';

function App() {
  const { user }:any = useAuth()

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<HomePage/>} />
        {!user?
          <Route path="start" element={<StartPage/>}>
            <Route index path="login" element={ <LoginForm/>} />
            <Route errorElement path="register" element={ <RegisterForm/>} />
          </Route>:
          <Route path="app" element={<AppPage/>}>
            <Route index path="projects" element={ <ProjectsList/>} />
            <Route path="meeting" element={ <LoginForm/>} />
          </Route>
        }
      </Route>
    )
  );

  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
