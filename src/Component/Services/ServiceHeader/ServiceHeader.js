import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../../images/209-2097878_laundry-dry-cleaning-cleaning-and-laundry-logo-png.png'
import './ServiceHeader.css'
import image4 from '../../../images/edit 1.png'
import image5 from '../../../images/grid 1.png'
import image6 from '../../../images/plus 1.png'
import image7 from '../../../images/shopping-cart 1.png'

const ServiceHeader = () => {
    return (
        <div className="orderContainer">
            <h4 className="colorCard"><img style={{width:"40px"}} src={logo1} alt=""/>GoWash Laundry</h4>
            <div className="OrderContent">
                <Link className="orderLink" to="/order/:id"><img style={{width:"20px"}} src={image7} alt=""/>Order</Link><br/>
                <Link className="orderLink" to="/orderlist"><img style={{width:"20px"}} src={image7} alt=""/>Order list</Link><br/>
                <Link className="orderLink" to="/review"><img style={{width:"20px"}} src={image7} alt=""/>Review</Link><br/>
                <Link className="orderLink" to="/product"><img style={{width:"20px"}} src={image6} alt=""/>Add Service</Link><br/>
                <Link className="orderLink" to="/admin"><img style={{width:"20px"}} src={image4} alt=""/>Make Admin</Link><br/>
                <Link className="orderLink" to="/manage"><img style={{width:"20px"}} src={image5} alt=""/>Manage Services</Link>
            </div>
        </div>
    );
};

export default ServiceHeader;