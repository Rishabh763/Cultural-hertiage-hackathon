import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SunTemple from './Page/SunTemple'
import Home from './components/Home'
import TajMahal from './Page/TajMahal'
import CSMT from './Page/CSMT'
import Hampi from './Page/Hampi'
import ChittorgarhFort from './Page/ChittorgarhFort'
import Live from './Page/Live'
import Contact from './Page/Contact'


function App() {
 
 
  
  return (
    <>
      
    <Routes>
        {/* <Route path='/'  /> */}
        <Route path='/' element={<Home />} />
        <Route path='/SunTemple' element={<SunTemple /> } />
        <Route path='/ChhatrapatiShivajiMaharajTerminus' element={<CSMT /> } />
        <Route path='/HampiSculpture' element={<Hampi /> } />
        <Route path='/TajMahal' element={<TajMahal /> } />
        <Route path='/ChittorgarhFort' element={<ChittorgarhFort /> } />
        <Route path='/LiveStream' element={<Live/> } />
        <Route path='/ContactUs' element={<Contact/> } />
      </Routes>
    </>
  )
}

export default App