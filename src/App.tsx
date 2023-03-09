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
import { ErrorResponsive } from './pages/errorResponsive';
import { CreateProjectModal } from './modals/createProjectModal/index';
import { Basicinfo } from './modals/createProjectModal/stages/basicInfo';
import { Performance } from './modals/createProjectModal/stages/performance';
import { StartPremiumPage } from './pages/startPremiumPage/index';
import { Chat } from './pages/appPage/chat';
import { SingleChat } from './pages/appPage/chat/singleChat/index';
import { useChats } from './hooks/useChats';
import { collectionGroup, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import { setProjectsState } from './reducers/projectsSlice';
import { db } from './firebase/config';
import { StartLoading } from './components/startLoading';


function App() {
  const { user }:any = useAuth()
  const dispatch = useDispatch()
  
  const { loadingChats } =  useChats(user, dispatch)

  const projectsRef = collectionGroup(db, 'projects')
  const projectsQuery = query(projectsRef,  limit(3), orderBy('createdAt', 'desc'),)

  useEffect(()=> {
    const getProjects = async () => {
        onSnapshot(projectsQuery, (snapchot) => {  
            console.log('read snapshot, updateProjects state') 
            dispatch(setProjectsState(snapchot.docs.map((doc, i)=> {
                return doc.data()
            })))
        })

        // const documentSnapshots = await getDocs(projectsQuery);
        // setLastVisible(documentSnapshots.docs[documentSnapshots.docs.length-1])
    } 

    return () => {
      user&&getProjects()
    }
  }, [user])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<HomePage/>} />
          <Route path="start" element={user?<AppPage/>:<StartPage/>}>            
            <Route index element={user?<ProjectsList/>: <LoginForm/>} />
            <Route errorElement path="register" element={ <RegisterForm/>} />
            <Route errorElement path="firststart" element={ <Firststart/>} />
            <Route path='searchProjects' element={<SearchProjects/>}/>
            <Route path="meeting" element={ <LoginForm/>} />
            <Route path='chat' element={<Chat/>} >
              <Route index element={<SingleChat nochat/>}/>
              <Route path=':id' element={<SingleChat/>}/>
            </Route>
          </Route>
          <Route path='createProject' element={<CreateProjectModal/>} >
            <Route index element={<Basicinfo/>} />
            <Route path="performance" element={ <Performance/>} />
          </Route>
          <Route path='premium' element={<StartPremiumPage/>} />
          <Route path='errorResponsive' element={<ErrorResponsive/>}/>
          <Route path="links" element={<Links/>} >
            <Route index element={ <RulesLink/>} />
            <Route errorElement path="policy" element={ <PolicyLink/>} />
            <Route errorElement path="news" element={ <NewsLink/>} />
            <Route errorElement path="about" element={ <AboutLink/>} />
          </Route>
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
