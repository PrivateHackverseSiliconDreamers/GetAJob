import React, { useState } from 'react';
import './stylesheet/SigninPage.css';
import logo from '../assets/images/silicon_logo.svg';
import { Link } from 'react-router-dom';

const SigninPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <div className="sigin-container">
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
        <div className="signin-container-body">
          <form className="signin-form">
            <p className="slogan-sigin">Connect, Collaborate, Succeed</p>
            <div className="user-names-sigin">
              <div className="input-container-sigin first-name-div">
                <label className='label-signin' htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  name=""
                  id="firstName"
                />
              </div>
              <div className="input-container-sigin second-name-div">
                <label className='label-signin' htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  name=""
                  id="lastName"
                />
              </div>
            </div>

            <div className="input-container-sigin">
              <label className='label-signin' htmlFor="emailSignIn">Email</label>
              <input
                type="text"
                id="emailSignIn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-container-sigin">
              <label className='label-signin' htmlFor="passwordSignIn">Password</label>
              <input
                type="password"
                id="passwordSignIn"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="input-container-sigin">
              <label className='label-signin' htmlFor="phoneNumberSignIn">Phone Number</label>
              <input
                type="password"
                id="phoneNumberSignIn"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className="privacy-policy-div">
              <input type="checkbox" name="" id="privacyPolicy" />
              <label className='privacyPolicy-text' for="privacyPolicy">
                Yes, I understand and agree to the SiliconConnect User Agreement
                and Privacy Policy.
              </label>
            </div>

            <div className="sigin-button-div">
              <button className='create-button'>Create my account</button>
              <p className='not-registered-text'>Already have an account? <Link to='/login' className='create-account'>Log in</Link> </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
