import React, { useState } from "react";
import "./stylesheet/SigninPage.css";
import logo from "../assets/images/silicon_logo.svg";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { escapedPattern } from "../context/data";
import Logo from "../components/Logo";

const SigninPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [passwordIsVisible, setPasswordIsVisible] = useState("");

  let handleOnChangePhone = (value) => {
    setPhone(value);
  };

  return (
    <div className="sigin-container">
     <Logo />
      <div className="body-container">
        <div className="signin-container-body">
          <form className="signin-form">
            <p className="slogan-sigin">Connect, Collaborate, Succeed</p>
            <div className="user-names-sigin">
              <div className="input-container-sigin first-name-div">
                <label className="label-signin" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  name=""
                  id="firstName"
                />
              </div>
              <div className="input-container-sigin second-name-div">
                <label className="label-signin" htmlFor="lastName">
                  Last Name
                </label>
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
              <label className="label-signin" htmlFor="emailSignIn">
                Email
              </label>
              <input
                type="text"
                id="emailSignIn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-container-sigin password-signin-div">
              <label className="label-signin" htmlFor="passwordSignIn">
                Password
              </label>
              <input
                type={passwordIsVisible ? "text" : "password"}
                id="passwordSignIn"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                 required
                  pattern={escapedPattern}
              />
              {passwordIsVisible && (
                <div className="eyes_style2_signin">
                  <AiOutlineEye
                    size={24}
                    onClick={() => setPasswordIsVisible(!passwordIsVisible)}
                  />
                </div>
              )}
              {!passwordIsVisible && (
                <div className="eyes_style2_signin">
                  <AiOutlineEyeInvisible
                    size={24}
                    onClick={() => setPasswordIsVisible(!passwordIsVisible)}
                  />
                </div>
              )}
            </div>
            <div className="password-error">
              Le mot de passe doit au moins contenir 8 caractères,avec au moins
              <ul style={{ marginLeft: "1rem" }}>
                {" "}
                <li>une majuscule</li>, <li>une minuscule</li>,{" "}
                <li>un chiffre et un caractère spécial</li>
              </ul>
            </div>

            <div className="input-container-sigin">
              <label className="label-signin" htmlFor="phoneNumberSignIn">
                Phone Number
              </label>
              <PhoneInput
                country={"cm"}
                value={phone}
                onChange={handleOnChangePhone}
                autoCorrect="off"
                inputStyle={{
                  width: "100%",
                  height: "2.5rem",
                  fontFamily: "Raleway",
                  fontSize: "1rem",
                  borderRadius: "6px",
                }}
              />
            </div>

            <div className="privacy-policy-div">
              <input type="checkbox" name="" id="privacyPolicy" />
              <label className="privacyPolicy-text" htmlFor="privacyPolicy">
                Yes, I understand and agree to the SiliconConnect User Agreement
                and Privacy Policy.
              </label>
              l
            </div>

            <div className="sigin-button-div">
              <button className="create-button">Create my account</button>
              <p className="not-registered-text">
                Already have an account?{" "}
                <Link to="/login" className="create-account">
                  Log in
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
