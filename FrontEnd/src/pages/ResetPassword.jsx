import React, { useState } from 'react'
import logo from '../assets/images/silicon_logo.svg';
import { Link } from 'react-router-dom';
import './stylesheet/resetPassword.css'

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
   
  return (
    <div className="forgotpwd-container">
      <div className="header-container">
        <div className="landing-header">
          <div className="landing-silicon-logo">
            <img
              src={logo}
              alt="silicon logo"
              className="landing-silicon-logo-img"
            />

            <p className="landing-logo-text">iliconConnect</p>
          </div>
        </div>
      </div>
      <div className="body-container">
        <div className="forgot-pwd-content-container">
          <form action="" className="forgot-pwd-form">
            <p className="forgot-pwd-text">Reset Password</p>
            <div className="forgot-pwd-email-container">
              <label className="label-input" htmlFor="">
                Enter new password
              </label>
              <input
                type="password"
                name=""
                id=""
              />
            </div>
            <div className="forgot-pwd-email-container">
              <label className="label-input" htmlFor="">
                Confirm new password
              </label>
              <input
                type="password"
                name=""
                id=""
              />
            </div>
           
            <div className="next-button-div column">
              <button  className="next-button-forgot">
                Reset Password
              </button>
              <Link to="/login" className="back-button-forgot">
                Cancel
              </Link>
            </div>
          </form>
        </div>
        <div className="login-header-body">
          <p>2024 © SiliconConnect - All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword