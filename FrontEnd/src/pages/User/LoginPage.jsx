import React, { useState } from 'react';
import logo from '../../assets/images/silicon_logo.svg'
import heroIcon from '../../assets/images/hero-image.svg';
import './stylesheet/LoginPage.css';
import { NavLink, Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordIsVisible, setPasswordIsVisible] = useState('');

  return (
    <div className="login-container">
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
        <div className="body-container-content">
          <form action="" className="login-form">
            <p className="login-text">Login in to SiliconConnect</p>
            <div className="email-div-login">
              <label className="label-input" htmlFor="Email-login">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="Email-login"
                type="text"
              />
            </div>
            <div className="password-div-login">
              <div className="password-div-login-content">
                <label className="label-input" htmlFor="Password-login">
                  Password
                </label>
                <input
                  className="input-password-style"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="Password-login"
                  type={passwordIsVisible ? 'text' : 'password'}
                />

                {passwordIsVisible && (
                  <div className="eyes_style2">
                    <AiOutlineEye
                      size={24}
                      onClick={() => setPasswordIsVisible(!passwordIsVisible)}
                    />
                  </div>
                )}
                {!passwordIsVisible && (
                  <div className="eyes_style2">
                    <AiOutlineEyeInvisible
                      size={24}
                      onClick={() => setPasswordIsVisible(!passwordIsVisible)}
                    />
                  </div>
                )}
              </div>

              <div className="password-div-login-checks">
                <div className="login-check-div">
                  <input
                    type="checkbox"
                    className="checkbox-label"
                    name=""
                    id="rememberMe"
                  />
                  <label htmlFor="rememberMe" className="remember-me">
                    Remember Me
                  </label>
                </div>

                <Link
                  className="forgot-password"
                  to="/request-reset-password"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <div className="login-div-button">
              <button className="login-btn">Login</button>
              <p className="not-registered-text">
                Not registered yet?{' '}
                <Link className="create-account" to="/signin">
                  Create an account
                </Link>
              </p>
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

export default LoginPage;
