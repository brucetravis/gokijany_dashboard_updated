import React from 'react'
import './Registration.css'
import { useNavigate } from 'react-router-dom'

export default function Registration() {

  // useNavigate hook to navigate to another page
  const navigate = useNavigate()

  return (
    <div className='registration-page'>
      <div className='registration-image '>
        
        <div className='image-overlay-content'>
          <img 
            src={require('../../images/gokijany-logo-nobg.png')}
            alt='logo'
            className='reg-image'
          />

          <p className='text-white'>
            We provide companies with a systematic framework to measure, manage and reduce<br />
            emissions across their value chains.
          </p>

          <input 
            type='button' 
            value='Signup'
            className='signup-btn'
          />
        </div>
        
      </div>

      <div className='registration-form-div '>
        <div>
          <div className='mb-5'>
            <h4 className='fw-bold'>
              Hello Again!
            </h4>
            <p className='fs-5'>Welcome Back</p>
          </div>
            <form>
              <input
                type='email'
                placeholder='Email Address'
                name='email'
              />

              <input
                type='password'
                placeholder='Password'
                // name='password'
                className='mb-5'
              />
              
              <input 
                type='button' 
                value='Login'
                className='login-button'
                onClick={() => navigate('/dashboard')}
              />
            </form>
        </div>
      </div>
    </div>
  )
}
