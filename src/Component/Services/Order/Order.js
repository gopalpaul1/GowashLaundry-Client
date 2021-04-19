import React, { useEffect, useState } from 'react';
import './Order.css'
import ServiceHeader from '../ServiceHeader/ServiceHeader';
import { useParams } from 'react-router';
import PaymentProcess from '../PaymentProcess/PaymentProcess';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { UserContext } from '../../../App';

const Order = () => {

    let { id } = useParams();
    const [orders, setOrders] = useState([])
    const [orderData, setOrderData] = useState(null)

    useEffect(() => {
        fetch('https://blooming-sea-02282.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const ordered = orders.find(order => order._id === id)
    console.log(ordered?.name)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        setOrderData(data)
    };

    const handlePaymentSuccess = paymentId => {

        const orderDetails = {
            ...loggedInUser,
            ...ordered,
            order: orderData,
            paymentId, 
            orderTime: new Date()
        }

        fetch('https://blooming-sea-02282.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({orders:orderDetails, email:loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Your Order Successfully done')
            }
        })
    }

    
    return (
        <div style={{ display: "flex" }}>
            <ServiceHeader />
            <div className="orderContent">
                <h2 style={{color:"#00ffd5"}}>Order</h2>
                <div style={{display: orderData ? 'none' : 'block'}}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="InputField" value={loggedInUser.name}  {...register("name")} />
                        <br/>
                        <input className="InputField" value={loggedInUser.email}  {...register("email")} />
                        <br/>
                        <input className="InputField" value={ordered?.name} {...register("order")} />
                        <br/>
                        <input className="SubmitField" type="submit" />
                    </form>
                </div>
                <div style={{display: orderData ? 'block' : 'none'}}>
                    <div className="InputField">
                        <h4 style={{color:"cyan"}}>Visa Card Payment :</h4>
                        <div>
                            <PaymentProcess handlePayment = {handlePaymentSuccess} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;