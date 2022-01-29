import React from 'react'

function ProfileChip() {
    return (
        <div className='chip'>
            <ul className='chip__bar flex'>
                <li className='flex active'>new</li>
                <li className='flex'>hot</li>
                <li className='flex'>top</li>
            </ul>
        </div>
    )
}

export default ProfileChip
