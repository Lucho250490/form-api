import React from 'react'

import "./styles/Navbar.css"

const Navbar = ({handleOnClickShow}) => {
  
  return (
    <nav className='Navbar'>
      <h1 className='Navbar__title'>Creative Movie Users</h1>
      <button className='Navbar__btn' onClick={handleOnClickShow} > <i  className='bx bx-cross'></i> <h3> Create New User </h3> </button>
    </nav>
  )
}

export default Navbar