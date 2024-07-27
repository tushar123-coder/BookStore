import React from 'react';
import Home from './Home/Home'
import Course from './Courses/courses'
import Signup from './components/signup'
import Contact from './Contact/Contact'
import {Navigate, Route, Routes} from 'react-router-dom'
import {Toaster} from 'react-hot-toast'
import { useAuth } from './context/Authprovider';
function App() {
  const [authUser,setAuthUser]=useAuth()

  return (

   <>
   <div className='dark:bg-slate-900 dark:text-white'>

   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/course' element={authUser?<Course/>:<Navigate to='/signup'/>}/>
   <Route path='/signup' element={<Signup/>}/>
   <Route path='/contact' element={<Contact/>}/>
   </Routes>
   <Toaster/>
   </div>
   </>
  );
}

export default App
