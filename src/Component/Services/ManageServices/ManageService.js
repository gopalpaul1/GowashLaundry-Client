import React, { useEffect, useState } from 'react';
import ServiceHeader from '../ServiceHeader/ServiceHeader';
import './MangeService.css'
import image1 from '../../../images/Group 33150.png'

const ManageService = () => {

    const [manageService, setManageService] = useState([])

    useEffect(() => {

        fetch('http://localhost:5055/services')
            .then(res => res.json())
            .then(data => setManageService(data))

    }, [])


    const deleteProduct = (event,id) => {

        fetch(`https://fierce-thicket-77007.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
            if(result){
                alert('service delete successfully !')
            }
        })

    }

    return (
        <div styel={{ display: "flex" }}>
            <ServiceHeader />
            <div className="manageCard">
                <h3 style={{color:"#00ffc8"}}>Manage Services</h3>
                <div style={{border:"2px solid lightGrey",padding:"10px", marginTop:"40px"}}>
                    <table class="table table-hover">
                        <thead style={{backgroundColor:"grey"}}>
                            <tr>
                                <th style={{color:"white"}} scope="col">Services Name</th>
                                <th style={{color:"white"}} scope="col">Price</th>
                                <th style={{color:"white"}} scope="col">Action</th>
                            </tr>
                        </thead>
                        {
                            manageService.map(service =><tbody key={service._id}>
                                <tr>
                                    <td>{service.name}</td>
                                    <td>${service.price}</td>
                                    <td><button onClick={() => deleteProduct(Event, service._id)} style={{border:"none"}}><img style={{width:"20px"}} src={image1} alt="images"/></button></td>
                                </tr>
                            </tbody>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageService;