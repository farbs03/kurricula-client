import './App.css';

import {Route, Routes} from "react-router-dom"

import Navbar from './components/shared/Navbar';
import Home from './views/Home/Home';
import Register from './views/Register/Register';
import Courses from './views/Courses/Courses';

function App() {
  return (
    <div className="App text-[#0d0d0d] min-h-screen h-full overflow-y-auto bg-gray-50">
      <Navbar>
        <Routes>
          <Route path='/courses' element={<Courses />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
