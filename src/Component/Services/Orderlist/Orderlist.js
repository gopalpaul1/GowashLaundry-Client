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
                setOrderList(data)
                console.log(data)
            })
    }, [])


    return (
        <div style={{ display: "flex" }} >
            <ServiceHeader />
            <div className="OrderlistContent">
                <h2 style={{ color: "#00ffc8" }}>OrderList</h2>
                <div className="row">
                    {
                        
                        orderList.map(order => <div style={{width:"280px",padding:"10px"}} className="col-md-4 m-5 orderlistCard"  key = {order._id}>

                                <div>
                                    <img style={{width:"100px",height:"60px",borderRadius:"10px"}} src={order.imageURL} alt=""/>
                                </div>
                                <h4 style={{color:"cyan"}}>{order.name}</h4>
                                <p style={{color:"grey", textAlign:"justify"}}>{order.description}</p>
    
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Orderlist;