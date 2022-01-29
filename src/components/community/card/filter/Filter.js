import React from 'react'

function Filter() {
    return (
        <div className='filter__tab'>
            <h4>Filter by flair</h4>
            <ul className='filter__tab--list   flex'>
                <li>Soft paywall</li>
                <li>Video</li>
                <li>Image</li>
                <li>GIF</li>
            </ul>
        </div>
    )
}

export default Filter
