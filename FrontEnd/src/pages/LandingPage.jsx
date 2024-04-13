import "./stylesheet/LandingPage.css";
import logo from "../assets/images/silicon_logo.svg";
import heroIcon from "../assets/images/hero-image.svg";
import { Navigate, useNavigate } from "react-router";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleNavigate = ()=>{
    navigate("/login",)
  }

  return (
    <div className="container">
      <div className="landing-header">
        <div className="landing-silicon-logo">
          <img src={logo} alt="silicon logo" />
          <span className="landing-logo-text"> iliconConnect</span>
        </div>
        <div className="landing-right">
          <span>Create an account</span>
          <button className="landing-login-button">Login</button>
        </div>
      </div>
      <div className="landing-body">
        <div>
          <h1>
            SiliconConnect: Empowering{" "}
            <span className="landing-highlight">Polytechnique Yaoundé's</span> Students
            and Alumni, One Opportunity at a Time
          </h1>
          <p className="landing-body-text">
            Welcome to <span >SiliconConnect</span>, your
            gateway to a world of opportunities! Whether you're a student
            looking for internships or an alumni seeking new career heights, our
            platform is here to support you. Join us today and unlock a world of
            possibilities!
          </p>
          <button className="landing-start" onClick={handleNavigate}>
            <span>Get Started</span>
          </button>
        </div>
        <img src={heroIcon} alt="hero-icon" />
      </div>
    </div>
  );
};

export default LandingPage;
