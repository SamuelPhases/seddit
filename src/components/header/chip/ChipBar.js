import React from 'react'

function ChipBar() {
    return (
        <div className='chip flex--btw'>
            <ul className='chip__bar flex'>
                <li className='flex active'>best</li>
                <li className='flex'>hot</li>
                <li className='flex'>new</li>
                <li className='flex'>top</li>
                <li className='flex'>rising</li>
            </ul>
            <div className='chip__toggler'>Chip</div>
        </div>
    )
}

export default ChipBar
