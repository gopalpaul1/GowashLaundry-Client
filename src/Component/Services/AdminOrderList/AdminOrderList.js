import React, { useEffect, useState } from 'react';
import ServiceHeader from '../ServiceHeader/ServiceHeader';

const AdminOrderList = () => {

    const [addList, setAddList] = useState([])

    useEffect(() => {
        fetch(`https://blooming-sea-02282.herokuapp.com/orders`)
        .then(res => res.json())
        .then(data => setAddList(data))
    }, [])


    const handleChange = (value, id) => {
        const status = {value: value, id: id}

        fetch(`https://blooming-sea-02282.herokuapp.com/update/${status._id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(status)
        })

    }
    return (

        <div className="flex">
            <ServiceHeader/>
            <div style={{marginLeft:"300px",marginRight:"40px" }}>
            <h2 style={{color:"cyan"}}>OrderList</h2>
            <div style={{ border: "2px solid lightGrey", padding: "10px" , marginTop:"20px"}}>
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
                            addList.map(order => <tbody key={order._id}>
                                <tr>
                                    <td>{order.order.name}</td>
                                    <td>{order.order.email}</td>
                                    <td>{order.name}</td>
                                    <td>Visha Card</td>
                                    <td><select onChange={(event) =>handleChange(order._id,event)} class="form-select" aria-label="Default select example">
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

export default AdminOrderList;