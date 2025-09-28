import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Navbar from './components/Navbar'
import Routing from './utils/Routing.jsx'
import Footer from './components/Footer.jsx'



const App = () => {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routing/>
      <Footer />
      
    </BrowserRouter>

  )
}

export default App