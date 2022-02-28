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
import { useEffect } from 'react';

import {fakeUser} from './fakeUser';

import AppNav from "./shared/AppNav";

function App() {

  let user = localStorage.getItem('kurriculaUser')

  useEffect(() => {
    if(!user) {
      localStorage.setItem('kurriculaUser', JSON.stringify(fakeUser))
    }
  }, [])

  let path = window.location.pathname

  return (
    <div className="text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900 min-h-screen">
        {path !== '/' && path !== '/home' && path !== '/login' && path !== '/register' ?
          <AppNav>
            <Routes>
              <Route path='/courses' element={<Courses />} />
              <Route path='/courses/:course' element={<Course />} />
              <Route path='/chat' element={<Chat />} />
              <Route path='/resources' element={<Resources />} />
              <Route path='/study' element={<Study />} />
              <Route path='/profile' element={<Profile />} />
          </Routes>
        </AppNav>
        :
        <Routes>
          <Route path='/home' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Landing />} />
        </Routes>
        }
        
    </div>
  );
}

export default App;
