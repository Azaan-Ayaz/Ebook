import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Writing from './Pages/Services/Writing'
import Consultancy from './Pages/Services/Consultancy'
import Publishing from './Pages/Services/Publishing'

const Router = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/ebook-writing' element={<Writing/>}/>
        <Route path='/ebook-consultancy' element={<Consultancy/>}/>
        <Route path='/ebook-publishing' element={<Publishing/>}/>
        </Routes>   
    </div>
  )
}

export default Router
