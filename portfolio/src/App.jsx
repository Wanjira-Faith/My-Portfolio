import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home'


function App() {
  return (
    <Router> 
     <Routes>
      <Route exact path='/' element={<Home/>}/>
      {/* <Route path='/projects' element={<Project/>}/> */}
      {/* <Route path='/contacts' element={<Contact />}/> */}
      {/* <Route path='/about' element={<About/>}/> */}
    </Routes>
    </Router>
  )
}

export default App

