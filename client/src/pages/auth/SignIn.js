import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/auth/signIn.css";

const SignIn = () => {
  return (
    <>
      <div className="container">
        <div className="login-icon">
          <h4>Context Login</h4>
        </div>
        <div className="login-form">
          <div className="login-title">Log In</div>
          <div className="login-input-parts">
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
        {/* <div className="login-signup">
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div> */}
      </div>
    </>
  );
};

export default SignIn;
