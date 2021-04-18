import React, { useEffect, useState } from 'react';
import ServiceHeader from '../ServiceHeader/ServiceHeader';
import './Orderlist.css'

const Orderlist = () => {
    const [orderList, setOrderList] = useState([])

    useEffect(() => {
        fetch('https://blooming-sea-02282.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [])

    return (
        <div style={{ display: "flex" }}>
            <ServiceHeader />
            <div className="OrderlistContent">
                <h2 style={{color:"#00ffc8"}}>OrderList</h2>
                <div style={{ border: "2px solid lightGrey", padding: "10px", marginTop: "20px" }}>
                    <table class="table table-hover">
                        <thead style={{ backgroundColor: "grey" }}>
                            <tr>
                                <th style={{ color: "white" }} scope="col">Name</th>
                                <th style={{ color: "white" }} scope="col">Email</th>
                                <th style={{ color: "white" }} scope="col">Services</th>
                                <th style={{ color: "white" }} scope="col">Pay With</th>
                                <th style={{ color: "white" }} scope="col">Status</th>
                            </tr>
                        </thead>
                        {
                            orderList.map(order => <tbody key={order._id}>
                                <tr>
                                    <td>{order.order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.name}</td>
                                    <td>Visha Card</td>
                                    <td>done</td>
                                </tr>
                            </tbody>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orderlist;