import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../../../../images/209-2097878_laundry-dry-cleaning-cleaning-and-laundry-logo-png.png'

const Navbar = () => {
    return (

        <nav className="navContent">
                <h2 style={{ color: "#08d4a8", marginLeft: "40px" }} className="NavTittle"><img style={{ width: "60px" }} src={logo} alt="" />GoWash</h2>
                <div className="NavTittle">
                    <Link className="text-style" to="/home">Home</Link>
                    <Link className="text-style" to="/service">Services</Link>
                    <Link className="text-style" to="/home">Blog</Link>
                    <Link className="text-style" to="/admin">Admin</Link>
                    <Link className="text-style" to="/login"><button className="LoginButton">Login</button></Link>
                </div>
        </nav>
    );
};

export default Navbar;