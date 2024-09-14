import React from 'react'
import './Footer.css'
import logo from '../../assets/logo12.png'
import  user from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div  id='footer'  className='footer'>
        <div className="f-top">
            <div className="f-top-left">
                <img className='f-logo' src={logo} alt="" />
                <p>I am a Frontend developer from INDIA</p>
            </div>
            <div className="f-top-right">
                <div className="f-email-input">
                    <img src={user} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="f-sub">
                    Subscribe
                </div>
            </div>
        </div>
      <hr />
      <div className="f-botttom-left">
        2024 Dharanish.All rights reserved
<div className="f-bottom-right">
    <p>Terms of services </p>
    <p>Privacy policy</p>
    <p>Connect with me</p>
</div>
      </div>
    </div>
  )
}

export default Footer
