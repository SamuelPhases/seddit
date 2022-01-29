import React from 'react'
import NavbarNR from './NavbarNR'
import NavbarR from './NavbarR'

function Navbar() {
    return (
        <nav className='nav flex--btw bg--white'>
            {/* <NavbarNR/> */}
            <NavbarR/>
        </nav>
    )
}

export default Navbar
