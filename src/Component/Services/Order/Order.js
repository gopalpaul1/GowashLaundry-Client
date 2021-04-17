import React from 'react';
import './Order.css'
import ServiceHeader from '../ServiceHeader/ServiceHeader';
import { useParams } from 'react-router';

const Order = () => {

    let { id } = useParams();
    

    return (
        <div style={{display:"flex"}}>
            <ServiceHeader/>
            <div className="orderContent">
                <h2>Hello</h2>
            </div>


        </div>
    );
};

export default Order;