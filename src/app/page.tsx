import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser, faLock } from '@fortawesome/free-solid-svg-icons'
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { IonIcon } from '@ionic/react';
// import { heart } from 'ionicons/icons';
// const firebaseConfig = {
//   apiKey: "AIzaSyB9_Ij5zkraSsK9OaUe7JmRlXa2PxESYqQ",
//   authDomain: "signup-88414.firebaseapp.com",
//   projectId: "signup-88414",
//   storageBucket: "signup-88414.appspot.com",
//   messagingSenderId: "97383372130",
//   appId: "1:97383372130:web:a6d4e9044e74c80697483b",
//   measurementId: "G-4M0KCG9KXN"
// };
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const LoginPage = () => {
  <link rel="icon" href="/favicon.ico" />
  return (
    <div className="container">
      <title>Login - Algorooms</title>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Sign up and discover a great amount of new opportunities.</p>
            <Link legacyBehavior href="/signup"> 
              <a className="btn-transparent" id="sign-up-btn">Sign Up</a>
            </Link>
          </div>
          <img src="login121.gif" style={{ width: "90%" }} alt="Login GIF" />
        </div>
      </div>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form" style={{ width: "150%" }}>
            <img className="logo121" src="logo121.png" alt="Logo" style={{width:"40%"}}/>
            <h2 className="title">Sign In</h2>
            <div className="input-field">
            <i  className='icon'><FontAwesomeIcon icon={faUser}/></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i  className='icon'><FontAwesomeIcon icon={faLock} /></i>
              <input type="password" placeholder="Password" />
            </div>
            <button className="btn solid">Login</button>
          </form>
          <p className="social-text1">Or Sign up with social platforms</p>
          <div className="icons">
            <a href="#" className="social-icon">
              <img className="gog" src="google (1).png" alt="Google Icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
