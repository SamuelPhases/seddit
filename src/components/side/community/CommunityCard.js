import React from 'react'
import CommunityCardItem from './communitycarditem/CommunityCardItem'

function CommunityCard() {
    return (
        <div className='community__card border'>
            <div className='community__card--header'>
                <h3>Top Gaming Communities</h3>
            </div>
            <div className='community__card--list'>
                <CommunityCardItem/>
                <CommunityCardItem/>
                <CommunityCardItem/>
                <CommunityCardItem/>
                <CommunityCardItem/>
            </div>
            <div className='flex--cen my--1'>
                <a href='' className='btn btn--lg btn--primary community__card--all '>view all</a>
            </div>
            <div className='flex  p--1'>
                <a href='' className='community__card--btn'>top</a>
                <a href='' className='community__card--btn'>near you</a>
                <a href='' className='community__card--btn'>aww</a>
                <a href='' className='community__card--btn'>sports</a>
            </div>
        </div>
    )
}

export default CommunityCard
