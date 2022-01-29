import React from 'react'

function TrendCard() {
    return (
        <section className='trend__card bg--danger'>
            <div className='trend__card--img'></div>
            <div className='trend__card--text'>
                <h4>Computer Gala</h4>
                <h5>[NFL On CBS]: GeForce Now Database Leaks God of War, Returnal,... </h5>
                <div className='trend__card--user flex--start'>
                    <div className='sm--dp'></div>
                    <h6>r/Superpicks and more</h6>
                </div>
            </div>
        </section>
    )
}

export default TrendCard
