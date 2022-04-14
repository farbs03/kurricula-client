import {Route, Routes} from "react-router-dom"

import React from "react"

import Landing from './views/Landing/Landing';

import Courses from './views/Courses/Courses';
import Course from './views/Courses/Course/Course';
import Chat from './views/Chat/Chat'
import Resources from './views/Resources/Resources'
import Study from './views/Study/Study';

import Login from './views/Login/Login';
import Register from './views/Register/Register';

import Profile from './views/Profile/Profile';
import { useEffect, useState } from 'react';

import {fakeUser} from './fakeUser';

import AppNav from "./shared/AppNav";

import useToken from "./shared/useToken";

function App() {

  let path = window.location.pathname

  const {token, setToken} = useToken()

  const protect = (element) => {
    if(!token)
      return <Login setToken={setToken}/>
    else
      return element
  }

  const sharedNav = (element) => {
    return <AppNav>{element}</AppNav>
  }

  return (
    <div className="text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900 min-h-screen">
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/home' element={<Landing />} />
        <Route path='/login' element={<Login setToken={setToken}/>} />
        <Route path='/register' element={<Register setToken={setToken}/>} />
        <Route path='/courses' element={sharedNav(<Courses />)} />
            <Route path='/courses/:course' element={sharedNav(<Course />)} />
            <Route path='/chat' element={sharedNav(<Chat />)} />
            <Route path='/resources' element={sharedNav(<Resources />)} />
            <Route path='/study' element={sharedNav(<Study />)} />
          <Route path='/profile' element={protect(sharedNav(<Profile />))} />
      </Routes>
    </div>
  );
}

export default App;
