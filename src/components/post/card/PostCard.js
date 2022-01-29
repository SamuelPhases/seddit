import React from 'react'

function PostCard() {
    return (
        <div className='post m--3'>            
            <div className='post__card flex'>
                <div className='post__vote'>
                    <h4>100.9K</h4>
                </div>          
                <div className='post__content flexed'>
                    <div className='post__header flex--btw bg--white  px--1'>
                        <div className='post__details flex--cen'>
                            <div className='post__origin  flex--cen'>
                                <div className='post__dp sm--dp'></div>
                                <h6>r/interesting</h6>
                            </div>
                            <div className='post__user flex'>
                                <h6 className='text-200'>Posted by u/ahgfhhags</h6>
                                <h6 className='text-200'>4 hours ago</h6>
                            </div>
                            <div className='post__reaction'></div>
                        </div>
                        <button className='post__join--btn btn btn-sm nav__btn--primary'>join</button>
                    </div>
                    <div className='post__body bg--white flexed--start'>
                        <h3 className='post__title'>
                        Elementum pulvinar etiam non quisque non tellus orci...
                        </h3>
                        <div className='post__media bg--danger'></div>
                        <div className='post__footer flex'>
                            <button className='post__btn--footer'>comments</button>
                            <button className='post__btn--footer'>share</button>
                            <button className='post__btn--footer'>save</button>
                            <button className='post__btn--footer'></button>
                        </div>
                    </div>
                </div>          
            </div>
        </div>
    )
}

export default PostCard
