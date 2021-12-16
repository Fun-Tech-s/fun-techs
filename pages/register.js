import React from 'react';

function register(props) {
    return (
        <div className="padding">
            <div className='fit'>
                <div className='padding form card'>
                    <div className='header h1 text-center'>Sign Up</div>
                    <div className='text-center section'>
                        Create an account for free, Learn at your own pace.
                    </div>

                    <div className='section'>
                        <label> Fullname </label>
                        <input type="text" class="input bordered full-width padding" placeholder="Enter your full name" />
                    </div>
                    <div className='section'>
                        <label> Email </label>
                        <input type="email" class="input bordered full-width padding" placeholder="user@email.com" />
                    </div>
                    <div className='section'>
                        <label> Password </label>
                        <input type="password" class="input bordered full-width padding" placeholder="Enter your password" />
                    </div>
                    <div className='section'>
                        <label>Confirm Password </label>
                        <input type="password" class="input bordered full-width padding" placeholder="Confirm your password" />
                    </div>
                    <div className='section'>
                        <button className="button indigo card full-width text-white">Create Account </button>
                    </div>
                    <div className='section'>
                        <div className="border full-width padding pointer hover-light text-center">
                          <span><img src='/img/google.ico' className='height-20 fab icon' alt='google logo'/> </span>
                          <span>Continue With Google</span>
                         </div>
                    </div>
                    <div className="hr margin-top-30"> </div>
                    <div className='section text-center padding-20'>
                        Already have an Account? <a href='login'>Login</a>
    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default register;