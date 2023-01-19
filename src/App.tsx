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

const router = createBrowserRouter(
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

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
