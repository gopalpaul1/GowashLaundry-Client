import React from 'react';
import ServiceHeader from '../ServiceHeader/ServiceHeader';
import './Admin.css'
import { useForm } from "react-hook-form";

const Admin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="AdminContainer">
            <ServiceHeader />
            <div className="AdminContent">
                <h3 style={{color:"#00ffd5"}}>Make Admin</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input style={{width:"350px",padding:"3px"}} type="email" defaultValue="email" {...register("example")} />
                    <input className="submit" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Admin;