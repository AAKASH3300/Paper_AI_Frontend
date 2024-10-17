import React from 'react';
import './SignIn.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <img src="path-to-your-logo.png" alt="Institute Logo" className="logo" />
        <h2>Login</h2>
        <p>Enter your account details</p>
        <form>
          <input type="email" placeholder="NITK Email Id" required />
          <input type="password" placeholder="Password" required />
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="login-button">Login</button>
          <div className="or-divider">OR</div>
          <button type="button" className="admin-button">Login as admin</button>
        </form>
        <div className="signup-option">
          <p>Don't have an account?</p>
          <button type="button" className="signup-button">Sign Up</button>
        </div>
      </div>
      <div className="welcome-section">
        <h1>Welcome to student portal</h1>
        <p>Login to access your account</p>
        <img src="path-to-your-illustration.png" alt="Welcome Illustration" />
      </div>
    </div>
  );
};

export default Login;
