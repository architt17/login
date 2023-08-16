import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser, faLock,faEnvelope } from '@fortawesome/free-solid-svg-icons'

const SignUpForm: React.FC = () => {
  return (
    <div className='container'>
      <title>Signup - Algorooms</title>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="" className="sign-up-form">
            <img className="logo" src="logo121.png" alt="Italian Trulli" style={{ width: "65%" }} />
            <img className="reslogo1" src="icon2.png" alt="Logo" />
            <h2 className="title">Sign Up</h2>
            
            <div className="input-field">
              
              <i className='icon'><FontAwesomeIcon icon={faUser} /></i>
              <input type="text" placeholder="Name" required />
            </div>
            <div className="input-field">
              <i  className='icon'><FontAwesomeIcon icon={faUser} /></i>
              <input type="text" placeholder="Username" required />
            </div>
            <div className="input-field">
              <i  className='icon'><FontAwesomeIcon icon={faEnvelope} /></i>
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-field">
              <i  className='icon'><FontAwesomeIcon icon={faLock} /></i>
              <input type="password" placeholder="Password" required />
            </div>
            <div className="input-field">
              <i className='icon'><FontAwesomeIcon icon={faLock} /></i>
              <input type="password" placeholder="Confirm Password" required />
            </div>
            <input type="submit" value="Sign Up" className="btn solid" />

            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <img src='google (1).png' style={{ width: "55%" }} />
              </a>
            </div>
            
          </form>
          <div className="content">
          <span className='cont'> 
                <h3 style={{marginTop:"5%"}}>Already have an account?</h3>
                <p style={{marginTop:"1%", marginBottom:"2%"}}>Login to access your account and explore.</p>
                <Link legacyBehavior href="/" style={{marginTop:"5%"}}>
                  <a className="btn-transparent" id="sign-up-btn">Log In</a>
                </Link>
                </span>
            <div className="panel right-panel">
            
            </div>
            
            <img src="create-account.gif" className="image" alt="Signup" style={{ width: "60%" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
