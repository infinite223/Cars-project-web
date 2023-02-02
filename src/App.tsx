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
import { LoadingView } from './components/loadingView';
import { Links } from './pages/linksPage/Links'
import { RulesLink } from './pages/linksPage/Links/rules'
import { NewsLink } from './pages/linksPage/Links/news';
import { PolicyLink } from './pages/linksPage/Links/policy';
import { AboutLink } from './pages/linksPage/Links/about';
import { Firststart } from './pages/appPage/firststart';


function App() {
  const { user }:any = useAuth()

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<HomePage/>} />
          <Route path="start" element={user?<AppPage/>:<StartPage/>}>
            <Route index element={user?<ProjectsList/>: <LoginForm/>} />
            <Route errorElement path="register" element={ <RegisterForm/>} />
            <Route errorElement path="firststart" element={ <Firststart/>} />
            {/* <Route path='projects'  element={ <ProjectsList/>} /> */}
            <Route path='searchProjects' element={<SearchProjects/>}/>
            <Route path="meeting" element={ <LoginForm/>} />
          </Route>
          <Route path="links" element={<Links/>} >
            <Route index element={ <RulesLink/>} />
            <Route errorElement path="policy" element={ <PolicyLink/>} />
            <Route errorElement path="news" element={ <NewsLink/>} />
            <Route errorElement path="about" element={ <AboutLink/>} />
          </Route>
          {/* <Route path="app" element={<AppPage/>}>
            <Route index element={ <ProjectsList/>} />
            <Route path='searchProjects' element={<SearchProjects/>}/>
            <Route path="meeting" element={ <LoginForm/>} />
          </Route> */}
          <Route path="project/:id" element={<ProjectPage/>}/>
      </Route>
    )
  );

  return (
    <div className="App">
      <LoadingView/>
      <Message/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
