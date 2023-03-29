import React from 'react'
import './SignUpForm.css'
import Button from '../UI/Button'
function SignUpForm() {
    return (
        <section className='signup-container'>
            <div className='signup-form'>
                <input type="text" name="name" id="name" className='text-input' placeholder='Your Name' autoComplete='off' required />
                <input type="number" name="phone" id="phone" className='text-input' placeholder='Your Number' autoComplete='off' required />
                <input type="email" name="email" id="email" className='text-input' placeholder='Your Email' autoComplete='off' required />
                <input type="password" name="psw" id="psw" className='text-input' placeholder='Your Password' autoComplete='off' required />
                <Button btnStyle='btn--tour' btnSize='btn--large'>Register</Button>
            </div>
        </section>
    )
}

export default SignUpForm