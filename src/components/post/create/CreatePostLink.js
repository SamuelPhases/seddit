import React from 'react'

function CreatePostLink() {
    return (
        <div className='create__post'>
            <div className='create__post--link flex--btw'>
                <a href='' className='lg--dp'></a>
                <a href='' className='input__form--container   create__post--input--link'>
                    <input placeholder='Create Post' className='input__form' />
                </a>
                <div className='create__post--icon--group flex'>
                    <a href=''  className='create__post--icon  flex--cen'>P</a>
                    <a href=''  className='create__post--icon flex--cen'>L</a>
                </div>
            </div>
        </div>
    )
}

export default CreatePostLink
