import React from 'react'

function ProfileCard() {
    return (
        <div className='profile__card'>
            <form className='profile__card--header flexed'>
                <div className='profile__card--content'>
                    <div className='profile__card--bg'>
                        <label htmlFor='background-image'>B</label>
                        <input id='background-image' type='file' name='background-image' />
                    </div>
                    <div className='profile__card--img'>
                        <div className='profile__card--pp'></div>
                        <label htmlFor='profile-picture'>P</label>
                        <input id='profile-picture' type='file' name='profile-picture' />
                        <h4>u/Clean-Fun-</h4>
                    </div>
                </div>
                    <a  href='' className='profile__card--link'>S</a>
            </form>
            <a href='' className='profile__card--avatar--link'>Create avatar</a>
            <div className='profile__card--info flex--btw'>
                <div>
                    <h4>Karma</h4>
                    <p><span>1</span></p>
                </div>
                <div>
                    <h4>Cake day</h4>
                    <p><span>September 11, 2021</span></p>
                </div>
            </div>
            <a href='' className='profile__card--post--link'>new post</a>
            <ul className='profile__card--hide'>
                <li><a href=''>profile moderation</a></li>
                <li>Add to Custom Feed</li>
            </ul>
            <button className='profile__card--toggler'>fewer options</button>
        </div>
    )
}

export default ProfileCard
