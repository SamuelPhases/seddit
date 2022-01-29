import React from 'react'
import Nav from './nav/Nav'

function Message() {
    return (
        <div className='message'>
            <Nav/>
            <form>
                <h2>send a private message</h2>
                <div>
                    <label htmlFor='to' >to <span>(username, or /r/name for that subreddit's moderators)</span></label>
                    <input id='to' name='to'  />
                </div>
                <div>
                    <label htmlFor='subject'>subject</label>
                    <select id='subject' name='subject'>
                        <option selected  value='other'>other</option>
                        <option value='politics'>politics</option>
                    </select>
                    <input placeholder='Type your subject here' />
                </div>
                <div>
                    <label htmlFor='message'>message</label>
                    <textarea id='message' name='message' />
                </div>
                <button>send</button>
            </form>
        </div>
    )
}

export default Message
