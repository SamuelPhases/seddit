import React from 'react'

function NavbarNR() {
    return (
        <>
            <div className='nav__search--group flex--btw'>
                <div className='nav__logo'>
                    <h4>sedd<span>i</span>t</h4>
                </div>
                <form className='nav__form'>
                    <label htmlFor='search'></label>
                    <input  type='search' placeholder='Search Seddit' />
                </form>
            </div>
            <div className='nav__btn--links flex--btw'>
                <ul className='flex'>
                    <li className='nav__btn btn btn--lg btn--secondary'>log in</li>
                    <li className='nav__btn btn btn--lg btn--primary'>sign up</li>
                </ul>
                <button className='nav__btn--toggler flex'>
                    Open
                </button>
            </div> 
        </>
    )
}

export default NavbarNR
