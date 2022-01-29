import React from 'react'
import PopularCardItem from './popularCardItem/PopularCardItem'

function PopularCard() {
    return (
        <div className='popular__card bg--white border'>
            <PopularCardItem/>
            <PopularCardItem/>
            <PopularCardItem/>
            <PopularCardItem/>
            <PopularCardItem/>
        </div>
    )
}

export default PopularCard
