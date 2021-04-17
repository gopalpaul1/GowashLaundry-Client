import React from 'react';
import image1 from '../../../images/service-3.jpg'
import image2 from '../../../images/service-2.jpg'
import image3 from '../../../images/service-1.jpg'
import './Delivery.css'

const Delivary = () => {


    return (
        <div style={{marginTop:"100px"}}>
            <div className="deliveryCard">
                <h2>Delivering Clean Clothes and Peace of Mind</h2>
                <p>REASONS TO CHOOSE US:</p>
            </div>
            <div className="row DeliveryCard">
                <div className="col-md-4">
                    <img className="deliveryImage" src={image1} alt="" />
                    <h4 className="deliveryCard">Professional Care</h4>
                    <p style={{color:"grey",textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veniam sed aperiam quaerat minima eius est aspernatur quia tempore reprehenderit architecto.</p>
                </div>
                <div className="col-md-4">
                    <img className="deliveryImage" src={image2} alt="" />
                    <h4 className="deliveryCard">Professional Care</h4>
                    <p style={{color:"grey",textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veniam sed aperiam quaerat minima eius est aspernatur quia tempore reprehenderit architecto.</p>
                </div>
                <div className="col-md-4">
                    <img className="deliveryImage" src={image3} alt="" />
                    <h4 className="deliveryCard">Professional Care</h4>
                    <p style={{color:"grey",textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veniam sed aperiam quaerat minima eius est aspernatur quia tempore reprehenderit architecto.</p>
                </div>
            </div>
            <button className="deliveryButton">MORE DETAILS US</button>
        </div>
    );
};

export default Delivary;