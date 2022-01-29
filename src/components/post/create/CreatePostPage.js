import React from 'react'

function CreatePostPage() {
    return (
        <div className='post__page'>
            <div className='post__page--header flex--btw p--1'>
                <h4>Create a post</h4>
                <button>DRAFTS <p>0</p></button>
            </div>
            <div className='post__page--profile--toggler flex--btw my--1'>
                <div className='flex--cen'>
                    <div className='sq__sm--dp'></div>
                    <h5>u/Clean-Fun-</h5>
                </div>
                <div></div>
            </div>
            <div className='post__page--container'>
                <ul className='post__page--tab'>
                    <li className='active'>post</li>
                    <li>images & video</li>
                    <li>link</li>
                    <li>poll</li>
                </ul>
                <form className='post__page--content'>
                    <div className='post__page--title flex--btw'>
                        <input type='text' placeholder='Title' />
                        <p>0/300</p>
                    </div>
                    <div className='post__page--text'>
                        <div className='post__page--text--nav flex--btw'>
                            <div></div>
                            <h4 className='post__page--text--toggler flex--cen'>markdown mode</h4>
                        </div>
                        <textarea placeholder='Text(optional)' />
                    </div>
                    <ul className='post__page--tags flex'>
                        <li>oc</li>
                        <li>spoiler</li>
                        <li>nsfw</li>
                        <li>flair</li>
                    </ul>
                    <div className='post__page--btns'>
                        <button>save draft</button>
                        <button>post</button>
                    </div>
                    <div className='post__page--footer'>
                        <div>
                            <input type='checkbox' id='notify' name='notify' />
                            <label htmlFor='notify'>Send me post reply notifications</label>
                        </div>
                        <a href=''>Connect accounts to share your post <sup>i</sup> </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreatePostPage
