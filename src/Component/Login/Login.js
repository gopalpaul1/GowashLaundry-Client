import React, { useState } from 'react';
import firebase from "firebase/app";
import firebaseConfig from '../../firebaseConfig';
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import googleIcon from '../../images/Group 573.png'
import { UserContext } from '../../App';
import { useContext } from 'react';
import './Login.css'
import Navbar from '../Home/Header/Navbar/Navbar';


!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const Login = () => {

    const provider = new firebase.auth.GoogleAuthProvider();
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleSignin = () => {
        firebase.auth().signInWithPopup(provider)
            .then(result => {

                const { displayName, email, photoURL } = result.user
                const signedIn = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedIn)
                setLoggedInUser(signedIn)
                history.replace(from)

            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <Navbar/>
            <div className="loginContent">
                <h2 style={{ color: "cyan" }}>GoWash<small style={{ fontSize: "medium" }}>Laundry</small></h2>
                <button className="GoogleLogin" onClick={handleSignin}><img style={{ width: "22px" }} src={googleIcon} alt="icons" /> Signin with Google</button>
            </div>
        </div>

    );
};

export default Login;