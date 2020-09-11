import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link } from 'react-router-dom';
import './Auth.scss';

class Auth extends React.Component {
  /*
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }
  */

  loginClickEvent = (e) => {
    e.preventDefault();
    // const googleProvider = new firebase.auth.GoogleAuthProvider();
    // const emailProvider = new firebase.auth.EmailAuthProvider();
    // const emailProvider = firebase.auth().createUserWithEmailAndPassword();
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    // firebase.auth().createUserWithEmailAndPassword(email.value, password.value);
    // promise.catch((err) => alert(err.message))
    // const promise = new firebase.auth().createUserWithEmailAndPassword();
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
      .then(() => console.warn('pass'))
      .catch((err) => console.warn('faild', err));
    // if (firebase.auth().signInWithEmailAndPassword(email.value, password.value)) {
    // console.warn('pass');
    // } else {
    // console.warn('faild');
    // }

    // firebase.auth().signInWithEmailAndPassword(email.value, password.value);
    // firebase.auth().createUserWithEmailAndPassword(emailProvider);
    // firebase.auth().signInWithPopup(googleProvider);
    // alert('Signed Up');
  }

  signUpClickEvent = (e) => {
    e.preventDefault();
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    // const check = firebase.auth().signInWithEmailAndPassword(email.value, password.value);
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value);

    // .catch((err) => {
    // console.warn('already send email to sign up ', err);
    // return 'err';
    // });
  }

  render() {
    return (
      <div className="Auth">
        <div className="container">
          <div className="form">
            <h2>Login Form</h2>
            <form>
              <div className="inputBox">
                <input type="email" name=""placeholder="email" id="email"></input>
              </div>
              <div className="inputBox">
                <input type="password" name="" placeholder="password" id="password"></input>
              </div>
              <div className="inputBox">
                <input type="submit" onClick={this.loginClickEvent} value="Login"></input>
              </div>
              <p>Forget Password ?<Link to='' className="aLink">Click Here</Link> <button className="btn btn-info" onClick={this.signUpClickEvent}>Email Sign Up</button> </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Auth;

/*
<h1>Auth</h1>
        <button className="btn btn-info" onClick={this.loginClickEvent}>Google Login</button>
*/
