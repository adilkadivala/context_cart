import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/auth/signIn.css";

const SignUp = () => {
  return (
    <>
      <div className="container">
        <div className="login-icon">
          <i className="glyphicon glyphicon-tint"></i> DigitalOcean
        </div>
        <div className="login-form">
          <div className="login-title">Log In</div>
          <div className="login-input-parts">
            <input className="login-input" placeholder="name" />
            <input className="login-input" placeholder="Email Address" />
            <input className="login-input" placeholder="Password" />
            <input
              className="login-input button"
              type="button"
              value="Log In"
            />
          </div>
          <div className="login-forgot">Forgot password?</div>
        </div>
        <div className="login-signup">
          Already have an account? <Link to="/login">Sign in</Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
