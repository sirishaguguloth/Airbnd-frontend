import React from 'react'
import Login from './pages/Login'
//import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homes from './pages/Homes';

export default function App() {
  return (
    <div>
 <BrowserRouter>
 <Routes>
 <Route path='/login' Component={Login} />
  <Route path='/' Component={Homes} />
 </Routes>
 </BrowserRouter>
    </div>
  )
}
