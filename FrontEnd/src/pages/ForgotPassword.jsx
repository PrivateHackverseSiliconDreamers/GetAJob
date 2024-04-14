import React, { useState } from 'react';
import logo from '../assets/images/silicon_logo.svg';
import { Link } from 'react-router-dom';
import './stylesheet/ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
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
            <p className="forgot-pwd-text">Forgot Password</p>
            <div className="forgot-pwd-email-container">
              <label className="label-input" htmlFor="emailForgot-pwd">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name=""
                id="emailForgot-pwd"
              />
            </div>
            <div className="account-recover-text-div">
              <p>
                If the email is associated with an account, you'll receive
                instructions on how to recover your account and modify your
                password
              </p>
            </div>
            <div className="next-button-div column">
              <Link to="/confirm-reset-password" className="next-button-forgot">
                Next
              </Link>
              <Link to="/login" className="back-button-forgot">
                Back
              </Link>
            </div>
          </form>
        </div>
        <div className="login-header-body">
          <p>2024 © SiliconConnect - All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
