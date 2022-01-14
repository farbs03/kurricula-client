import './App.css';

import {Route, Routes} from "react-router-dom"

import Navbar from './components/shared/Navbar';

import Home from './views/Home/Home';
import About from './views/About/About';
import Blog from './views/Blog/Blog';

import Courses from './views/Courses/Courses';
import Course from './views/Courses/Course/Course';
import Tutoring from './views/Tutoring/Tutoring'
import Resources from './views/Resources/Resources'
import Study from './views/Study/Study';

import Login from './views/Login/Login';
import Register from './views/Register/Register';



function App() {
  return (
    <div className="App text-[#0d0d0d] min-h-screen h-full overflow-y-auto bg-gray-50">
      <Navbar>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/courses/:course' element={<Course />} />
          <Route path='/tutoring' element={<Tutoring />} />
          <Route path='/resources' element={<Resources />} />
          <Route path='/study' element={<Study />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
