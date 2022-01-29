import React from 'react'

function About() {
    return (
        <div className='about__community'>
            <div className='about__community--header flex--btw'>
                <h4>about community</h4>
            </div>
            <div className='about__community--content'>
                <h3>The most interesting place on reddit</h3>
                <div className='about__community--info'>
                    <div className='about__community--info--split flex--btw'>
                        <div>
                            <h4>3.9m</h4>
                            <h6>members</h6>
                        </div>
                        <div>
                            <h4>11.9k</h4>
                            <h6>online</h6>
                        </div>
                    </div>
                </div>
                <div className='about__community--date'>
                    <h3>Created Sep 16, 2021</h3>
                    <button>Create Post</button>
                </div>
                <div className='about__community--flair'>
                    <div className='about__community--flair--header flex--btw'>
                        <h6>user flair preview</h6>
                    </div>
                    <div className='about__community--flair--list'>
                        <div>
                            <div className='sq__md--dp'></div>
                            <h6>Clean-Fun-</h6>
                        </div>
                    </div>
                </div>
                <div className='about__community--options flex--btw'>
                    <h4>Community options</h4>
                </div>
            </div>
        </div>
    )
}

export default About
