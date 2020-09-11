import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import AmazonPic from '../assets/amazonpic1.png';
import { auth } from '../Firebase/Firebase';

const Login = () => {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    
    //listening to the login and pushing the state of the user to the applcations data layer

    const login = (e) => {
        e.preventDefault();
        //login logic

        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            //logged in, then redirect
            history.push('/');
        })
        .catch((e) => alert(e.message))

    }

    const register = (e) => {
        e.preventDefault();
        //register logic
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            //logged in, then redirect to home page
            history.push('/');

        })
        .catch((e) => alert(e.message))
    }

    return ( 
        <div className="login">
            <Link to="/">
                <img className="login__logo" src={AmazonPic} />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email"  value={email} onChange={(e) => setEmail(e.target.value)} />
                    <h5>Password</h5> 
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={login} className="login__signInButton" type="submit">Sign In</button>
                </form>
                <p>By signing in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Internet Based Ads Notice</p>
                <button onClick={register} className="login__registerButton">Create Your Amazon Account</button>
            </div>

        </div>
     );
}
 
export default Login;