import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route,useLocation } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Data from "./pages/Data"
import Login from './pages/Login'
import Edit from './pages/Edit'
import Protected from './components/Protected'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const App = () => {
  const location=useLocation()
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token]);



  return (
    <div className='w-screen flex h-screen'>

      {location.pathname !== '/login' && <Navbar />}
      
      <Routes>
      <Route element={<Login/>} path='/login'/>
      <Route element={<Protected/>}>

      <Route path='/' element={<Dashboard/>}/>
      <Route path='/students' element={<Data/>}/>
      <Route path='students/:id' element={<Edit/>}/>

      </Route>
      
      
      </Routes>
      

    </div>
    
    
  )
}

export default App