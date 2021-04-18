import React from 'react';
import ServiceHeader from '../ServiceHeader/ServiceHeader';
import './Review.css'
import { useForm } from "react-hook-form";

const Review = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
        const review = {
            name: data.name,
            company: data.company,
            comment: data.comment
        }
        console.log(review)
        const url = `http://localhost:5055/addReview`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
    };

    return (
        <div style={{ display: "flex" }}>
            <ServiceHeader />
            <div className="ReviewContent">
                <h2 style={{color:"#00ffd5"}}>Review</h2>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="InputField" name="name" defaultValue="name" {...register("name")} />
                        <br/>
                        <input className="InputField" name="company" defaultValue="company name" {...register("company")} />
                        <br/>
                        <textarea className="InputField" name="text" id="text" defaultValue="Write services comment" {...register("comment")} cols="40" rows="2"></textarea>
                        <br/>
                        <input className="SubmitField" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;