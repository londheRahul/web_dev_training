import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Services from '../components/Services'
import Solutions from '../components/Solutions'
import Suports from '../components/Suports'

import Products from '../components/Products'

function Routing() {
  return (
    <Routes>
        <Route path="/" element={<Products />} /> 
         <Route path="/products" element={<Products />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/suports" element={<Suports/>} />

    </Routes>
  )
}

export default Routing