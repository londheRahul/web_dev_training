import gsap from 'gsap'
import React from 'react'
import { useRef } from 'react';
import { NavLink } from 'react-router-dom'



function Navbar() {
  const logo = useRef(null);
  const NavLinks = useRef(null);
  const navbartimeline = gsap.timeline();
  navbartimeline.fromTo(NavLink.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, ease: "bounce.out" })
  const logoanim = () => {
    gsap.to(logo.current, {
      duration: 1,
      rotate: "360",
    })
  }
  const logoanimout = () => {
    gsap.to(logo.current, {
      duration: 1,
      rotate: "0",
    })
  }


  return (
    <nav ref={NavLink} className="navbar z-300 fixed w-full flex items-center justify-between h-16 bg-gray-100/95 px-50 py-10 ">
      <div className="flex gap-2 items-center">

        <img
          ref={logo}
          onMouseOver={logoanim}
          onMouseOut={logoanimout}
          src="/src/assets/Logo.png"
          alt="Logo"
          className="h-9 w-9 object-contain p-0 mb-0"
        />
        <h1 className=" text-2xl font-semibold m-0 p-0">Cupertino</h1>
      </div>



      <div  className=" link text-lg flex gap-4  ">
        <NavLink to="/products" className='opacity-40 hover:opacity-100 '>Products</NavLink>
        <NavLink to="/services" className={'opacity-40 hover:opacity-100'}>Services</NavLink>
        <NavLink to="/solutions" className={'opacity-40 hover:opacity-100'}>Solutions</NavLink>
        <NavLink to="/suports" className={'opacity-40 hover:opacity-100'}>Supports</NavLink>
      </div>
      <div className='flex gap-5 mr-5'>
        <NavLink to="/products"><img src="/src/assets/Search.png" alt="Search" className="h-6 w-6  object-contain p-0 mb-0 " /></NavLink>
        <NavLink to="/products"><img src="/src/assets/Persone.png" alt="Profile" className="h-6 w-6 object-contain p-0 mb-0 " /></NavLink>
        <NavLink to="/products"><img src="/src/assets/Persone.png" alt="Profile" className="h-6 w-6 object-contain p-0 mb-0 " /></NavLink>
      </div>
    </nav>
  )
}

export default Navbar