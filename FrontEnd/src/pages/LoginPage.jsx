import { useState } from "react";
import logo from "../assets/images/silicon_logo.svg";
import "./stylesheet/LoginPage.css";
import { Link, Form } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { escapedPattern } from "../context/data";
import Logo from "../components/Logo";

export const action = async ({ request }) => {
  let formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log(updates);
};
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordIsVisible, setPasswordIsVisible] = useState("");

  return (
    <div className="login-container">
     <Logo />
      <div className="body-container">
        <div className="body-container-content">
          <Form method="post" className="login-form">
            <p className="login-text">Login in to SiliconConnect</p>
            <div className="email-div-login">
              <label className="label-input" htmlFor="Email-login">
                Email
              </label>
              <input
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                id="Email-login"
                type="email"
                required
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
                  name="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  id="Password-login"
                  type={passwordIsVisible ? "text" : "password"}
                  required
                  pattern={escapedPattern}
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
              <div className="password-error">
                Le mot de passe doit au moins contenir 8 caractères,avec au
                moins
                <ul style={{ marginLeft: "1rem" }}>
                  {" "}
                  <li>une majuscule</li>, <li>une minuscule</li>,{" "}
                  <li>un chiffre et un caractère spécial</li>
                </ul>
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
                  <Link
                    className="forgot-password"
                    to="/request-reset-password"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <div className="login-div-button">
                <button className="login-btn" type="submit">
                  Login
                </button>
                <p className="not-registered-text">
                  Not registered yet?{" "}
                  <Link className="create-account" to="/">
                    Create an account
                  </Link>
                </p>
              </div>
            </div>
          </Form>
        </div>

        <div className="login-header-body">
          <p>2024 © SiliconConnect - All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
