import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../../../../images/209-2097878_laundry-dry-cleaning-cleaning-and-laundry-logo-png.png'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light navContent">
                <div className="container-fluid">
                    <h2 style={{color:"#08d4a8", marginLeft:"40px"}}><img style={{width:"60px"}} src={logo} alt=""/>GoWash</h2>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto me-5">
                            <Link className="nav-link active text-style" to="/home">Home</Link>
                            <Link className="nav-link active text-style" to="/service">Services</Link>
                            <Link className="nav-link active text-style" to="/home">Blog</Link>
                            <Link className="nav-link active text-style" to="/home">Admin</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;