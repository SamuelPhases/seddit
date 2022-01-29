import React from 'react'

function PopularCardItem() {
    return (
        <div className='pc__item '>
            <div className='pc__item--header flex--btw'>
                <h5>Popular communities</h5>
            </div>
            <ul className='pc__item--list  flex'>
                <li>Ask Seddit</li>
                <li>NoStupidQuestions</li>
                <li>DestinyTheGame</li>
                <li>StardewValley</li>
                <li>FortniteCompetitive</li>
                <li>NoStupidQuestions</li>
                <li>DestinyTheGame</li>
                <li>StardewValley</li>
                <li>FortniteCompetitive</li>
            </ul>
            <button>See more</button>
        </div>
    )
}

export default PopularCardItem
