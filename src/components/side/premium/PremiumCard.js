import React from 'react'

function PremiumCard() {
    return (
        <div className='premium__card border bg--white'>
            <div className='premium__card--content flex--cen'>
                <div className='premium__card--logo'></div>
                <div className='premium__card--text'>
                    <h5>Seddit Premium</h5>
                    <h6>The best Seddit experience, with monthly Coins</h6>
                </div>
            </div>
            <div className='premium__card--container flex--cen my--1 '>
                <button className='premium__card--btn'>Try Now</button>
            </div>
        </div>
    )
}

export default PremiumCard
