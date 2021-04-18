import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import ServiceHeader from '../ServiceHeader/ServiceHeader';
import './Product.css'

const Product = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const onSubmit = data => {
        console.log(data)
        const service = {
            name: data.name,
            price: data.price,
            description: data.description,
            imageURL: imageURL
        };
        console.log(service)
        const url = `https://blooming-sea-02282.herokuapp.com/addService`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })

    };

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '8945d26544a4f268b04e67f6bbc6b27c')
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (

        <div className="row m-auto">
            <div className="col-md-4">
               <ServiceHeader/>
            </div>
            <div style={{marginTop:"60px",marginLeft:"100px"}} className="col-md-6">
                <h2 style={{color:"#00ffdd"}}>Add Services:</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="InputField" name="name" defaultValue="Service Name" {...register("name")} />
                    <br />
                    <input className="InputField" price="price" defaultValue="Service price" {...register("price")} />
                    <br />
                    <input className="InputField" name="exampleRequired" type="file" onChange={handleImageUpload} />
                    <br />
                    <textarea className="InputField" name="text" id="text" defaultValue="Write services description" {...register("description")} cols="40" rows="6"></textarea>
                    <br />
                    <input className="SubmitField" type="submit" />
                </form>
            </div>
        </div>

    );
};

export default Product;