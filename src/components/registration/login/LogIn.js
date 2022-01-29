import React from 'react'

function LogIn() {
    return (
        <div  className='reg__container'>
            <div className='reg__container--wallpaper'></div>
            <div className='reg__container--content'>
                <div className='reg__container--inner'>
                    <div className='reg__container--header'>
                        <h2>Login</h2>
                        <p className='my--1'>By continuing,you agree to our <a href=''>User agreement</a> and <a href=''>privacy poicy</a> </p>
                    </div>
                    <form className='reg__container--form'>
                        <div className='reg__container--btns'>
                            <button>continue with google</button>
                            <button>continue with Clean</button>
                        </div>
                        <div className='reg__container--split   my--1'>
                            <h4>or</h4>
                        </div>
                        <div className='reg__container--input'>
                            <label htmlFor='username' >username</label>
                            <input type='text' id='username' name='username' placeholder='Username'/>
                            {/* <input type='text' name='username' placeholder='username' /> */}
                        </div>
                        <div className='reg__container--input'>
                            <label htmlFor='email' >email</label>
                            <input type='text' name='email' placeholder='Email' id='email' />
                            {/* <input type='text' name='email' placeholder='email' /> */}
                        </div>
                        <button className='reg__container--submit' type='submit' >login</button>
                        <p>Forgot your <a href=''>username</a> or <a href=''>password</a></p>
                        <h5>New to Seddit? <a href=''>sign up</a>  </h5>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default LogIn
