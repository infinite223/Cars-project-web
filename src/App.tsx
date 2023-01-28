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
import { ProjectsList } from './pages/appPage/projectsList';
import { useSelector, useDispatch } from 'react-redux';
import { selectMessage } from './reducers/messageSlice';
import { Message } from './components/message/Message';
import { SearchProjects } from './components/searchProjects/SearchProjects';
import { ProjectPage } from './pages/project';


function App() {
  const { user }:any = useAuth()

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<HomePage/>} />
          <Route path="start" element={<StartPage/>}>
            <Route index element={ <LoginForm/>} />
            <Route errorElement path="register" element={ <RegisterForm/>} />
          </Route>
          <Route path="app" element={<AppPage/>}>
            <Route index element={ <ProjectsList/>} />
            <Route path='searchProjects' element={<SearchProjects/>}/>
            <Route path="meeting" element={ <LoginForm/>} />
          </Route>
          <Route path="project/:id" element={<ProjectPage/>}/>
      </Route>
    )
  );

  return (
    <div className="App">
      <Message/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
