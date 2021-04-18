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

    useEffect(() => {
        fetch('http://localhost:5055/services')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const ordered = orders.find(order => order._id === id)
    console.log(ordered?.name)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        // const order = {
        //     name: data.name,
        //     email: data.email,
        //     service: data.
        // }
        // console.log(order)
        // const url = `http://localhost:5055/addReview`
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(review)
        // })
    };

    


    return (
        <div style={{ display: "flex" }}>
            <ServiceHeader />
            <div className="orderContent">
                <h2 style={{color:"#00ffd5"}}>Order</h2>
                <div>
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
                <div>
                    <div className="InputField">
                        <h4 style={{color:"cyan"}}>Visa Card Payment :</h4>
                        <div>
                            <PaymentProcess />
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Order;