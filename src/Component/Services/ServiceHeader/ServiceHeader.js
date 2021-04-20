import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../../images/209-2097878_laundry-dry-cleaning-cleaning-and-laundry-logo-png.png'
import './ServiceHeader.css'
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl, faPlusCircle, faShoppingCart, faThLarge, faUserCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons'

const ServiceHeader = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch('https://blooming-sea-02282.herokuapp.com/isAdmin',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data))
    }, [])

    return (
        <div className="orderContainer">
            <h4 className="colorCard"><img style={{width:"40px"}} src={logo1} alt=""/>GoWash Laundry</h4>
           {  isAdmin ?  <div className="OrderContent">
                <Link className="orderLink" to="/order/:id"><FontAwesomeIcon icon={faShoppingCart} style={{fontSize:"16px"}}/> Order</Link><br/>
                <Link className="orderLink" to="/addinOrderList"><FontAwesomeIcon icon={faListUl} style={{fontSize:"16px"}}/> Order list</Link><br/>
                <Link className="orderLink" to="/review"><FontAwesomeIcon icon={faUserCircle} style={{fontSize:"16px"}}/> Review</Link><br/>
                <Link className="orderLink" to="/product"><FontAwesomeIcon icon={faPlusCircle} style={{fontSize:"16px"}}/> Add Service</Link><br/>
                <Link className="orderLink" to="/admin"><FontAwesomeIcon icon={faUserPlus} style={{fontSize:"16px"}}/> Make Admin</Link><br/>
                <Link className="orderLink" to="/manage"><FontAwesomeIcon icon={faThLarge} style={{fontSize:"16px"}}/> Manage Services</Link>
            </div>: <div className="OrderContent">
            <Link className="orderLink" to="/order/:id"><FontAwesomeIcon icon={faShoppingCart} style={{fontSize:"16px"}}/> Order</Link><br/>
                <Link className="orderLink" to="/orderlist"><FontAwesomeIcon icon={faListUl} style={{fontSize:"16px"}}/> Order list</Link><br/>
                <Link className="orderLink" to="/review"><FontAwesomeIcon icon={faUserCircle} style={{fontSize:"16px"}}/> Review</Link><br/>
                </div>}
        </div>
    );
};

export default ServiceHeader;