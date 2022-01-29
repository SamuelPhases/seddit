import React from 'react'

function ProfileNav() {
    return (
        <div className='profile__nav--container'>
            <ul className='profile__nav flex'>
                <li className='active'>overview</li>
                <li>posts</li>
                <li>comments</li>
                <li>saved</li>
                <li>hidden</li>
                <li>upvoted</li>
                <li>downvoted</li>
                <li>awards received</li>
                <li>awards given</li>
            </ul>
        </div>
    )
}

export default ProfileNav
