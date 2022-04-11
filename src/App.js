import {Route, Routes} from "react-router-dom"

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

function App() {

  /*let user = localStorage.getItem('kurriculaUser')

  useEffect(() => {
    if(!user) {
      localStorage.setItem('kurriculaUser', JSON.stringify(fakeUser))
    }
  }, [])*/

  let path = window.location.pathname

  const [token, setToken] = useState();

  const protect = (element) => {
    if(!token)
      return <Login setToken={setToken}></Login>
    else
      return element
  }

  const sharedNav = (element) => {
    return <AppNav>{element}</AppNav>
  }

  return (
    <div className="text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900 min-h-screen">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
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
