import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ServiceHeader from '../ServiceHeader/ServiceHeader';
import './Orderlist.css'

const Orderlist = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [orderList, setOrderList] = useState([])

    useEffect(() => {
        fetch(`https://blooming-sea-02282.herokuapp.com/orders?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setOrderList(data)
            })
    }, [])


    return (
        <div style={{ display: "flex" }} >
            <ServiceHeader />
            <div className="OrderlistContent">
                <h2 style={{ color: "#00ffc8" }}>OrderList</h2>
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
                                    <td>{order.order.email}</td>
                                    <td>{order.name}</td>
                                    <td>Visha Card</td>
                                    <td><select class="form-select" aria-label="Default select example">
                                        <option selected></option>
                                        <option class="text-danger" value="1">pending</option>
                                        <option class="text-warning" value="2">on going</option>
                                        <option class="text-success"  value="3">done</option>
                                    </select></td>
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