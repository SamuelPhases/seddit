import React from 'react'

function NavbarR() {
    return (
        <div className='nav__reg flex--btw'>
            <div className='nav__reg--logo nav__logo'>
                <h4>sedd<span>i</span>t</h4>
            </div>
            <div className='nav__reg--dropdown'>
                <div className='nav__reg--dropdown--text flex--btw'>
                    <h4>home</h4>
                </div>
                <div className='nav__reg--dropdown--list'>
                    <input type='text' placeholder='Filter' />
                    <h6>feeds</h6>
                    <ul>
                        <li className='nav__dropdown--link'>Home</li>
                        <li className='nav__dropdown--link'>popular</li>
                        <li className='nav__dropdown--link'>all</li>
                        <li className='nav__dropdown--link'>seddit live</li>
                    </ul>
                    <h6>other</h6>
                    <ul>
                        <li className='nav__dropdown--link'>user settings</li>
                        <li className='nav__dropdown--link'>messages</li>
                        <li className='nav__dropdown--link'>create post</li>
                        <li className='nav__dropdown--link'>top communities</li>
                        <li className='nav__dropdown--link'>notifications</li>
                        <li className='nav__dropdown--link'>coins</li>
                        <li className='nav__dropdown--link'>premium</li>
                        <li className='nav__dropdown--link'>avatar</li>
                        <li className='nav__dropdown--link'>powerups</li>
                        <li className='nav__dropdown--link'>talk</li>
                    </ul>
                </div>
            </div>
            <form className='nav__reg--form input__form--container'>
                <label htmlFor='search'></label>
                <input  type='search' className='input__form' id='search' placeholder='Search Seddit' />
            </form>
            <ul className='nav__reg--pages flex--btw nav__reg--line'>
                <li>P</li>
                <li>a</li>
                <li>v</li>
            </ul>
            <ul className='nav__reg--pages flex--btw'>
                <li>c</li>
                <li>n</li>
                <li>a</li>
            </ul>
            <button className='nav__reg--coins'>free coins</button>
            <div className='nav__reg--profile--container flex--btw'>
                <div className='nav__reg--profile flex--cen'>
                    <div className='sq__sm--dp'></div>
                    <div>
                        <h5>Clean-Fun-</h5>
                        <h5>1 Pros</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarR
